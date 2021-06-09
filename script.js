const canvas = document.getElementById('snake')
const context = canvas.getContext('2d')
const box = 32
const direction = 'right'
const snake = []
snake[0] = {
    x: 8 * box,
    y: 8 * box
}

const createBG = () => {
    context.fillStyle = 'lightgreen'
    context.fillRect(0, 0, 16 * box, 16 * box)
}

const createSnake = () => {
    for(i = 0; i < snake.length; i++){
        context.fillStyle = 'purple'
        context.fillRect(snake[i].x, snake[i].y, box, box)
    }
}

const startGame = () => {
    createBG()
    createSnake()
    let snakeX = snake[0].x
    let snakeY = snake[0].y

    if(direction == 'right') snakeX += box
    if(direction == 'left') snakeX -= box
    if(direction == 'up') snakeY -= box
    if(direction == 'down') snakeY += box

    snake.pop();

    let newHead = {
        x: snakeX,
        y: snakeY
    }

    snake.unshift(newHead)
}

const game = setInterval(startGame, 100)
