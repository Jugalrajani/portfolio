console.log("js is connected");
let name="Jugal";
let Age=22;
console.log(name);
console.log(Age);
let city="Vadodara";
city ="Ahmedabad";
console.log(city);

function greet(personname){
    console.log("Hello,"+ personname +"!");
}

greet("jugal");
function add(a, b) {
  console.log(a + b);
}

add(5, 3); 

function addAndReturn(a, b) {
  return a + b;
}

let result = addAndReturn(5, 3); 
console.log(result);
console.log(result + 10); 
let heading = document.querySelector("h1");
console.log(heading);
heading.textContent = "HI! I'm Jugal";
let button = document.querySelector("#themeBtn");

button.addEventListener("click",function(){
  document.body.classList.toggle("dark-mode")
}
);
let age=20;

if (age>=18){
  console.log("You are eligable for voting");
}
else{
  console.log("You are not eligable for voting");
}
let skills=["HTML","CSS","JavaScript"];
console.log(skills[0]);
console.log(skills[1]);
console.log(skills[2]);
console.log(skills.length);
for(let i=0;i<skills.length;i++){
  console.log(skills[i]);
}
let student = {
  name: "Jugal",
  age: 22,
  city: "Vadodara",
  isLearning: true
};
console.log(student);
console.log(student.name);
console.log(student.age);
console.log(student.city);
let allSkills = [
  { name: "HTML", level: "Learning" },
  { name: "CSS", level: "Learning" },
  { name: "Java", level: "Background" }
];

console.log(allSkills[1].name);   
console.log(allSkills[2].level); 
let skillsArray =["Learning frontend development","Java background","From vadodara"];

let skillslist = document.querySelector("#skillslist");

for(let i=0;i<skillsArray.length;i++){
  let li = document.createElement("li");
  li.textContent =skillsArray[i];
  skillslist.appendChild(li);
}
let commentinput = document.querySelector("#commentinput");
let commentbtn = document.querySelector("#commentbtn");
let commentdisplay=document.querySelector("#commentdisplay");

commentbtn.addEventListener("click", function() {
  let typedValue = commentinput.value;

  if (typedValue === "") {
    commentdisplay.textContent = "Please type something first!";
  } else {
    fetch("http://localhost:3000/comments", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text: typedValue })
    })
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        commentdisplay.textContent = data.message;
        commentinput.value = "";
      });
  }
});