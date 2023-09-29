window.onload = () => {
  document.getElementById("runLoop")?.addEventListener("click", handleClick);
};

function handleClick() {
  const theInput = document.getElementById("numberOfLoops");
  const nol = +theInput.value;

  let sum = 0;

  for (let i = 0; i < nol; i++) {
    sum += i; //Sum = sum + i
  }

  document.getElementById("result").innerHTML = sum;
}
