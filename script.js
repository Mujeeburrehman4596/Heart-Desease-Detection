document.getElementById('heart-form').addEventListener('submit', function(e) {
    e.preventDefault();
  
    // Get user input values
    var age = parseInt(document.getElementById('age').value.trim());
    var gender = document.getElementById('gender').value;
    var bloodPressure = parseFloat(document.getElementById('blood-pressure').value.trim());
    var cholesterol = parseFloat(document.getElementById('cholesterol').value.trim());
    var heartRate = parseFloat(document.getElementById('heart-rate').value.trim());
    var bloodSugar = parseFloat(document.getElementById('blood-sugar').value.trim());
  
    var resultMessage = '';
  
    // Basic detection logic (not a real medical model)
    if (bloodPressure > 140 || cholesterol > 200 || heartRate > 100 || bloodSugar > 120) {
      resultMessage = "There is a potential risk of heart disease. Please consult a doctor for a detailed diagnosis.";
    } else {
      resultMessage = "Your heart health seems normal based on the input values.";
    }
  
    displayResult(resultMessage);
  });
  
  // Display result in the UI
  function displayResult(message) {
    document.getElementById('result-message').innerText = message;
    document.getElementById('result-message').classList.add('font-weight-bold');
  }
  