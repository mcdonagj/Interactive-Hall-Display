
function githubAccount() { return "mcdonagj"; }
function userpic() { return "mcdonaldg.png"; }
function graddate() { return "JMU '18"; }
function gameMessageHandler(msg) { }

var touchX = 0, touchY = 0, lastTouchX = 0, lastTouchY = 0;

var ballHeight = (windowHeight / 17.5), ballWidth = (windowHeight / 17.5);

var playerA_Height = (windowHeight / 4.5), playerB_Height = (windowHeight / 4.5);
var playerA_Width = 15, playerB_Width = 15;

// X Position should stay fixed; Y Position changes based on input.
var playerA_XPosition = 100, playerA_YPosition = 500;

// X Position should stay fixed; Y Position changes based on input.
var playerB_XPosition = (windowWidth - 100), playerB_YPosition = 500;

// Start the ball's position in the center of the screen.
var ball_XPosition = (windowWidth / 2), ball_YPosition = (windowHeight / 2);

var players = [false, false];
var player_IDs = [0, 0], playerID_Y = [0, 0];

function touchMove(x, y, id) {
    //touchX = x * windowWidth;
    var i;
    for (i = 0; i < player_IDs.length; i++) {
        if ((player_IDs[i] != id) && (player_IDs[i] == 0)) {
            player_IDs[i] = id;
        } else {
            if (id == player_IDs[0]) {
                playerID_Y[0] = y * windowHeight;
            } else if (id == player_IDs[1]) {
                playerID_Y[1] = y * windowHeight;
            }
        }
    }
    //touchY = y * windowHeight;        
}

function setup() {
    var canv = createCanvas(windowWidth, windowHeight);
    canv.parent("bgCanvas");
    fill(0, 0, 0, 0);
}

function createPlayerA() {
    //rect(playerA_XPosition, 0, 15, 15);
    fill(255, 0, 0);
    rect(playerA_XPosition, playerID_Y[0], playerA_Width, playerA_Height);
}

function createPlayerB() {
    // rect(playerB_XPosition, 0, 15, 15);
    fill(0, 0, 255);
    // rect(x, y, width, height)
    rect(playerB_XPosition, playerID_Y[1], playerB_Width, playerB_Height);
}

function createBall() {
    fill(0, 255, 0);
    // ellipse(x, y, width, height)
    ellipse(ball_XPosition, ball_YPosition, ballWidth, ballHeight);
}

function createArena() {
    // TODO: Create bounds for where the ball is in play. 
}

function draw() {
    background(51);
    createArena();
    createPlayerA();
    createPlayerB();
    createBall();
}