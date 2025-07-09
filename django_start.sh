#!/bin/bash
# Start Django backend server

echo "Starting Django portfolio backend on port 8000..."
cd portfolio_backend
python manage.py runserver 0.0.0.0:8000