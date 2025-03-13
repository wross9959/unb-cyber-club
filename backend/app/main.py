from fastapi import FastAPI

app = FastAPI()

@app.get("/")
def read_root():
    return {"message": "Cyber Club CRM API is running"}


# test
from fastapi import APIRouter

router = APIRouter()

@router.get("/test")
async def test_api():
    return {"message": "API is working!"}

