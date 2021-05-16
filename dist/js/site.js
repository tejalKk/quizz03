
function submitForm(e) {
  e.preventDefault();
  let name = document.forms["welcome_form"]["name"].value;

  sessionStorage.setItem("name", name);

  location.href = "quiz.html";
}

let questions = [
  {
    id: 1,
    question: "A two digit number is 18 less than the square of the sum of its digits. How many such numbers are there?",
    
    answer: "2",
    options: [
      "1",
      "2",
      "3",
      "4"
    ]
  },
  {
    id: 2,
    question: " When asked what the time is,a person answered that the amount of time left is 1/5 of the time already completed.what is the time",
    answer: "8 pm",
    options: [
      "8 pm",
      "13 pm",
      "8 am",
      "18pm"
    ]
  },
  {
    id: 3,
    question: "What is the difference in the place value of 5 in the numeral 754853?",
    answer: "49950",
    options: [
      "59950",
      "49957",
      "49950",
      "None of these"
    ]
  },

{
  id: 4,
  question:" A running man crosses a bridge of length 500 meters in 4 minutes. At what speed he is running?",
  answer: "7.5",
  options: [
    "9.5",
    "7.5",
    "8.5",
    "6.5"
  ]
},

{
id: 5,
question: "A: B: C is in the ratio of 3: 2: 5. How much money will C get out of Rs 1260?",
answer: "49950",
options: [
  "59950",
  "49957",
  "49950",
  "None of these"
]
},

{
id: 6,
question: "What is the difference in the place value of 5 in the numeral 754853?",
answer: "None of these",
options: [
  "599",
  "499",
  "125",
  "None of these"
]
},

{
id: 7,
question: " If January 1, 1996, was Monday, what day of the week was January 1, 1997?",
answer:  "wednesday",
options: [
  "sunday",
  "monday",
  "friday",
  "wednesday"
]
},
{
id: 8,
question: "Passing marks in an examination are 40%. If a candidate gets 65 marks and fails by 15 marks, the maximum marks in the examination are",
answer: "200",
options: [
  "120",
  "220",
  "200",
  "150"
]
},
{
id: 9,
question: " The LCM of two numbers is 8919, and their sum is 1000. The two numbers are:",
answer: "991 and 9",
options: [
  "111 and 9",
  "991 and 9",
  "55 and 99",
  "None of these"
]
},
{
id: 10,
question: "A man throws two dice simultaneously on the floor. What is the probability of getting two numbers whose product is even?",
answer: "3/4",
options: [
  "7/3",
  "2/5",
  "3/4",
  "None of these"
]
},
];




let question_count = 0;
let points = 0;

window.onload = function() {
  show(question_count);

};

function next() {

   
  // if the question is last then redirect to final page
  if (question_count == questions.length - 1) {
    sessionStorage.setItem("time", time);
    clearInterval(mytime);
    location.href = "end.html";
  }
  console.log(question_count);

  let user_answer = document.querySelector("li.option.active").innerHTML;
  // check if the answer is right or wrong
  if (user_answer == questions[question_count].answer) {
    points += 1;
    sessionStorage.setItem("points", points);
  }
  console.log(points);

  question_count++;
  show(question_count);
}

function show(count) {
  let question = document.getElementById("questions");
  let [first, second, third, fourth] = questions[count].options;

  question.innerHTML = `
  <h2>Q${count + 1}. ${questions[count].question}</h2>
   <ul class="option_group">
  <li class="option">${first}</li>
  <li class="option">${second}</li>
  <li class="option">${third}</li>
  <li class="option">${fourth}</li>
</ul> 
  `;
  toggleActive();
}

function toggleActive() {
  let option = document.querySelectorAll("li.option");
  for (let i = 0; i < option.length; i++) {
    option[i].onclick = function() {
      for (let i = 0; i < option.length; i++) {
        if (option[i].classList.contains("active")) {
          option[i].classList.remove("active");
        }
      }
      option[i].classList.add("active");
    };
  }
}
