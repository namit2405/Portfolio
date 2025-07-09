#!/usr/bin/env python
"""
Django development server runner
"""
import os
import sys
import subprocess
from pathlib import Path

def run_django():
    """Run Django development server"""
    # Set Django settings module
    os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'portfolio_backend.settings')
    
    # Change to Django project directory
    django_dir = Path(__file__).parent / 'portfolio_backend'
    os.chdir(django_dir)
    
    # Run migrations first
    print("Running Django migrations...")
    subprocess.run([sys.executable, 'manage.py', 'migrate'], check=True)
    
    # Start Django development server
    print("Starting Django development server on port 8000...")
    subprocess.run([sys.executable, 'manage.py', 'runserver', '0.0.0.0:8000'], check=True)

if __name__ == '__main__':
    run_django()