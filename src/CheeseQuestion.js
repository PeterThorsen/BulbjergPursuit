import React, {Component} from 'react';
import './Question.css';
import Popup from './Popup';
import {getRandomNumber} from './QuestionsAndAnswers.js';

class CheeseQuestion extends Component {

    render() {
        let randomNumber = getRandomNumber(this.props.position);

        return <Popup key={this.props.position}
                      name={this.props.name}
                      closeQuestion={this.closeQuestion.bind(this)}
                      display={true}
                      position={this.props.position}
                      question={randomNumber}/>
    }

    closeQuestion(wasCorrect, questionNumber) {
        this.props.answer(wasCorrect, questionNumber);
    }
}

export default CheeseQuestion;
