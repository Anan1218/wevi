from typing import Dict, Any
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from contextlib import asynccontextmanager

from app.config import settings
from app.exceptions import setup_exception_handlers
from app.features.users.routes import router as users_router


@asynccontextmanager
async def lifespan(app: FastAPI):
    # Startup
    print("Starting up...")
    yield
    # Shutdown
    print("Shutting down...")


def create_app() -> FastAPI:
    app = FastAPI(
        title="Backend API",
        description="FastAPI backend with vertical slice architecture",
        version="1.0.0",
        lifespan=lifespan,
    )
    
    # CORS middleware
    app.add_middleware(
        CORSMiddleware,
        allow_origins=settings.ALLOWED_ORIGINS,
        allow_credentials=True,
        allow_methods=["*"],
        allow_headers=["*"],
    )
    
    # Exception handlers
    setup_exception_handlers(app)
    
    # Include routers
    app.include_router(users_router, prefix="/api/v1/users", tags=["users"])
    
    @app.get("/health")
    async def health_check() -> Dict[str, str]:
        return {"status": "healthy"}
    
    return app


app = create_app()