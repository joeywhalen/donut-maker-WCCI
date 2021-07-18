const canvas = document.getElementById('canvas'); // grabs our canvas
const context = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let brownie = new Image();
brownie.src = '/src/resources/img/Chocolate-Fudge-Brownie.png';
let altBrownie = new Image();
altBrownie.src = '/src/resources/img/Brownie_transparent.png';

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
        context.drawImage(donut,this.x, this.y, 20, 20);
    }
    update(i){
        this.y -= this.yMomentum;
        this.x -= this.xMomentum;
        this.yMomentum -= .2;
        if(this.y - donut.height > canvas.height || this.x > canvas.width || this.x < 0 - donut.width){ // if donut is off the screen, remove it from the array
            particleArray.splice(i, 1);
        } else {
            this.draw();
        }
        console.log(particleArray.length);
    }
}