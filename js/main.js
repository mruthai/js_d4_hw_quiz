
    


const keyAndAnswer = [
    {
        id: '0',
        question: '1.) Water freezes at what temperature in celsius?',
        userAnswer: '',
        answer: '0'
    },
    {
        id: '1',
        question: '2.) What is the symbol for floor divide?',
        userAnswer: '',
        answer: '//'
    },
    {
        id: '2',
        question: '3.) What is the symbol for for grapes?',
        answer: '%'
    },
    {
        id: '3',
        question: '4.) What is 2 + 2',
        answer: '4'
    },
    {
        id: '4',
        question: '5.) How many holes does a donut have?',
        answer: '1'
    },
    {
        id: '5',
        question: '6.) James Bond goes by what MI6 number?',
        answer: '007'
    },
    {
        id: '6',
        question: '7.) How many is one pair of shoes?',
        answer: '1'
    },
    {
        id: '7',
        question: '8.) How many fingers do you have?',
        answer: '8'
    },
    {
        id: '8',
        question: '9.) How many wheels are on bicycle?',
        answer: '2'
    },
    {
        id: '9',
        question: '10.) How many people fit in a bobsled?',
        answer: '4'
    },
  

]
console.log(keyAndAnswer)


var questionContainer = document.getElementById('quiz')
for (const keyAnd of keyAndAnswer) {
    questionContainer.innerHTML += `
    <div class="questionBox" id="r${keyAnd.id}">
        <h4>${keyAnd.question}</h4>
        <input class="answerOne" id="q${keyAnd.id}" placeholder="Your Answer" type="text" name="answerOne">
    </div>

 
    `
}
let collection = []
const submitButton = document.getElementById('questionForm')
submitButton.addEventListener('submit', function(e) {
    e.preventDefault()
    for (let i = 0; i < keyAndAnswer.length ; i++) {
        let keyAndOne = document.getElementById(`r${i}`)
        let answerInput = submitButton.querySelector(`#q${i}`)
        collection.push(answerInput.value)
        if (collection[i] == keyAndAnswer[i][answer]) {
        keyAndOne.style.backgroundColor = 'green'
    }
}
})
console.log(collection)





