const canvas = document.querySelector(".canvas");
const ctx = canvas.getContext("2d");
const scale = 10;
const rows = canvas.height / scale;
const columns = canvas.width / scale;
let score = 0;
function setScore(){
    // console.log('setting score');
    score = document.getElementById("score").value;
}

function start(){
    console.log("2");
    setup();
    setup().update();
}

function disableButton(btn){
    console.log("3");
    document.getElementById(btn.id).disabled = true;
    console.log("4");
}
function myFunction(butt){
    console.log("1");
    disableButton(butt);
    start();
}


function increase(){
    setup().update();
    setup().update();
}

var snake;

function setup() {
    snake = new Snake();
    fruit = new Fruit();
    fruit.pickLocation();



    window.setInterval(() => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        fruit.draw();
        snake.update();
        snake.draw();

        if(snake.eat(fruit)){
            fruit.pickLocation();
        }
        snake.checkCollision();
        document.querySelector('.score').innerText = snake.total;
    }, 250);

    window.addEventListener('keydown', ((evt) => {
        // console.log(evt);
        const direction = evt.key.replace('Arrow', '');
        snake.changeDirection(direction);
    }))
};