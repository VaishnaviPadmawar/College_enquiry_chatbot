from flask_sqlalchemy import SQLAlchemy
from datetime import datetime

# Initialize SQLAlchemy (no app here)
db = SQLAlchemy()

# ==============================
# Student Table (Optional Example)
# ==============================
class Student(db.Model):
    __tablename__ = "students"

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    email = db.Column(db.String(100), unique=True, nullable=False)

    def __repr__(self):
        return f"<Student {self.name}>"

# ==============================
# Chat Table (Main for Chatbot)
# ==============================
class Chat(db.Model):
    __tablename__ = "chats"

    id = db.Column(db.Integer, primary_key=True)
    user_message = db.Column(db.Text, nullable=False)
    bot_response = db.Column(db.Text, nullable=False)
    timestamp = db.Column(db.DateTime, default=datetime.utcnow)

    def __repr__(self):
        return f"<Chat {self.user_message}>"

# ==============================
# Function to create database
# ==============================
def create_db():
    db.create_all()

# ==============================
# Function to insert chat data
# ==============================
def save_chat(user_msg, bot_res):
    new_chat = Chat(user_message=user_msg, bot_response=bot_res)
    db.session.add(new_chat)
    db.session.commit()