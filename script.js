const paragraph = document.getElementById("hello");
paragraph.innerText = "Hello, World!";
paragraph.style.color = "blue";
console.log(paragraph.innerText)
const button = document.getElementById("changeTextButton");
button.addEventListener("click", function() {
    button.innerText = "Please wait...";
    button.style.backgroundColor = "yellow";
    button.disabled = true;
    paragraph.style.color = "red";
    document.body.style.backgroundColor = "lightGreen";
});
