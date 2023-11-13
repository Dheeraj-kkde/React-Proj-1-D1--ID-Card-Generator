function generateIdCard(event) {
    event.preventDefault();
    const studentName = document.getElementById("student-name").value;
    const targetStudentName = document.getElementById("generated-student-name");
    targetStudentName.innerHTML = studentName;
  
    const collegeName = document.getElementById("college-name").value;
    const targetCollegeName = document.getElementById("generated-college-name");
    targetCollegeName.innerHTML = collegeName;
  
    const locationName = document.getElementById("location-name").value;
    const targetLocationName = document.getElementById("generated-location-name");
    targetLocationName.innerHTML = locationName;
  
    const generatedIDCardContainer = document.getElementById("generated-id-card");
    generatedIDCardContainer.style.display = "block";
  }