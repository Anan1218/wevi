from typing import List, Optional
from fastapi import APIRouter, Depends, HTTPException, Query, status

from app.dependencies import get_db, get_current_user
from .handlers import UserHandler
from .schemas import (
    UserResponse,
    UsersListResponse,
    UserCreateRequest,
    UserCreateResponse,
    UserUpdateRequest,
    UserUpdateResponse,
    UserDeleteResponse,
    ErrorResponse
)

router = APIRouter()


def get_user_handler(db=Depends(get_db)) -> UserHandler:
    """Dependency to get user handler."""
    return UserHandler(db_session=db)


@router.post(
    "/",
    response_model=UserCreateResponse,
    status_code=status.HTTP_201_CREATED,
    responses={400: {"model": ErrorResponse}, 422: {"model": ErrorResponse}}
)
async def create_user(
    request: UserCreateRequest,
    handler: UserHandler = Depends(get_user_handler)
) -> UserCreateResponse:
    """
    Create a new user.
    
    Args:
        request: User creation request
        handler: User handler dependency
        
    Returns:
        Created user response
    """
    user = await handler.create_user(request.user)
    return UserCreateResponse(data=user)


@router.get(
    "/",
    response_model=UsersListResponse,
    responses={422: {"model": ErrorResponse}}
)
async def get_users(
    skip: int = Query(0, ge=0, description="Number of users to skip"),
    limit: int = Query(10, ge=1, le=100, description="Maximum number of users to return"),
    is_active: Optional[bool] = Query(None, description="Filter by active status"),
    handler: UserHandler = Depends(get_user_handler)
) -> UsersListResponse:
    """
    Get users with pagination and filtering.
    
    Args:
        skip: Number of users to skip
        limit: Maximum number of users to return
        is_active: Filter by active status
        handler: User handler dependency
        
    Returns:
        Users list response
    """
    users, total = await handler.get_users(skip=skip, limit=limit, is_active=is_active)
    page = (skip // limit) + 1
    return UsersListResponse(
        data=users,
        total=total,
        page=page,
        size=limit
    )


@router.get(
    "/{user_id}",
    response_model=UserResponse,
    responses={404: {"model": ErrorResponse}}
)
async def get_user(
    user_id: int,
    handler: UserHandler = Depends(get_user_handler)
) -> UserResponse:
    """
    Get user by ID.
    
    Args:
        user_id: User ID
        handler: User handler dependency
        
    Returns:
        User response
    """
    user = await handler.get_user_by_id(user_id)
    if not user:
        raise HTTPException(status_code=404, detail="User not found")
    
    return UserResponse(data=user)


@router.put(
    "/{user_id}",
    response_model=UserUpdateResponse,
    responses={404: {"model": ErrorResponse}, 422: {"model": ErrorResponse}}
)
async def update_user(
    user_id: int,
    request: UserUpdateRequest,
    handler: UserHandler = Depends(get_user_handler),
    current_user: str = Depends(get_current_user)
) -> UserUpdateResponse:
    """
    Update user.
    
    Args:
        user_id: User ID
        request: User update request
        handler: User handler dependency
        current_user: Current authenticated user
        
    Returns:
        Updated user response
    """
    user = await handler.update_user(user_id, request.user)
    return UserUpdateResponse(data=user)


@router.delete(
    "/{user_id}",
    response_model=UserDeleteResponse,
    responses={404: {"model": ErrorResponse}}
)
async def delete_user(
    user_id: int,
    handler: UserHandler = Depends(get_user_handler),
    current_user: str = Depends(get_current_user)
) -> UserDeleteResponse:
    """
    Delete user.
    
    Args:
        user_id: User ID
        handler: User handler dependency
        current_user: Current authenticated user
        
    Returns:
        Delete confirmation response
    """
    await handler.delete_user(user_id)
    return UserDeleteResponse()