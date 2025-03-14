from fastapi import FastAPI
from app.routes import users

app = FastAPI()



app.include_router(users.router, prefix="/api")

@app.get("/")
def home():
    return {"message": "Cyber Club CRM API is running"}

