const canvas = document.getElementById('canvas'); // grabs our canvas
const context = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let brownie = new Image();
brownie.src = "/src/resources/img/Chocolate-Fudge-Brownie.png";
// brownie.src = '/src/resources/img/Chocolate-Fudge-Brownie.png';
let altBrownie = new Image();
altBrownie.src = "/src/resources/img/Brownie_transparent.png";

let particleArray = []; // square brackets mean we have an array
const maxSize = 200;

const gravity = -2;

let keepSpawning = false;

// Helper Functions

function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
}

// Particles

class Particle{
    constructor(){
            this.x = Math.random() * canvas.width; // randomize this
            this.y = 0; 
            this.xMomentum = randomIntFromInterval(-3, 3) * Math.random(); 
            this.yMomentum = gravity;
       // opacity
    }
    draw(){
        context.globalAlpha = 1;
        context.drawImage(brownie,this.x, this.y, 20, 20);
    }
    update(i){
        this.y -= this.yMomentum;
        this.x -= this.xMomentum;
        this.yMomentum -= .2;
        if(this.y - brownie.height > canvas.height || this.x > canvas.width || this.x < 0 - brownie.width){ // if brownie is off the screen, remove it from the array
            particleArray.splice(i, 1);
        } else {
            this.draw();
        }
        console.log(particleArray.length);
    }
}

class BurstParticle{
    constructor(){
        this.x = Math.random() * canvas.width;
        this.y = randomIntFromInterval(-0, 0);
        this.yMomentum = randomIntFromInterval(-5,15) * Math.random();
        this.xMomentum = randomIntFromInterval(-10, 10) * Math.random(); 
        this.opacity = 1;
    }
    draw(){
        context.globalAlpha = this.opacity;
        this.opacity -= .01;
        this.opacity = Math.max(0, this.opacity);
        context.globalCompositeOperation = "destination-over";
        context.drawImage(brownie, this.x, this.y, 20, 20)
        // context.drawImage(altBrownie, this.x, this.y, 20, 20)
    }
    update(i){
        this.y -= this.yMomentum;
        this.yMomentum -= Math.random()*.2;
        this.x += this.xMomentum;
        this.draw();
        if(this.y - brownie.height - 100 > canvas.height || this.opacity == 0 || this.x > canvas.width || this.x < 0 - brownie.width){
            //console.log("Off Screen!");
            particleArray.splice(i, 1)
        }
    }
}

// Animation Functions

function init(){
    particleArray = [];
}

function animate(){
    if(document.getElementById('canvasContext') == null){
        console.error("Don't copy and paste without knowing what the code does!");
        return;
    }
    requestAnimationFrame(animate);
    canvas.width = window.innerWidth; // dynamically changes the width of the canvas
    canvas.height = window.innerHeight;
    context.clearRect(0,0,innerWidth, innerHeight);
    if(keepSpawning && particleArray.length < maxSize){
        particleArray.push(new Particle());
    }
    for(let i = 0; i < particleArray.length; i++){
        particleArray[i].update(i);
    }
}

//Functions To Spawn Particles

function spawnParticle(){
    if(particleArray.length < maxSize){
        particleArray.push(new Particle());
    }
}

function spawnManyParticles(){
    keepSpawning = !keepSpawning; // toggle our keep spawning value
}

function spawnBurst(){
    if(keepSpawning){
        keepSpawning = false;
        spawnInterval = null;
    }
    else{
        keepSpawning = true;
        spawnInterval = setTimeout(spawnManyParticles, 2000);
    }
}

function mouseBurst(e){ // e is the location of the mouse event
    for(let i = 0; i < 10; i++){ //instead of 10, you could do number of donuts per click (maxing out at a certain point, like 50)
        part = new BurstParticle();
        part.x = e.pageX;
        part.y = e.pageY;
        particleArray.push(part);
    }
}
document.addEventListener('mousedown', mouseBurst)
init();
animate();