function computerResponse(){
    var items = Array("Rock", "Paper", "Scissors");
    var item = items[Math.floor(Math.random()*items.length)];
    return item;
}
function sendResponse(){
    let human_response = document.getElementById("move").value;
    document.getElementById("player_move").innerHTML = human_response;

    document.getElementById("response").innerHTML = computerResponse();
}