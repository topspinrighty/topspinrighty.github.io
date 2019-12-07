function Snake(){
    this.x = 0;
    this.y = 0;
    this.xSpeed = scale * 1;
    this.ySpeed = 0;
    this.total = 0;
    this.tail = [];
    this.score = 0;

    this.draw = function(){
        ctx.fillStyle = "#3e3e3e";
        for(let i = 0; i<this.tail.length; i++){
            ctx.fillRect(this.tail[i].x, this.tail[i].y, scale, scale);
        }
        ctx.fillRect(this.x, this.y, scale, scale);
    }

    this.setScore = function(){
        this.score = document.getElementById("score").value;
    }

    this.update = function() {
        for(let i = 0; i<this.tail.length - 1; i++){
            this.tail[i] = this.tail[i+1];
        }
        this.tail[this.total - 1] = { x: this.x, y: this.y};

        this.x += this.xSpeed;
        this.y += this.ySpeed;
        
        if(this.x > canvas.width){
            this.x = 0;
        }
        if(this.x < 0){
            this.x = canvas.width;
        }
        if(this.y > canvas.height){
            this.y = 0;
        }
        if(this.y < 0){
            this.y = canvas.height;
        }
    }

    this.changeDirection = function(direction) {
        switch(direction) {
            case 'Up':
                this.xSpeed = 0;
                this.ySpeed = -scale * 1; 
                break;
            case 'Down':
                this.xSpeed = 0;
                this.ySpeed = scale * 1;
                break;
            case 'Left':
                this.xSpeed = -scale * 1;
                this.ySpeed = 0;
                break; 
            case 'Right':
                this.xSpeed = scale * 1;
                this.ySpeed = 0;
                break;  
        }
    }

    this.eat = function(fruit){
        // console.log(fruit);
        if(this.x == fruit.x && this.y == fruit.y){
            this.total++;
            if(this.total == score){
                console.log(score);
                this.winGame();
            }
            return true;
        }
        return false;
    }

    this.checkCollision = function(){
        for(var i = 0; i<this.tail.length; i++){
            // console.log(this.tail[i]);
            // console.log(this.x, this.y);
            if(this.x === this.tail[i].x && this.y === this.tail[i].y){
                alert("Game Over!");
                this.total = 0;
                this.tail = [];
            }
        }
    }
    this.winGame = function(){
        alert("Game won! You may now move to the next level.");
        document.location.reload();
    }
}