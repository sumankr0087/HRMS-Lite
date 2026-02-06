from sqlalchemy.orm import Session
from . import models, schemas

def create_employee(db: Session, employee: schemas.EmployeeCreate):
    db_employee = models.Employee(**employee.dict())
    db.add(db_employee)
    db.commit()
    db.refresh(db_employee)
    return db_employee


def get_employees(db: Session):
    return db.query(models.Employee).all()


def delete_employee(db: Session, emp_id: int):
    employee = db.query(models.Employee).filter(models.Employee.id == emp_id).first()
    if employee:
        db.delete(employee)
        db.commit()
    return employee


def mark_attendance(db: Session, attendance: schemas.AttendanceCreate):
    record = models.Attendance(**attendance.dict())
    db.add(record)
    db.commit()
    db.refresh(record)
    return record


def get_attendance(db: Session, employee_id: int):
    return db.query(models.Attendance).filter(
        models.Attendance.employee_id == employee_id
    ).all()
