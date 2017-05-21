import React, {Component} from 'react';
import './Question.css';
import Popup from './Popup';
import {getRandomNumber} from './QuestionsAndAnswers.js';

class Question extends Component {

    constructor(props) {
        super(props);
        this.state = {
            display: false,
        };
    }

    render() {
        let randomNumber = getRandomNumber(this.props.position);

        if (this.state.display) {
            return <Popup key={this.props.position}
                          name={this.props.name}
                          closeQuestion={this.closeQuestion.bind(this)}
                          display={this.state.display}
                          position={this.props.position}
                          question={randomNumber}/>
        }
        return (
            <div className="block" style={{backgroundColor: this.props.color}}
                 onClick={this.openQuestion.bind(this)}>
                <div className="question-title">{this.props.name}</div>
                <div className="buttons">
                </div>
            </div>

        );
    }

    openQuestion() {
        this.setState({
            display: true,
        })
    }

    closeQuestion(wasCorrect) {
        this.setState({
            display: false,
        })
        this.props.answer(wasCorrect);
    }
}

export default Question;
