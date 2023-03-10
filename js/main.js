
    


const keyAndAnswer = [
    {
        id: '0',
        question: '1.) Water freezes at what temperature in celsius?',
        userAnswer: '',
        answer: '0'
    },
    {
        id: '1',
        question: '2.) How many wheels are on a car?',
        userAnswer: '',
        answer: '4'
    },
    {
        id: '2',
        question: '3.) How many seeds does a mango have?',
        answer: '1'
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
    <div class="questionBox" id="ask${keyAnd.id}">
        <h4>${keyAnd.question}</h4>
        <input class="answerOne" id="response${keyAnd.id}" placeholder="Your Answer" type="text" name="answerOne">
    </div>

 
    `
}
let totalsum= 0
let collection = []
const submitButton = document.getElementById('questionForm')
submitButton.addEventListener('submit', function(e) {
    e.preventDefault()
    for (let i = 0; i < keyAndAnswer.length ; i++) {
        let keyAndOne = document.getElementById(`ask${i}`)
        let answerInput = submitButton.querySelector(`#response${i}`)
        collection.push(answerInput.value)
        if (collection[i].value == keyAndAnswer[i]['answer']) {
        keyAndOne.style.backgroundColor = 'green'
        } else {(collection[i] !== keyAndAnswer[i]['answer'])
        keyAndOne.style.backgroundColor = 'red'
            } 

        }
    const getTotalCount = document.getElementById('results')[0]
    getTotalCount.innerHTML +=`
        <h2>You got ${keyAndAnswer[i]['answer']}/10 </h2>
    `
    
})


console.log(collection)





