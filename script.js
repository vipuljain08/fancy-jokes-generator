const jokesContainer = document.getElementById('jokes--container')
const p1 = document.getElementById('one')
const p2 = document.getElementById('two')
const newJokeBtn = document.getElementById('new-joke')

let jokes = ''

function randomColor() {
    const color = '#'+Math.floor(Math.random()*16777215).toString(16)
    return color
}

function displayJokes() {
    let color = randomColor()
    jokesContainer.style.backgroundColor = color
    newJokeBtn.style.backgroundColor = color
    const {setup, punchline} = jokes
    p1.innerText = setup
    p2.innerText = punchline
}

async function getJokes() {
    try {
        const response = await fetch('https://official-joke-api.appspot.com/jokes/random')
        jokes = await response.json()
        // console.log(jokes)
        displayJokes()
    } catch(error) {
        console.log('Something went wrong', error)
    }
}

newJokeBtn.addEventListener('click', getJokes)

getJokes()