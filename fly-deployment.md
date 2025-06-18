# Fly.io Deployment Guide

## Overview
Your setup is now fully configured for Fly.io deployment with managed PostgreSQL.

## Prerequisites
1. Install Fly CLI: `curl -L https://fly.io/install.sh | sh`
2. Create Fly.io account: `fly auth signup`
3. Login: `fly auth login`

## Backend Deployment

### 1. Create Backend App
```bash
cd backend
fly apps create wevi-backend --generate-name
```

### 2. Create Managed PostgreSQL Database
```bash
fly postgres create --name wevi-postgres --region sjc
```

### 3. Attach Database to Backend
```bash
fly postgres attach --app wevi-backend wevi-postgres
```

### 4. Set Environment Variables
```bash
fly secrets set SECRET_KEY="your-super-secret-key-here" --app wevi-backend
```

### 5. Deploy Backend
```bash
fly deploy --app wevi-backend
```

## Frontend Deployment

### 1. Create Frontend App
```bash
cd ../frontend
fly apps create wevi-frontend --generate-name
```

### 2. Set Environment Variables
```bash
# Replace with your actual backend URL
fly secrets set NEXT_PUBLIC_API_URL="https://wevi-backend.fly.dev" --app wevi-frontend
```

### 3. Deploy Frontend
```bash
fly deploy --app wevi-frontend
```

## Post-Deployment

### Update CORS Settings
After deployment, update your backend config to include the frontend URL:

```python
# In backend/app/config.py
ALLOWED_ORIGINS: List[str] = [
    "http://localhost:3000",
    "http://localhost:8000",
    "https://wevi-frontend.fly.dev",  # Add your actual frontend URL
]
```

Redeploy backend:
```bash
cd backend
fly deploy --app wevi-backend
```

## Key Features Enabled

✅ **Production-ready Dockerfiles** with multi-stage builds
✅ **Fly.toml configurations** for both services
✅ **Environment-aware settings** (dev vs production)
✅ **PostgreSQL support** with managed database
✅ **Health checks** configured
✅ **Auto-scaling** with machine sleep/wake
✅ **HTTPS** enforced
✅ **Proper CORS** configuration

## Database Migrations

When you implement database models, run migrations:
```bash
fly ssh console --app wevi-backend
# Inside the container:
alembic upgrade head
```

## Monitoring

- Backend: `https://wevi-backend.fly.dev/health`
- Frontend: `https://wevi-frontend.fly.dev`
- Logs: `fly logs --app wevi-backend` or `fly logs --app wevi-frontend`

## Cost Optimization

Both apps are configured for:
- Shared CPU instances (cheapest option)
- Auto-sleep when idle
- Minimal memory allocation
- Auto-wake on traffic

Expected cost: ~$0-5/month per app when idle, scales with usage.