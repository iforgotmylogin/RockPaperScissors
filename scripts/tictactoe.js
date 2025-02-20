let counter = 1;
let winner = false;

function setStart(startingVariable){
    counter = startingVariable;
}

function restartGame(){
    location.reload();
}

function changeImage(imageId){
    if(winner === false){
        let img = document.getElementById(imageId)
        if(img.src === "http://127.0.0.1:5500/images/O.png"){
            console.log("Cannot switch")
        }
        else if(img.src === "http://127.0.0.1:5500/images/X.png"){
            console.log("Cannot switch")
        }
        else{
            img.src = elementSwitch();
        }
    }
    getWinner();
}

function elementSwitch(){
    if (counter === 0){
        counter++;
        return "../images/O.png"
    }
    else{
        counter--;
        return "../images/X.png"
    }
}

// Literally the most inefficient way to wright this but it works :D
function getWinner(){
    if(document.getElementById('top-left').src === "http://127.0.0.1:5500/images/X.png" && document.getElementById('middle-center').src === "http://127.0.0.1:5500/images/X.png" &&
    document.getElementById('bottom-right').src === "http://127.0.0.1:5500/images/X.png"){
        document.getElementById("announceWinner").innerText = "X Wins!";
        winner = true;
    }
    else if(document.getElementById('top-left').src === "http://127.0.0.1:5500/images/O.png" && document.getElementById('middle-center').src === "http://127.0.0.1:5500/images/O.png" &&
    document.getElementById('bottom-right').src === "http://127.0.0.1:5500/images/O.png"){
        document.getElementById("announceWinner").innerText = "O Wins!";
        winner = true;
    }
    else if(document.getElementById('bottom-left').src === "http://127.0.0.1:5500/images/X.png" && document.getElementById('middle-center').src === "http://127.0.0.1:5500/images/X.png" &&
    document.getElementById('top-right').src === "http://127.0.0.1:5500/images/X.png"){
        document.getElementById("announceWinner").innerText = "X Wins!";
        winner = true;
    }
    else if(document.getElementById('bottom-left').src === "http://127.0.0.1:5500/images/O.png" && document.getElementById('middle-center').src === "http://127.0.0.1:5500/images/O.png" &&
    document.getElementById('top-right').src === "http://127.0.0.1:5500/images/O.png"){
        document.getElementById("announceWinner").innerText = "O Wins!";
        winner = true;
    }
    else if(document.getElementById('bottom-left').src === "http://127.0.0.1:5500/images/X.png" && document.getElementById('middle-center').src === "http://127.0.0.1:5500/images/X.png" &&
    document.getElementById('top-right').src === "http://127.0.0.1:5500/images/X.png"){
        document.getElementById("announceWinner").innerText = "X Wins!";
        winner = true;
    }
    else if(document.getElementById('bottom-left').src === "http://127.0.0.1:5500/images/O.png" && document.getElementById('middle-center').src === "http://127.0.0.1:5500/images/O.png" &&
    document.getElementById('top-right').src === "http://127.0.0.1:5500/images/O.png"){
        document.getElementById("announceWinner").innerText = "O Wins!";
        winner = true;
    }
    else if(document.getElementById('top-left').src === "http://127.0.0.1:5500/images/X.png" && document.getElementById('top-center').src === "http://127.0.0.1:5500/images/X.png" &&
    document.getElementById('top-right').src === "http://127.0.0.1:5500/images/X.png"){
        document.getElementById("announceWinner").innerText = "X Wins!";
        winner = true;
    }
    else if(document.getElementById('top-left').src === "http://127.0.0.1:5500/images/O.png" && document.getElementById('top-center').src === "http://127.0.0.1:5500/images/O.png" &&
    document.getElementById('top-right').src === "http://127.0.0.1:5500/images/O.png"){
        document.getElementById("announceWinner").innerText = "O Wins!";
        winner = true;
    }
    else if(document.getElementById('middle-left').src === "http://127.0.0.1:5500/images/X.png" && document.getElementById('middle-center').src === "http://127.0.0.1:5500/images/X.png" &&
    document.getElementById('middle-right').src === "http://127.0.0.1:5500/images/X.png"){
        document.getElementById("announceWinner").innerText = "X Wins!";
        winner = true;
    }
    else if(document.getElementById('middle-left').src === "http://127.0.0.1:5500/images/O.png" && document.getElementById('middle-center').src === "http://127.0.0.1:5500/images/O.png" &&
    document.getElementById('middle-right').src === "http://127.0.0.1:5500/images/O.png"){
        document.getElementById("announceWinner").innerText = "O Wins!";
        winner = true;
    }
    else if(document.getElementById('bottom-left').src === "http://127.0.0.1:5500/images/X.png" && document.getElementById('bottom-center').src === "http://127.0.0.1:5500/images/X.png" &&
    document.getElementById('bottom-right').src === "http://127.0.0.1:5500/images/X.png"){
        document.getElementById("announceWinner").innerText = "X Wins!";
        winner = true;
    }
    else if(document.getElementById('bottom-left').src === "http://127.0.0.1:5500/images/O.png" && document.getElementById('bottom-center').src === "http://127.0.0.1:5500/images/O.png" &&
    document.getElementById('bottom-right').src === "http://127.0.0.1:5500/images/O.png"){
        document.getElementById("announceWinner").innerText = "O Wins!";
        winner = true;
    }
    else if(document.getElementById('bottom-left').src === "http://127.0.0.1:5500/images/X.png" && document.getElementById('bottom-center').src === "http://127.0.0.1:5500/images/X.png" &&
    document.getElementById('bottom-right').src === "http://127.0.0.1:5500/images/X.png"){
        document.getElementById("announceWinner").innerText = "X Wins!";
        winner = true;
    }
    else if(document.getElementById('bottom-left').src === "http://127.0.0.1:5500/images/O.png" && document.getElementById('bottom-center').src === "http://127.0.0.1:5500/images/O.png" &&
    document.getElementById('bottom-right').src === "http://127.0.0.1:5500/images/O.png"){
        document.getElementById("announceWinner").innerText = "O Wins!";
        winner = true;
    }
    else if(document.getElementById('top-left').src === "http://127.0.0.1:5500/images/X.png" && document.getElementById('middle-left').src === "http://127.0.0.1:5500/images/X.png" &&
    document.getElementById('bottom-left').src === "http://127.0.0.1:5500/images/X.png"){
        document.getElementById("announceWinner").innerText = "X Wins!";
        winner = true;
    }
    else if(document.getElementById('top-left').src === "http://127.0.0.1:5500/images/O.png" && document.getElementById('middle-left').src === "http://127.0.0.1:5500/images/O.png" &&
    document.getElementById('bottom-left').src === "http://127.0.0.1:5500/images/O.png"){
        document.getElementById("announceWinner").innerText = "O Wins!";
        winner = true;
    }
    else if(document.getElementById('top-center').src === "http://127.0.0.1:5500/images/X.png" && document.getElementById('middle-center').src === "http://127.0.0.1:5500/images/X.png" &&
    document.getElementById('bottom-center').src === "http://127.0.0.1:5500/images/X.png"){
        document.getElementById("announceWinner").innerText = "X Wins!";
        winner = true;
    }
    else if(document.getElementById('top-center').src === "http://127.0.0.1:5500/images/O.png" && document.getElementById('middle-center').src === "http://127.0.0.1:5500/images/O.png" &&
    document.getElementById('bottom-center').src === "http://127.0.0.1:5500/images/O.png"){
        document.getElementById("announceWinner").innerText = "O Wins!";
        winner = true;
    }
    else if(document.getElementById('top-right').src === "http://127.0.0.1:5500/images/X.png" && document.getElementById('middle-right').src === "http://127.0.0.1:5500/images/X.png" &&
    document.getElementById('bottom-right').src === "http://127.0.0.1:5500/images/X.png"){
        document.getElementById("announceWinner").innerText = "X Wins!";
        winner = true;
    }
    else if(document.getElementById('top-right').src === "http://127.0.0.1:5500/images/O.png" && document.getElementById('middle-right').src === "http://127.0.0.1:5500/images/O.png" &&
    document.getElementById('bottom-right').src === "http://127.0.0.1:5500/images/O.png"){
        document.getElementById("announceWinner").innerText = "X Wins!";
        winner = true;
    }
}

window.onload = function() {
    document.getElementById('top-left').addEventListener('click', function(){
            changeImage('top-left');
    });
    document.getElementById('top-center').addEventListener('click', function(){
        changeImage('top-center');
    });
    document.getElementById('top-right').addEventListener('click', function(){
        changeImage('top-right');
    });
    document.getElementById('middle-left').addEventListener('click', function(){
        changeImage('middle-left');
    });
    document.getElementById('middle-center').addEventListener('click', function(){
        changeImage('middle-center');
    });
    document.getElementById('middle-right').addEventListener('click', function(){
        changeImage('middle-right');
    });
    document.getElementById('bottom-left').addEventListener('click', function(){
        changeImage('bottom-left');
    });
    document.getElementById('bottom-center').addEventListener('click', function(){
        changeImage('bottom-center');
    });
    document.getElementById('bottom-right').addEventListener('click', function(){
        changeImage('bottom-right');
    });
}