# Project Setup

## **1. Initializing the Git Repository**
1. Create a new repository on GitHub.
2. Clone the repository:
   ```sh
   git clone https://github.com/YOUR_USERNAME/cyber-club-crm.git
   cd cyber-club-crm
   ```

## **2. Environment Variables (`.env` Configuration)**
```
DATABASE_URL=postgresql://user:password@db:5432/clubcrm
SECRET_KEY=your_secret_key
JWT_ALGORITHM=HS256
```

## **3. Setting Up Docker**
```sh
docker-compose up --build -d
```

## **4. Running the Backend (FastAPI)**
```sh
cd backend
python -m venv venv
source venv/bin/activate
pip install -r requirements.txt
uvicorn main:app --reload
```

## **5. Running the Frontend (Next.js)**
```sh
cd frontend
yarn install
yarn dev
```

## **6. Finalizing the Setup**
```sh
git add .
git commit -m "Initial project setup"
git push origin main
```
