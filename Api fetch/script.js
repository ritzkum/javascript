const finalImg = document.getElementById("finalImg");
const textImg = document.getElementById("text");
const para = document.querySelector(".textImg");


function getRandom() {
    fetch("https://random.dog/woof.json")
        .then(res => res.json())
        .then(data => {
            finalImg.innerHTML = `<img style="width:400px; border:2px outset black ;border-radius:20px" src="${data.url}"/>`
        })
}
para.addEventListener('click', textAppear => {
    textImg.innerText = 'this is long text for photo'
})