from flask import Flask, render_template, request
from database import db, create_db, save_chat, Student

app = Flask(__name__)

# ==============================
# Database Configuration
# ==============================
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///college.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

# Initialize database
db.init_app(app)

# Create tables when app starts
with app.app_context():
    create_db()

# ==============================
# Home Route
# ==============================
@app.route("/")
def home():
    return render_template("index.html")

# ==============================
# Chatbot Route
# ==============================
@app.route("/get", methods=["POST"])
def chatbot():
    user_message = request.form["msg"].lower()

    # ==========================
    # Chatbot Logic
    # ==========================
    if "admission" in user_message:
        bot_response = "Admission process starts in June. Please visit the college office or website."
    
    elif "fees" in user_message:
        bot_response = "Fees depend on the course. Contact the administration office for details."
    
    elif "courses" in user_message:
        bot_response = "We offer BCA, BBA, BSc, and other undergraduate programs."
    
    elif "location" in user_message:
        bot_response = "Our college is located in Nanded, Maharashtra."
    
    elif "contact" in user_message:
        bot_response = "You can contact us at: 9876543210 or email: info@college.com"
    
    else:
        bot_response = "Sorry, I didn't understand your question. Please try again."

    # ==========================
    # Save Chat in Database
    # ==========================
    save_chat(user_message, bot_response)

    return bot_response

# ==============================
# Optional: Add Student Data
# ==============================
@app.route("/add-student", methods=["POST"])
def add_student():
    name = request.form.get("name")
    email = request.form.get("email")

    new_student = Student(name=name, email=email)
    db.session.add(new_student)
    db.session.commit()

    return "Student added successfully!"

# ==============================
# Run App
# ==============================
if __name__ == "__main__":
    app.run(debug=True)