function Fruit() {
    this.x;
    this.y;

    this.pickLocation = function() {
        console.log("From fruit");
        this.x = (Math.floor(Math.random() * rows - 1) + 1) * scale;
        this.y = (Math.floor(Math.random() * columns - 1) + 1) * scale;
    }

    this.draw = function(){
        ctx.fillStyle = "#008000";
        ctx.fillRect(this.x, this.y, scale, scale);
    }
}