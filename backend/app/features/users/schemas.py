from typing import List, Optional
from pydantic import BaseModel, Field

from .models import User, UserCreate, UserUpdate


class UserResponse(BaseModel):
    """Standard user response schema."""
    success: bool = True
    data: User
    message: str = "User retrieved successfully"


class UsersListResponse(BaseModel):
    """Users list response schema."""
    success: bool = True
    data: List[User]
    total: int
    page: int = 1
    size: int = 10
    message: str = "Users retrieved successfully"


class UserCreateRequest(BaseModel):
    """User creation request schema."""
    user: UserCreate


class UserCreateResponse(BaseModel):
    """User creation response schema."""
    success: bool = True
    data: User
    message: str = "User created successfully"


class UserUpdateRequest(BaseModel):
    """User update request schema."""
    user: UserUpdate


class UserUpdateResponse(BaseModel):
    """User update response schema."""
    success: bool = True
    data: User
    message: str = "User updated successfully"


class UserDeleteResponse(BaseModel):
    """User deletion response schema."""
    success: bool = True
    message: str = "User deleted successfully"


class ErrorResponse(BaseModel):
    """Standard error response schema."""
    success: bool = False
    error: str
    message: str
    details: Optional[dict] = None