// Teacher Sign-Up Form Submission
document.getElementById('teacher-signup-form').addEventListener('submit', function(e) {
    e.preventDefault();
  
    const name = document.getElementById('signup-name').value;
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;
  
    // Store the signup information in localStorage (can be replaced with backend logic)
    let teachers = JSON.parse(localStorage.getItem('teachers')) || [];
    teachers.push({ name, email, password });
    localStorage.setItem('teachers', JSON.stringify(teachers));
  
    alert('Teacher account created successfully!');
    window.location.href = 'teacher-login.html'; // Redirect to login after sign-up
  });
  
  // Teacher Login Form Submission
  document.getElementById('teacher-login-form').addEventListener('submit', function(e) {
    e.preventDefault();
  
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;
  
    // Retrieve teacher data from localStorage
    let teachers = JSON.parse(localStorage.getItem('teachers')) || [];
    let teacher = teachers.find(teacher => teacher.email === email && teacher.password === password);
  
    if (teacher) {
      alert('Login successful');
      window.location.href = 'teacher-dashboard.html';
    } else {
      alert('Invalid credentials');
    }
  });
  