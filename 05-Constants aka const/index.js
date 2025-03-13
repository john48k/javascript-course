// const is a variable that cannot be reassigned


const PI = 3.14159;
let radius;
let circumference;

radius = Number(5);

circumference = 2 * PI * radius;

document.getElementById("mySubmit").onclick = function() {

    radius =  document.getElementById("myText").value;
    radius = Number(radius);
    circumference = 2 * PI * radius;
    document.getElementById("myH3").textContent = "The circumference total is: " + circumference + " cm"; 
    
}