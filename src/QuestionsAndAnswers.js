const textFile = 'Familie: Er Peter sød? Ja, nej (Ja)\n'+
    'Bulbjerg: Hvor langt er græsset på fodboldbanen? 1 cm, 2 cm (1 cm)\n' +
    'Test: abc (svar)';

let categories = [];
let questions = [];
let answers = [];
let alreadyRead = false;
let randomNumbers = [];
export function readTextFile() {
    if(alreadyRead) {
        return [questions, answers];
    }
    let questionArr = textFile.split('\n');

    for (let i = 0; i < questionArr.length; i++) {
        let category = questionArr[i].split(':')[0];
        let found = -1;
        for (let j = 0; j < categories.length; j++) {
            if (categories[j] === category) {
                found = j;
                break;

            }
        }
        if (found === -1) {
            categories.push(category);
        }
    }

    questions = new Array(categories.length);
    answers = new Array(categories.length);

    for(let i = 0; i<questions.length; i++) {
        questions[i] = [];
        answers[i] = [];
    }

    for (let i = 0; i < questionArr.length; i++) {
        let splitted = questionArr[i].split(':');
        let category = splitted[0];
        let qAndA = splitted[1];
        let splitted2 = qAndA.split('(');
        let question = splitted2[0].split(')')[0];
        let answer = splitted2[1].split(')')[0];

        for(let j = 0; j<categories.length; j++) {
            if(categories[j] === category) {
                questions[j].push(question);
                answers[j].push(answer);
                break;
            }
        }
    }
    alreadyRead = true;
    for(let i = 0; i<categories.length; i++) {
        randomNumbers.push([]);
    }
    return [questions, answers];
}

export function getCategories() {
    readTextFile();
    return categories;
}

export function getRandomNumber(category) {
    readTextFile();
    let usedRandomNumbers = randomNumbers[category];
    let breakerCounter = 0;
    while(true) {
        //let random = Math.floor((Math.random() * questionsInCategories[category].length) + 1);
        let random = Math.floor((Math.random() * 20) + 1);
        if(usedRandomNumbers.indexOf(random) === -1) return random;

        /*if(usedRandomNumbers.length == questionsInCategories[category].length) {
            console.log("NOT ENOUGH QUESTIONS") // TODO
        }*/
        breakerCounter++;
        if(breakerCounter > 10) return -1;
    }



}

export function setAnsweredQuestion(category, question) {
    randomNumbers[category].push(question);
}