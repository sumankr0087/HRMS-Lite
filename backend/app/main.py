from fastapi import FastAPI
from .database import Base, engine
from .routers import employee, attendance

Base.metadata.create_all(bind=engine)

app = FastAPI(title="HRMS Lite API")

app.include_router(employee.router)
app.include_router(attendance.router)

@app.get("/")
def root():
    return {"message": "HRMS Lite Backend is running"}
