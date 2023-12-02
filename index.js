



let btns = document.querySelectorAll("#flex");
let animate = document.querySelectorAll(".animationbox");




btns.forEach((btn, index) => {
    const afterElement = animate[index]
    btn.addEventListener("click", function () {
        if(afterElement.className.includes("active")){
            animate.forEach(el => el.classList.remove("active"))
        }else{
            animate.forEach(el => el.classList.remove("active"))
            afterElement.classList.toggle("active")
        }

    })

})


