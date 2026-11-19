# College Enquiry Chatbot

A web-based college enquiry chatbot for MGM College of CS and IT, Nanded.

## Features

- Answers questions about courses, fees, admissions, facilities, staff, locations, and events
- Displays college-related images and a location map
- Stores chat and optional student information in SQLite
- Responsive browser interface

## Technologies

- Python and Flask
- Flask-SQLAlchemy
- SQLite
- HTML, CSS, and JavaScript

## Setup

1. Create and activate a Python virtual environment.
2. Install the project dependencies:

   ```bash
   pip install -r requirement.txt
   pip install Flask-SQLAlchemy
   ```

3. Start the application:

   ```bash
   python app.py
   ```

4. Open `http://127.0.0.1:5000` in a browser.

## Project Structure

- `app.py` - Flask routes and chatbot responses
- `database.py` - SQLAlchemy models and database helpers
- `templates/` - Flask HTML templates
- `static/` - Images, CSS, and JavaScript used by the Flask application
