const output = document.querySelector(".output");
const messageOut = document.querySelectorAll(".message span");
let score = 0;
    output.addEventListener("mouseenter", function(){
    output.style.backgroundColor = "blue";
})
    output.addEventListener("mouseleave", function () {
        output.style.backgroundColor = "white";
    })
    output.addEventListener("mousemove", function (e) {
        console.log(e.x);
        console.log(e.y);
        messageOut[0].innerText = e.x;
        messageOut[1].innerText = e.y;
        })
    document.addEventListener("DOMContentLoaded", function(){
        let div = document.createElement("div");
        div.classList.add("box");
        output.appendChild(div);
        div.x = div.offsetLeft;
        div.y = div.offsetTop;
        div.tempColor = "#" + Math.random().toString(16).substr(-6);
        div.style.backgroundColor = div.tempColor;
        div.addEventListener("mouseenter",function(e){
            div.style.backgroundColor = "red";
        });
        div.addEventListener("mouseleave", function (e) {
            div.style.backgroundColor = div.tempColor;
        })
        div.addEventListener("click", function (e) {
            div.tempColor = "#" + Math.random().toString(16).substr(-6);
            div.style.backgroundColor = div.tempColor;
            score++;
            messageOut[2].innerText = score;
        });
        div.steps = Math.random() * 20;
        div.direction = Math.floor(Math.random()*4);
        window.requestAnimationFrame(move); 
})

    function move(){
        let speed = Math.random()* 5 + 8;
        const box = document.querySelector(".box");
        let bounds = output.getBoundingClientRect();
        console.log(bounds);
        box.steps--;
        if(box.steps<0){
             box.direction = Math.floor(Math.random() * 4);
             box.steps = Math.random() * 20;
        }
        if(box.direction == 0 && box.x < bounds.right - 100){
            box.x += speed;
        }
        if (box.direction == 1 && box.x > bounds.left) {
            box.x -= speed;
        }
        if (box.direction == 2 && box.y < bounds.bottom - 100) {
            box.y += speed;
        }
        if (box.direction == 3 && box.y > bounds.top) {
            box.y -= speed;
        }
        box.style.top = box.y + "px";
        box.style.left = box.x + "px";
        window.requestAnimationFrame(move);
    }