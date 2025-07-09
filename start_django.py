#!/usr/bin/env python
"""
Start Django development server for portfolio backend
"""
import subprocess
import sys
import os
from pathlib import Path

def main():
    # Change to Django project directory
    portfolio_dir = Path(__file__).parent / 'portfolio_backend'
    os.chdir(portfolio_dir)
    
    print("Starting Django development server on port 8000...")
    print("API endpoints will be available at http://localhost:8000/api/")
    
    # Start Django server
    try:
        subprocess.run([
            sys.executable, 'manage.py', 'runserver', '0.0.0.0:8000'
        ], check=True)
    except KeyboardInterrupt:
        print("\nDjango server stopped.")
    except Exception as e:
        print(f"Error starting Django server: {e}")

if __name__ == '__main__':
    main()