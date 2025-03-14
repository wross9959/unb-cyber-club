from fastapi import APIRouter, Depends
from pydantic import BaseModel
from sqlalchemy.orm import Session
from app.database import get_db
from app.auth import verify_clerk_token

router = APIRouter()

# create a user
class UserCreate(BaseModel):
    clerk_id: str
    email: str
    name: str
    role: str = "member" 

# Get user data from Clerk JWT
@router.get("/users/me")
def get_current_user(user_data: dict = Depends(verify_clerk_token)):
    return {"user_id": user_data["sub"], "email": user_data["email"], "role": user_data.get("role", "member")}
