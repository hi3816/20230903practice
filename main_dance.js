var canvas = document.getElementById('myCanvas');
var canvas2 = document.getElementById('myCanvas2');
var ctx = canvas.getContext('2d');
var ctx2 = canvas2.getContext('2d');

var b_img = new Image();
b_img.src = 'dance/dance3_g.png';

var b_img2 = new Image();
b_img2.src = 'dance/dance1_z.png';


var background = {
    x : 0,
    y : 0,
    width : 800,
    height : 600,
    draw(){
        // ctx.fillStyle = 'red';
        // ctx.fillRect(this.x,this.y,this.width,this.height);
        ctx.drawImage(b_img,0,0);
    }
}

var background2 = {
    x : 0,
    y : 0,
    width : 800,
    height : 600,
    draw(){
        // ctx.fillStyle = 'red';
        // ctx.fillRect(this.x,this.y,this.width,this.height);
        ctx2.drawImage(b_img2,0,0);
    }
}

// var dot = {
//     x : 50,
//     y : 50,
//     width : 100,
//     height : 100,
//     draw(){
//         ctx.fillStyle = 'green';
//         ctx.fillRect(this.x,this.y,this.width,this.height);
//     }
// }

b_img.onload = function(){

    background.draw();
    // dot.draw();

}

b_img2.onload = function(){

    background2.draw();
    // dot.draw();

}

document.addEventListener('keydown',function(e){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    if (e.code == 37 || e.key == "ArrowRight"){
        b_img.src = 'dance/dance2_g.png';
    } else if(e.key == 39 || e.key == "ArrowLeft") {
        b_img.src = 'dance/dance4_g.png';
    }
    else if(e.key == 38 || e.key == "ArrowUp") {
        b_img.src = 'dance/dance5_g.png';
    }
    else if(e.key == 40 || e.key == "ArrowDown") {
        b_img.src = 'dance/dance1_g.png';
    }else if(e.code === "Space") {
        b_img.src = 'dance/dance3_g.png';
    }else if(e.key == 65 || e.key == "a") {
        b_img2.src = 'dance/dance1_z.png';
    }else if(e.key == 68 || e.key == "d") {
        b_img2.src = 'dance/dance2_z.png';
    }
    background.draw();
    // dot.draw();
})