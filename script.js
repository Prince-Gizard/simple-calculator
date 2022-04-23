let equal_pressed = 0;
//Refer all buttons excluding AC and DEL //Все кнопки кроме AC и DC
let button_input = document.querySelectorAll(".input-button");
//Refer input,equal,clear and erase //Кнопки ввода,равенства,очистки и стирания
let input = document.getElementById("input");
let equal = document.getElementById("equal");
let clear = document.getElementById("clear");
let erase = document.getElementById("erase");

window.onload = () => {
  input.value = "";
};

//Access each class using forEach//Доступ к каждому классу с помощью цикла
button_input.forEach((button_class) => {
  button_class.addEventListener("click", () => {
    if (equal_pressed == 1) {
      input.value = "";
      equal_pressed = 0;
    }
    //display value of each button//Отображаем значение каждой кнопки
    input.value += button_class.value;
  });
});

//Solve the user's input when clicked on equal sign//Решение при нажатии на кнопку "="
equal.addEventListener("click", () => {
  equal_pressed = 1;
  let inp_val = input.value;
  try {
    //evaluate user's input//Проверка пользовательского ввода
    let solution = eval(inp_val);
    //True for natural numbers//ок для натуральных чисел
    //false for decimals//не ок дял десятичных дробей
    if (Number.isInteger(solution)) {
      input.value = solution;
    } else {
      input.value = solution.toFixed(2);
    }
  } catch (err) {
    //If user has entered invalid input//Еслит ввёл что-то ни то
    alert("Invalid Input");
  }
});

//Clear Whole Input//Очистить весь ввод
clear.addEventListener("click", () => {
  input.value = "";
});
//Erase Single Digit//Удалить одну цифру
erase.addEventListener("click", () => {
  input.value = input.value.substr(0, input.value.length - 1);
});
