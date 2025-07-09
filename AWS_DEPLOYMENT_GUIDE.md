# AWS Deployment Guide - Portfolio Website

This guide will help you deploy your React + Django portfolio website to AWS using two different approaches.

## Architecture Overview

Your portfolio consists of:
- **Frontend**: React app (built with Vite)
- **Backend**: Django REST API
- **Database**: SQLite (development) → PostgreSQL (production)

## Option 1: AWS Elastic Beanstalk (Recommended for Beginners)

### Step 1: Prepare Your Application

1. **Install AWS CLI**:
   - Download from: https://aws.amazon.com/cli/
   - Configure: `aws configure`

2. **Install EB CLI**:
   ```bash
   pip install awsebcli
   ```

### Step 2: Configure Django for Production

Create `portfolio_backend/settings_production.py`:
```python
from .settings import *
import os

DEBUG = False
ALLOWED_HOSTS = ['*']  # Update with your domain

# Database
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql',
        'NAME': os.environ.get('RDS_DB_NAME'),
        'USER': os.environ.get('RDS_USERNAME'),
        'PASSWORD': os.environ.get('RDS_PASSWORD'),
        'HOST': os.environ.get('RDS_HOSTNAME'),
        'PORT': os.environ.get('RDS_PORT', '5432'),
    }
}

# Static files
STATIC_URL = '/static/'
STATIC_ROOT = os.path.join(BASE_DIR, 'staticfiles')
```

### Step 3: Create Deployment Files

Create `.ebextensions/01_packages.config`:
```yaml
packages:
  yum:
    postgresql-devel: []
```

Create `requirements.txt` in portfolio_backend:
```
django>=5.2.4
djangorestframework>=3.16.0
django-cors-headers>=4.7.0
python-dotenv>=1.1.1
psycopg2-binary>=2.9.0
gunicorn>=21.0.0
```

### Step 4: Deploy to Elastic Beanstalk

```bash
cd portfolio_backend
eb init
eb create production
eb deploy
```

## Option 2: AWS EC2 + RDS (More Control)

### Step 1: Launch EC2 Instance

1. **Create EC2 Instance**:
   - AMI: Ubuntu 22.04 LTS
   - Instance Type: t3.micro (free tier)
   - Security Group: Allow HTTP (80), HTTPS (443), SSH (22)

### Step 2: Set Up RDS Database

1. **Create RDS PostgreSQL Instance**:
   - Engine: PostgreSQL
   - Instance Class: db.t3.micro
   - Storage: 20GB
   - Username/Password: Save these credentials

### Step 3: Server Setup Script

SSH into your EC2 instance and run:

```bash
#!/bin/bash
# Update system
sudo apt update && sudo apt upgrade -y

# Install dependencies
sudo apt install python3 python3-pip nodejs npm nginx postgresql-client -y

# Install PM2 for process management
sudo npm install -g pm2

# Clone your repository
git clone <your-repo-url>
cd <your-repo-folder>

# Set up Python environment
python3 -m venv venv
source venv/bin/activate
pip install -r portfolio_backend/requirements.txt

# Build frontend
npm install
npm run build

# Copy frontend files to nginx
sudo cp -r dist/public/* /var/www/html/

# Set up Django
cd portfolio_backend
python manage.py collectstatic --noinput
python manage.py migrate

# Start Django with Gunicorn
gunicorn --bind 0.0.0.0:8000 portfolio_backend.wsgi:application
```

### Step 4: Configure Nginx

Create `/etc/nginx/sites-available/portfolio`:
```nginx
server {
    listen 80;
    server_name your-domain.com;

    location / {
        root /var/www/html;
        try_files $uri $uri/ /index.html;
    }

    location /api/ {
        proxy_pass http://127.0.0.1:8000;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
    }

    location /admin/ {
        proxy_pass http://127.0.0.1:8000;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
    }
}
```

Enable the site:
```bash
sudo ln -s /etc/nginx/sites-available/portfolio /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl restart nginx
```

## Option 3: AWS Amplify + Lambda (Serverless)

### Step 1: Frontend on Amplify

1. **Connect to Amplify**:
   - Go to AWS Amplify Console
   - Connect your GitHub/GitLab repository
   - Build settings for Vite:

```yaml
version: 1
frontend:
  phases:
    preBuild:
      commands:
        - npm install
    build:
      commands:
        - npm run build
  artifacts:
    baseDirectory: dist/public
    files:
      - '**/*'
  cache:
    paths:
      - node_modules/**/*
```

### Step 2: Backend on Lambda

Convert Django to serverless using Zappa:

```bash
pip install zappa
zappa init
zappa deploy production
```

## Environment Variables

For any deployment option, set these environment variables:

```bash
# Database
DATABASE_URL=postgresql://username:password@host:5432/dbname
RDS_DB_NAME=portfolio_db
RDS_USERNAME=your_db_user
RDS_PASSWORD=your_db_password
RDS_HOSTNAME=your-rds-endpoint.amazonaws.com
RDS_PORT=5432

# Django
DJANGO_SECRET_KEY=your-secret-key
DJANGO_SETTINGS_MODULE=portfolio_backend.settings_production
DEBUG=False

# CORS
CORS_ALLOWED_ORIGINS=https://your-domain.com
```

## Security Checklist

- [ ] Update ALLOWED_HOSTS in Django settings
- [ ] Set DEBUG=False in production
- [ ] Use environment variables for secrets
- [ ] Configure CORS properly
- [ ] Set up SSL/TLS certificate
- [ ] Configure security groups/firewall
- [ ] Regular backups of database

## Cost Estimation (Monthly)

**Option 1 (Elastic Beanstalk)**:
- EB Environment: $0 (free tier)
- EC2 t3.micro: $0 (free tier) or ~$8
- RDS db.t3.micro: $0 (free tier) or ~$13
- **Total: $0-21/month**

**Option 2 (EC2 + RDS)**:
- EC2 t3.micro: ~$8
- RDS db.t3.micro: ~$13
- **Total: ~$21/month**

**Option 3 (Amplify + Lambda)**:
- Amplify hosting: ~$1
- Lambda requests: ~$0-5
- RDS: ~$13
- **Total: ~$14-19/month**

## Recommended Approach

For your portfolio website, I recommend **Option 1 (Elastic Beanstalk)** because:
- Easy to set up and manage
- Built-in load balancing and auto-scaling
- Integrated with RDS
- Good for beginners
- Can handle traffic spikes

## Next Steps

1. Choose your deployment option
2. Set up AWS account and billing alerts
3. Follow the specific guide above
4. Configure your domain name
5. Set up SSL certificate (free with AWS Certificate Manager)
6. Monitor your application

## Troubleshooting

**Common Issues**:
- Database connection errors: Check security groups
- Static files not loading: Verify STATIC_ROOT settings
- CORS errors: Update CORS_ALLOWED_ORIGINS
- 502 errors: Check application logs

**Useful Commands**:
```bash
# Check EB logs
eb logs

# SSH into EB instance
eb ssh

# Check Django logs
tail -f /var/log/django.log
```