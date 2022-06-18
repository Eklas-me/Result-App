const btn = document.querySelector('.Result_btn');
const Refresh_btn = document.querySelector('.Refresh_btn');



btn.onclick = function() {
  const Banglainput = document.querySelector('#Bangla_input').value;  
  const Englishinput = document.querySelector('#English_input').value;  
  const Mathinput = document.querySelector('#Math_input').value;
  const Physicsinput = document.querySelector('#Physics_input').value;
  const SocialScienceinput = document.querySelector('#socialScience_input').value;
  const Religioninput = document.querySelector('#Religion_input').value;
  const result = document.querySelector('.result');
  const Results = document.querySelector('.Results');
  const tbody = document.querySelector('tbody');
  const totalResult = parseInt(Banglainput) + parseInt(Englishinput) + parseInt(Mathinput) + parseInt(Physicsinput) + parseInt(SocialScienceinput) + parseInt(Religioninput);

  if(Banglainput === ''){
    alert(`Please fill all the fields`);
  } else if(Englishinput === ''){
    alert('Please fill all the fields');
  } else if(Mathinput === ''){
    alert('Please fill all the fields');
  } else if(Physicsinput === ''){
    alert('Please fill all the fields');
  } else if(SocialScienceinput === ''){
    alert('Please fill all the fields');
  } else if(Religioninput === ''){
    alert('Please fill all the fields');
  } else {
    result.innerHTML += `<tr><td>${grade(Banglainput)}</td><td>${gpa(Banglainput)}</td></tr>` +
    `<tr><td>${grade(Englishinput)}</td><td>${gpa(Englishinput)}</td></tr>` + 
    `<tr><td>${grade(Mathinput)}</td><td>${gpa(Mathinput)}</td></tr>` + 
    `<tr><td>${grade(Physicsinput)}</td><td>${gpa(Physicsinput)}</td></tr>` + 
    `<tr><td>${grade(SocialScienceinput)}</td><td>${gpa(SocialScienceinput)}</td></tr>` + 
    `<tr><td>${grade(Religioninput)}</td><td>${gpa(Religioninput)}</td></tr>` ; 

    tbody.innerHTML += `
    <tr >
    <th class="total_marks">Total Marks </th>
    <th class="total_marks">= ${totalResult}</th>
    </tr>
    `;
    
    Results.style.display = 'block';
    btn.style.display = 'none';
    Refresh_btn.style.display = 'block';

    Refresh_btn.onclick = function() {
      location.reload();
    }
  }

}




function grade(marks){
  let grade;
  if(marks >= 0 && marks < 33){
    grade = 'F';
  } else if(marks >= 33 && marks < 40){
    grade = 'D';
  } else if(marks >= 40 && marks < 50){
    grade = 'C';
  } else if(marks >= 50 && marks < 60){ 
    grade = 'B';
  } else if(marks >= 60 && marks < 70){ 
    grade = 'A-';
  } else if(marks >= 70 && marks < 80){ 
    grade = 'A';
  } else if(marks >= 80 && marks <= 100){ 
    grade = 'A+';
  } else if(marks > 100 && marks < 0){
    gpa = 'Invalid';
    alert('Please enter a valid marks');
  }
  return grade; 
}


function gpa(marks){
  let gpa;
  if(marks >= 0 && marks < 33){
    gpa = '0';
  } else if(marks >= 33 && marks < 40){
    gpa = '1';
  } else if(marks >= 40 && marks < 50){
    gpa = '2';
  } else if(marks >= 50 && marks < 60){ 
    gpa = '3';
  } else if(marks >= 60 && marks < 70){ 
    gpa = '3.5';
  } else if(marks >= 70 && marks < 80){ 
    gpa = '4';
  } else if(marks >= 80 && marks <= 100){ 
    gpa = '5';
  } else if(marks > 100 && marks < 0){
    gpa = 'Invalid';
    alert('Please enter a valid marks');
  }
  return gpa; 
}
