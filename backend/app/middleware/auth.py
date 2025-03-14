import os
import jwt
import requests
from fastapi import Depends, HTTPException
from fastapi.security import HTTPBearer
from pydantic import BaseModel

# Load Clerk variables from .env
CLERK_JWKS_URL = os.getenv("CLERK_JWKS_URL")
CLERK_SECRET_KEY = os.getenv("CLERK_SECRET_KEY")

bearer_scheme = HTTPBearer()

# Fetch Clerk's public keys to verify JWTs
def get_jwks():
    response = requests.get(CLERK_JWKS_URL)
    if response.status_code != 200:
        raise HTTPException(status_code=500, detail="Unable to fetch Clerk JWKS")
    return response.json()["keys"]

# Validate Clerk JWT token
def verify_clerk_token(token: str = Depends(bearer_scheme)):
    jwks = get_jwks()
    
    try:
        payload = jwt.decode(token.credentials, key=jwks[0], algorithms=["RS256"])
        return payload  # Returns decoded JWT data
    except jwt.ExpiredSignatureError:
        raise HTTPException(status_code=401, detail="Token expired")
    except jwt.InvalidTokenError:
        raise HTTPException(status_code=401, detail="Invalid token")
