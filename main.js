var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');

var b_img = new Image();
b_img.src = 'pan.jpg';

var background = {
    x : 0,
    y : 0,
    width : 800,
    height : 600,
    draw(){
        ctx.fillStyle = 'red';
        ctx.fillRect(this.x,this.y,this.width,this.height);
        ctx.drawImage(b_img,0,0);
    }
}

var dot = {
    speed: 100,
    now: 0,
    then: Date.now(),
    delta:0,
    x : 50,
    y : 50,
    width : 100,
    height : 100,
    update() {
        // this.then = this.now;
        // this.now = Date.now();
        this.delta = (this.now - this.then) / 1000; // 새로운 프레임이 실행되는 시간 - 이전에 프레임이 실행되었던 시간 / 1000
        // this.x += this.delta * this.speed; // 거리 = 시간 * 속도
        console.log(this.then)
        this.x += 1;
        ctx.fillStyle = 'green';
        ctx.fillRect(this.x, this.y,this.width,this.height);
      }
      ,
    draw(){
        ctx.fillStyle = 'green';
        ctx.fillRect(this.x,this.y,this.width,this.height);
    }
}

b_img.onload = function(){

    background.draw();
    dot.draw();

}

// function paint() {
//     ctx.clearRect(0, 0,canvas.width,canvas.height); // clearRect(x, y, width, height)
//     background.draw();
//     dot.update();
//     window.requestAnimationFrame(paint);
//   }

// window.requestAnimationFrame(paint);

document.addEventListener('keydown',function(e){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    if (e.code == 37 || e.key == "ArrowRight"){
        dot.x = dot.x + 200;
    } else if(e.key == 39 || e.key == "ArrowLeft") {
        dot.x = dot.x - 200;
    }
    else if(e.key == 38 || e.key == "ArrowUp") {
        dot.y = dot.y - 200;
    }
    else if(e.key == 40 || e.key == "ArrowDown") {
        dot.y = dot.y + 200;
    }
    background.draw();
    dot.draw();
})