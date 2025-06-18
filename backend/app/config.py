import os
from typing import List
from pydantic import BaseSettings


class Settings(BaseSettings):
    APP_NAME: str = "Backend API"
    DEBUG: bool = False
    DATABASE_URL: str = os.getenv("DATABASE_URL", "sqlite:///./app.db")
    SECRET_KEY: str = os.getenv("SECRET_KEY", "your-secret-key-here")
    PORT: int = int(os.getenv("PORT", "8000"))
    
    # Fly.io specific settings
    FLY_APP_NAME: str = os.getenv("FLY_APP_NAME", "")
    FLY_REGION: str = os.getenv("FLY_REGION", "")
    
    # CORS settings - allow frontend domains
    ALLOWED_ORIGINS: List[str] = [
        "http://localhost:3000",
        "http://localhost:8000",
        # Add your production frontend URL here
        # e.g., "https://your-frontend-app.fly.dev"
    ]
    
    # Environment detection
    @property
    def is_production(self) -> bool:
        return bool(self.FLY_APP_NAME)
    
    class Config:
        env_file = ".env"


settings = Settings()