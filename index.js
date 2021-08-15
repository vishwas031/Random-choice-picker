const textarea = document.getElementById('textarea');
const allChoices = document.getElementById('choices');
// const startButton = document.getElementById('start-button');

textarea.focus();

textarea.addEventListener('keyup',(e)=>{
    createChoice(e.target.value);

    if(e.key === 'Enter'){
        setTimeout(()=>{
        e.target.value = ''
        },10)
    
    randomSelect()
    }
})

function createChoice(input){
    const choice = input.split(',').filter(cho => cho.trim()!== '').map(cho => cho.trim());
    choices.innerHTML = ''

    choice.forEach(cho => {
        const choices = document.createElement('span')
        choices.classList.add('btn')
        choices.classList.add('btn-danger')
        choices.innerText = cho
        allChoices.appendChild(choices)
    })

}

function randomSelect() {
    const times =30
    const interval = setInterval(()=>{
        const randomChoice = pickRandomChoice()

        highlightChoice(randomChoice)
        setTimeout(()=>{
            unHighlightChoice(randomChoice)
        },100)
    },100);

    setTimeout(()=>{
clearInterval(interval)

setTimeout(()=>{
    const randomChoice = pickRandomChoice()

    highlightChoice(randomChoice)
},100)
    },times *100)
}

function pickRandomChoice() {
    const choice = document.querySelectorAll('.btn-danger')
    return choice[Math.floor(Math.random() * choice.length)]
}

function highlightChoice(choice) {
    choice.classList.add('highlight')
}

function unHighlightChoice(choice) {
    choice.classList.remove('highlight')
}