function githubAccount() { return "mcdonagj"; }
function userpic() { return "mcdonaldg.png"; }
function graddate() { return "JMU '18"; }
function gameMessageHandler(msg) { }

var touchX = 0, touchY = 0, lastTouchX = 0, lastTouchY = 0;

// Set ball speed.
var xSpeed = 4;

// Set ball height & width.
var ballHeight = (windowHeight / 17.5), ballWidth = (windowHeight / 17.5);

// Set player A, player B paddle height.
var playerA_Height = (windowHeight / 4.5), playerB_Height = (windowHeight / 4.5);

// Set player A, player B paddle sizes.
var playerA_Width = 15, playerB_Width = 15;

// Set parameters for the front of each player's paddle.
var FRONT_OF_PLAYER_A = (playerA_XPosition + (playerA_Width / 2));
var FRONT_OF_PLAYER_B = (playerB_XPosition - (playerB_Width / 2));

// X Position should stay fixed; Y Position changes based on input.
var playerA_XPosition = 100, playerA_YPosition = (windowHeight / 2);

// X Position should stay fixed; Y Position changes based on input.
var playerB_XPosition = (windowWidth - 100), playerB_YPosition = (windowHeight / 2);

// Start the ball's position in the center of the screen.
var ball_XPosition = (windowWidth / 2), ball_YPosition = (windowHeight / 2);

// Store player identifiers and corresponding y coordinates.
var player_IDs = [0, 0], playerID_Y = [0, 0];

// Store the player scores.
var player_Scores = [0, 0];

function touchMove(x, y, id) {
    var i;
    for (i = 0; i < player_IDs.length; i++) {
        if ((player_IDs[i] != id) && (player_IDs[i] == 0)) {
            player_IDs[i] = id;
        } else {
            if (id == player_IDs[0]) {
                playerID_Y[0] = y * windowHeight;
            } else {
                // TODO: Test this behavior.
                playerID_Y[1] = y * windowHeight;
            }
        }
    }
}

function setup() {
    var canv = createCanvas(windowWidth, windowHeight);
    canv.parent("bgCanvas");
    
    // fill(r, g, b)
    fill(0, 0, 0);
}

function createPlayerA() {
    // fill(r, g, b)
    fill(255, 0, 0);

    // rect(x, y, width, height)
    rect(playerA_XPosition, playerID_Y[0], playerA_Width, playerA_Height);
}

function createPlayerB() {
    // fill(r, g, b)
    fill(0, 0, 255);

    // rect(x, y, width, height)
    rect(playerB_XPosition, playerID_Y[1], playerB_Width, playerB_Height);
}

function createBall() {
    // fill(r, g, b)
    fill(0, 255, 0);

    // ellipse(x, y, width, height)
    ellipse(ball_XPosition, ball_YPosition, ballWidth, ballHeight);
}

function createScoreboard() {

    fill(0, 0, 0);
    
    rect((windowWidth/2) - 125, windowHeight - 100, 250, 250);

    fill(255, 255, 255);
    textSize(25);
    text(player_Scores[0], ((windowWidth+100)) / 2, 700);

    fill(255, 255, 255);
    textSize(25);
    text(player_Scores[1], ((windowWidth-100)) / 2, 700);
    
}

function resetBoard(i) {
    Console.log("Player " + i + " wins!")
}

function changeDirection() {
    xSpeed = xSpeed * -1;
}

function draw() {
    background(51);
    createPlayerA();
    createPlayerB();
    createScoreboard();
    createBall();
    frameRate(120);
    ball_XPosition = ball_XPosition + xSpeed;

    if (ball_XPosition > windowWidth) {
        ball_XPosition = (windowWidth / 2);
        player_Scores[0] = player_Scores[0] + 1;
    }

    if (ball_XPosition < 0) {
        ball_XPosition = (windowWidth / 2);
        player_Scores[1] = player_Scores[1] + 1;
    }

    if (ball_YPosition == playerID_Y[0]) {
        //xSpeed = 4;
        changeDirection();
    }

    if (ball_YPosition == playerID_Y[1]) {
        //xSpeed = -4;
        //changeDirection();
    }
    
}