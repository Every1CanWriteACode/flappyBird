function renderMenu(){
    let HTML = '';
    document.querySelectorAll('body').innerHTML = HTML;

    HTML+=`
    <div class="menu">    
        <a href="#" id="play">Play</a>
        <a href="#" id="howToPlay">How to play</a>
    </div>
    `;

return  document.querySelector('body').innerHTML = HTML;

}
renderMenu();

document.getElementById("play").addEventListener("click", function() {
    location.href = "game.html"; 
});
