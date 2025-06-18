# FastAPI Backend Setup - Vertical Slice Architecture

## Project Structure
```
backend/
├── app/
│   ├── __init__.py
│   ├── main.py
│   ├── config.py
│   ├── dependencies.py
│   ├── exceptions.py
│   └── features/
│       ├── __init__.py
│       └── users/
│           ├── __init__.py
│           ├── models.py
│           ├── schemas.py
│           ├── handlers.py
│           └── routes.py
├── requirements.txt
└── README.md
```

## Architecture Principles
- **Vertical Slice Architecture**: Each feature is organized as a complete vertical slice containing all layers (models, business logic, API routes)
- **Strong Typing**: All functions, classes, and data structures use proper type annotations
- **Dependency Injection**: FastAPI's dependency injection system for clean separation of concerns
- **Pydantic Models**: For request/response validation and serialization

## Features Structure
Each feature follows this pattern:
- `models.py`: Database models and domain entities
- `schemas.py`: Pydantic models for API requests/responses
- `handlers.py`: Business logic and use cases
- `routes.py`: FastAPI route definitions

## Tech Stack
- FastAPI: Modern, fast web framework
- Pydantic: Data validation and serialization
- Python 3.11+: Latest Python features and performance