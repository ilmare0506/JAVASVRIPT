
const world = document.querySelector('#gameBoard');
const c = world.getContext('2d');
world.width = world.clientWidth;
world.height = world.clientHeight;


const keys = {
    ArrowLeft:{   pressed:false   },
    ArrowRight:{pressed:false  },  
    fired:{ pressed:false  }
}


class Player{
    constructor(){
        this.width=32; // Largeur du player
        this.height=32; // Hauteur du player
        this.velocity={
            x:0, // Vitesse de déplacement sur l'axe des X
            y:0 // Vitesse de déplacement sur l'axe des Y
        }
        this.position={
            x:(world.width-this.width)/2, // position du joueur par défaut au centre sur l'axe des X
            y:world.height - this.height // position du joueur par défaut en sur l'axe des Y
        }
    }
    draw(){
        // Le joueur sera un carré blanc
        c.fillStyle = 'white';
        c.fillRect(this.position.x,this.position.y,this.width,this.height);
    }
    update(){
        // A chaque mise à jour on dessine le joueur
        this.draw();
        if(keys.ArrowLeft.pressed && this.position.x >=0){
            this.velocity.x = -5;
        }
        else if(keys.ArrowRight.pressed && this.position.x + this.width <=world.width){
            this.velocity.x = 5;
        }
        else{
            this.velocity.x = 0;
        }
      
        this.position.x += this.velocity.x;
    }
}

const player = new Player();
let frames=0;

// Boucle d'animation
const animationLoop= ()=>{
   
    requestAnimationFrame(animationLoop);
    c.fillStyle = 'black';
    c.fillRect(0,0,world.width,world.height);
    // player.velocity.x =-1;
    player.update();
    
 frames++;
}
animationLoop();


addEventListener('keydown',(event)=>{
    switch(event.key){
        case 'ArrowLeft':
            keys.ArrowLeft.pressed = true;
            console.log('gauche');
            break;
        case 'ArrowRight':
            keys.ArrowRight.pressed = true;
            console.log('droite');
            break;
        } 
    })    
      


addEventListener('keyup',(event)=>{
        switch(event.key){
            case 'ArrowLeft':
                keys.ArrowLeft.pressed = false;
                console.log('gauche');
                break;
            case 'ArrowRight':
                keys.ArrowRight.pressed = false;
                console.log('droite');
                break;
            
            
        }
         
        })





