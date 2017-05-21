import React, {Component} from 'react';
import {readTextFile} from './QuestionsAndAnswers.js';
import Dialog from 'material-ui/Dialog'
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import './Popup.css';

class Popup extends Component {
    handleClose(wasCorrect) {
        this.setState({
            showAnswer: false,
        });
        this.props.closeQuestion(wasCorrect);
    };

    constructor(props) {
        super(props);
        this.state = {
            showAnswer: false,
        };
        this.handleClose.bind(this);
    }

    render() {
        const actions = [];
        if (this.state.showAnswer) actions.push(<FlatButton
            label="Forkert"
            primary={true}
            onTouchTap={this.handleClose.bind(this, false)}
        />, <FlatButton
            label="Korrekt"
            primary={true}
            onTouchTap={this.handleClose.bind(this, true)}
        />);

        return (
            <div className="popup">
                <Dialog
                    title={this.props.name}
                    actions={actions}
                    modal={false}
                    open={this.props.display}
                    onRequestClose={this.handleClose}>

                    {this.renderPopupContent()}

                </Dialog>
            </div>
        );
    }

    renderPopupContent() {
        let question = this.getQuestion(this.props.question)[0];
        let split = question.split("?");
        question = split[0].trim() + "?";

        let options = null;
        if (split[1]) {
            options = [];
            split = split[1].split(",");
            for (let i = 0; i < split.length; i++) {
                options.push(split[i].trim());
            }
        }
        return <div className="popup-content">
            <div className="question-section">
                <div className="question-title">Spørgsmål:</div>
                <div className="question">{question}</div>
            </div>
            {options ? this.renderOptions(options) : undefined}
            <div className="answer-section">
                {this.state.showAnswer ? <div className="actual-answer-section">
                    <div className="answer-title">Svar:</div>
                    <div className="answer">{this.getAnswer(this.props.question)}</div>
                </div>
                    : this.renderHiddenZone()}
            </div>
        </div>
    }

    renderHiddenZone() {
        return <RaisedButton onTouchTap={this.showAnswer.bind(this)}
                             style={{width: '75%', height: '150px', minHeight: '150px'}}
                             labelStyle={{fontSize: '20px'}}
                             label="Tryk her for at se svar" open={true}/>
    }

    renderOptions(options) {
        let arr = [];
        for (let i = 0; i < options.length; i++) {
            arr.push(<div key={"option " + i} className="option">
                <div className="option-title">{i+1})</div>
                <div className="option-answer">{options[i]}</div>
            </div>);
        }

        return <div className="options">{arr}</div>;
    }

    showAnswer() {
        this.setState({
            showAnswer: true
        })
    }

    getQuestion(position) {
        position %= 3; // todo remove
        let res = readTextFile()[0];
        return res[position];
    }

    getAnswer(position) {
        position %= 3; //todo remove
        let res = readTextFile()[1];
        return res[position];
    }
}

export default Popup;
