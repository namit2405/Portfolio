# Portfolio Website - Local Setup Guide

This is a modern portfolio website built with React frontend and Django backend.

## Requirements

Before you start, make sure you have these installed on your computer:

1. **Node.js** (version 18 or higher)
   - Download from: https://nodejs.org/
   - Check if installed: `node --version`

2. **Python** (version 3.11 or higher)
   - Download from: https://www.python.org/downloads/
   - Check if installed: `python --version` or `python3 --version`

3. **Git** (to clone the repository)
   - Download from: https://git-scm.com/
   - Check if installed: `git --version`

## Setup Instructions

### Step 1: Get the Code

1. Clone or download this repository to your computer
2. Open a terminal/command prompt and navigate to the project folder:
   ```bash
   cd path/to/your/project-folder
   ```

### Step 2: Set Up the Frontend

1. Install frontend dependencies:
   ```bash
   npm install
   ```

2. The frontend is now ready!

### Step 3: Set Up the Backend

1. Navigate to the backend folder:
   ```bash
   cd portfolio_backend
   ```

2. Install Python dependencies:
   ```bash
   pip install django djangorestframework django-cors-headers python-dotenv
   ```
   
   Or if you have pip3:
   ```bash
   pip3 install django djangorestframework django-cors-headers python-dotenv
   ```

3. Set up the database:
   ```bash
   python manage.py migrate
   ```
   
   Or if you have python3:
   ```bash
   python3 manage.py migrate
   ```

4. Create a superuser (optional, for admin access):
   ```bash
   python manage.py createsuperuser
   ```

### Step 4: Run the Application

You need to run both the frontend and backend servers:

#### Terminal 1 - Backend Server:
```bash
# Make sure you're in the portfolio_backend folder
cd portfolio_backend

# Start the Django server
python manage.py runserver 8000
```

#### Terminal 2 - Frontend Server:

**For Windows Users:**
```cmd
# Make sure you're in the main project folder
cd ..

# Use the Windows batch file
start-windows.bat
```

**For Mac/Linux Users:**
```bash
# Make sure you're in the main project folder
cd ..

# Start the React development server
npm run dev
```

### Step 5: View Your Website

1. Open your web browser
2. Go to: `http://localhost:5000`
3. You should see your portfolio website!

## What Each Part Does

- **Frontend (React)**: The website you see in the browser
- **Backend (Django)**: Handles the contact form and stores messages
- **Database**: SQLite file that stores contact form submissions

## Admin Panel

To view contact form submissions:
1. Make sure the backend server is running
2. Go to: `http://localhost:8000/admin/`
3. Log in with the superuser account you created
4. Click on "Contacts" to see submitted messages

## Troubleshooting

### Common Issues:

1. **"Command not found" errors**:
   - Make sure Node.js and Python are properly installed
   - Restart your terminal after installation

2. **Port already in use**:
   - If port 5000 or 8000 is busy, close other applications or change the port

3. **Dependencies not installing**:
   - Try clearing the cache: `npm cache clean --force`
   - For Python: `pip cache purge`

4. **Database errors**:
   - Delete the `db.sqlite3` file and run migrations again:
     ```bash
     cd portfolio_backend
     rm db.sqlite3
     python manage.py migrate
     ```

## Customization

To customize the portfolio content:
1. Edit the file: `client/src/pages/portfolio.tsx`
2. Change the personal information, projects, and experience
3. The website will automatically update when you save

## Need Help?

If you run into issues:
1. Check that all requirements are installed
2. Make sure both servers are running
3. Look at the terminal output for error messages
4. Try restarting both servers

---

**Important**: Keep both terminal windows open while using the website. Closing them will stop the servers.