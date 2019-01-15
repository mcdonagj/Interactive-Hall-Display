function githubAccount() { return "mcdonagj"; }
function userpic() { return "mcdonaldg.png"; }
function graddate() { return "JMU '18"; }
function gameMessageHandler(msg) { }

let touchX = 0, touchY = 0, lastTouchX = 0, lastTouchY = 0;

// Set ball speed.
let xSpeed = -4;

// Set ball height & width.
let ballHeight = (windowHeight / 17.5), ballWidth = (windowHeight / 17.5);

// Set player A, player B paddle height.
let playerA_Height = (windowHeight / 4.5), playerB_Height = (windowHeight / 4.5);

// Set player A, player B paddle sizes.
let playerA_Width = 15, playerB_Width = 15;

// Set parameters for the front of each player's paddle.
let FRONT_OF_PLAYER_A = (playerA_XPosition + (playerA_Width / 2));
let FRONT_OF_PLAYER_B = (playerB_XPosition - (playerB_Width / 2));

// X Position should stay fixed; Y Position changes based on input.
let playerA_XPosition = 100, playerA_YPosition = (windowHeight / 2);

// X Position should stay fixed; Y Position changes based on input.
let playerB_XPosition = (windowWidth - 100), playerB_YPosition = (windowHeight / 2);

// Start the ball's position in the center of the screen.
let ball_XPosition = (windowWidth / 2), ball_YPosition = (windowHeight / 2);

// Store player identifiers and corresponding y coordinates.
let player_IDs = [0, 0], playerID_Y = [0, 0];

// Store the player scores.
let player_Scores = [0, 0];

function touchMove(x, y, id) {
    let i;
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
    let canv = createCanvas(windowWidth, windowHeight);
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
    text(player_Scores[0], windowWidth / 2, (windowHeight / 2));

    fill(255, 255, 255);
    textSize(25);
    text(player_Scores[1], windowWidth / 2, (windowHeight / 2));
    
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

    if (ball_XPosition <= playerA_XPosition) {
        if(ball_YPosition >= playerID_Y[0]) {
            changeDirection();
        }
    }

    if (ball_XPosition >= playerB_XPosition) {
        if(ball_YPosition <= playerID_Y[1]) {
            changeDirection();
        }
    }
}