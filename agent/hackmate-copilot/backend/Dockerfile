# backend/Dockerfile

FROM python:3.10-slim

WORKDIR /app

ENV PYTHONPATH=/app

# Install OS dependencies
RUN apt-get update && apt-get install -y build-essential

# Copy and install requirements
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copy the app code
COPY . .

# Run FastAPI app
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "9009", "--reload"]


