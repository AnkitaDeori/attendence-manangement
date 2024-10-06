// Student Sign-Up Form Submission
document.getElementById('student-signup-form').addEventListener('submit', function(e) {
    e.preventDefault();
  
    const name = document.getElementById('signup-name').value;
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;
  
    // Store the signup information in localStorage (can be replaced with backend logic)
    let students = JSON.parse(localStorage.getItem('students')) || [];
    students.push({ name, email, password });
    localStorage.setItem('students', JSON.stringify(students));
  
    alert('Student account created successfully!');
    window.location.href = 'student-login.html'; // Redirect to login after sign-up
  });
  
  // Student Login Form Submission
  document.getElementById('student-login-form').addEventListener('submit', function(e) {
    e.preventDefault();
  
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;
  
    // Retrieve student data from localStorage
    let students = JSON.parse(localStorage.getItem('students')) || [];
    let student = students.find(student => student.email === email && student.password === password);
  
    if (student) {
      alert('Login successful');
      window.location.href = 'student-dashboard.html';
    } else {
      alert('Invalid credentials');
    }
  });
  