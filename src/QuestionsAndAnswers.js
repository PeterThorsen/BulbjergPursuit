const textFile = 'Familie: Er Peter sød? Ja, nej (Ja)\n'+
    'Bulbjerg: Hvor langt er græsset på fodboldbanen? 1 cm, 2 cm (1 cm)\n' +
    'Test: abc (svar)';

let categories = [];
let questions = [];
let answers = [];
let alreadyRead = false;

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
    return [questions, answers];
}

export function getCategories() {
    readTextFile();
    return categories;
}