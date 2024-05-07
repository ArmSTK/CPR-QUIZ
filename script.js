function checkAnswer(answer) {
    const result = document.getElementById('result');
    if (answer === 'a') {
        result.textContent = "Correct ! it mean CP RETAILINK";
        result.style.color = 'green';
    } else {
        result.textContent = "Incorrect! Try again.";
        result.style.color = 'red';
    }
}
