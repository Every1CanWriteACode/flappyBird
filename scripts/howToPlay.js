function renderHowToPlay(){
    let HTML = '';
    document.querySelectorAll('body').innerHTML = HTML;

    HTML+=`  
        <div class="main">
            <h2>How to play?</h2>
            <h5>I can tell you a secret</h5>
            <p>It is a simple game controlled with mouse left button. You can click anywhere in page and your bird will try to fly. Just remember do not touch the pipe otherwise your game will be finished!</p>
        </div>
        
        <form method="post" class="bounce">
            <button type="button" class="button" id="toMenu">I got it!</button>
        </form>
    `;

return  document.querySelector('body').innerHTML = HTML;

}
renderHowToPlay();

document.getElementById("toMenu").addEventListener("click", function() {
    location.href = "index.html"; 
});