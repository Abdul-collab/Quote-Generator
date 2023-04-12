const QContainer = document.getElementById("quote");
const generate = document.getElementById("generate");
const url = document.getElementById = "http://api.quotable.io/random";

let getjoke = () =>{
    QContainer.classList.remove("fade");
    fetch(url)
    .then(data => data.json())
    .then(item =>{
        QContainer.textContent = `${item.content}`;
        QContainer.classList.add("fade");
});
}

generate.addEventListener("click",getjoke);
getjoke();