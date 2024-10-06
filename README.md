# attendence-manangement

AttendEase - Attendance Management System
Project by: Ankita Deori and Nayeema N Laskar
Overview
AttendEase is a simple and efficient attendance management system designed for both teachers and students. It streamlines the process of marking and tracking attendance, offering a user-friendly interface built with HTML, CSS, and JavaScript.

Teachers can mark attendance in real-time, view previous attendance records, and even issue warnings to students falling below 75% attendance. Meanwhile, students can view their attendance, and if absent, submit leave applications directly through the platform.

Features
For Teachers:
Sign Up / Sign In: Create an account or log in.
Course Management: Select course, year, and date.
Mark Attendance: Mark students as present or absent for the current day.
View Attendance: Review attendance records for previous classes.
Warning System: Identify and warn students with attendance below 75%.
Logout: Securely log out after the session.
For Students:
Sign Up / Sign In: Create an account or log in.
Attendance Overview: View attendance records for the selected course.
Submit Leave Application: Request leave for any missed days.
Logout: Securely log out after viewing attendance.
Installation and Usage
1. Clone the repository:
bash
Copy code
git clone https://github.com/yourusername/attendease.git
2. Navigate to the project directory:
bash
Copy code
cd attendease
3. Open the project in your browser:
You can simply open the index.html file in your preferred web browser to run the project.

Technologies Used
HTML: Structuring the web pages.
CSS: Designing the user interface.
JavaScript: Managing functionality, form validation, and dynamic interactions.
Project Structure
bash
Copy code
/css
  └── style.css         # Main stylesheet

/js
  ├── teacher.js        # Teacher dashboard logic
  └── student.js        # Student dashboard logic

index.html              # Landing page with navbar
teacher-login.html      # Teacher login & sign-up page
student-login.html      # Student login & sign-up page
teacher-dashboard.html  # Teacher's main dashboard
student-dashboard.html  # Student's main dashboard
Contributors
Ankita Deori
Nayeema N Laskar
Future Enhancements
Integration with a backend database for storing user information and attendance records.
Implement secure authentication (OAuth or JWT).
Add user profile customization for both teachers and students.
License
This project is open-source and free to use. Feel free to contribute or fork the repository!

