let block = document.getElementById("block");
let hole = document. getElementById("hole");
let character = document.getElementById("character");
let jumping = 0;
let points = 0;

hole.addEventListener('animationiteration', () => {
    let random = Math.random() * 3;
    let top = (random * 100) + 150;
    hole.style.top = -(top) + "px";
    points++;
});
setInterval(function(){
    let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    if(jumping==0){
        character.style.top = (characterTop+3)+"px";
    }
    let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    let holeTop = parseInt(window.getComputedStyle(hole).getPropertyValue("top"));
    let cTop = -(500-characterTop);
    
    if((characterTop>480)||((blockLeft<20)&&(blockLeft>-50)
    &&((cTop<holeTop)||(cTop>holeTop+130)))){
        alert("Game over. Score: "+(points-1));
        character.style.top = 100 + "px";
        points=0;
    }
},10);

function jump(){
    jumping = 1;
    let jumpCount = 0;
    let jumpInterval = setInterval(function(){
        let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
        if((characterTop>6) && (jumpCount<15)){
            character.style.top = (characterTop-5)+"px";
        }
        if(jumpCount>20){
            clearInterval(jumpInterval);
            jumping=0;
            jumpCount=0;
        }
        jumpCount++;
    },10);
}