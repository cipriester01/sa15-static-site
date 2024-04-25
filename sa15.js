const questions = [
    {
      question: "What is the file extension for Python?",
      options: [".python", ".p", ".py", ".pf"],
      correctAnswer: ".py"
    },
    {
      question: "Which of the following is not a valid variable name in Python?",
      options: ["my_variable", "404variable", "start_var", "pythonVariable"],
      correctAnswer: "404variable"
    },
    {
      question: "What differentiates tuples from  lists in Python?",
      options: ["Lists are mutable, tuples are immutable", "Tuples are mutable, lists are immutable", "Lists are only numbers", "Tuples cannot be used in Python"],
      correctAnswer: "Lists are mutable, tuples are immutable"
    }];
  
  let q_num = 0;
  function print_q() {
    const q_text = document.getElementById("question_form");
    const q_options = document.getElementById("q_options");
  
    q_text.textContent = questions[q_num].question;
    q_options.innerHTML = "";
  
    questions[q_num].options.forEach((option, index) => {
      const button = document.createElement("button");
      button.textContent = option;
      button.setAttribute("onclick", `q_ans('${option}')`);
      q_options.appendChild(button);
    });}
  
  function q_ans(user_choice) {
    const response_body = document.getElementById("response_form");
    const response = document.getElementById("response");
  
    if (user_choice === questions[q_num].correctAnswer) {
      response_body.textContent = "You are CORRECT!";
    } else {
      response_body.textContent = "WRONG! Try again...";
    }
    response.style.display = "block";
  }
  
  function next_q() {
    const response = document.getElementById("response");
    response.style.display = "none"; 
    q_num++;
    if (q_num < questions.length) {
      print_q();
    } else {
      alert("You passed!!");
      q_num = 0;
      print_q();
    }
  }
  
  print_q();
  