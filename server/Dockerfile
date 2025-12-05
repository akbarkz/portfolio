# Backend Dockerfile
FROM python:3.11-slim

WORKDIR /app

# Copy requirements and install dependencies
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copy application code
COPY . .

# Expose the port Flask runs on
EXPOSE 5000

# Run the Flask application
CMD ["python", "app.py"]
