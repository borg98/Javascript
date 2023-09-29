window.onload = () => {};

function handleClick() {}

function printList() {
  for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
  }
}

const numbers = [1, 1, 2, 3, 5, 8, 13];
console.log("Listan är:", numbers.length, "lång");

console.log("Värdet på position5:", numbers[5]);

printList();

numbers.push(21);

printList();

numbers.pop();

printList();

numbers.splice(1, 1);

printList();
