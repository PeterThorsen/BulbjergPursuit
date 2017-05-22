import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Question from './Question';
import CheeseQuestion from './CheeseQuestion';
import {getCategories, setAnsweredQuestion} from './QuestionsAndAnswers.js';

class App extends Component {

    constructor(props) {
        super(props);

        let team1 = ["Liss"];
        let team2 = ["Marian"];
        let newTeams = [];
        newTeams.push(team1);
        newTeams.push(team2);
        let newTeamCheeses = [];
        newTeamCheeses.push([]);
        newTeamCheeses.push([]);
        for (let i = 0; i < 6; i++) {
            newTeamCheeses[0][i] = false;
            newTeamCheeses[1][i] = false;
        }


        this.state = {
            teams: newTeams,
            teamCheeses: newTeamCheeses,
            currentTeam: 0,
            openCheeseQuestion: -1,
        };
    }

    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h2>Bulbjerg Pursuit</h2>
                </div>
                <div className="main-content">
                    <div className="questions">
                        {this.buildQuestions()}
                    </div>
                    {this.buildSideBar()}
                    {this.state.openCheeseQuestion !== -1 ?
                        <CheeseQuestion key={"CheeseQuestion " + this.state.openCheeseQuestion}
                                        position={this.state.openCheeseQuestion}
                                        name={"Cheese: " + getCategories()[this.state.openCheeseQuestion]}
                                        answer={(wasCorrect, questionNumber) => this.updateGroup(this.state.openCheeseQuestion, true, wasCorrect, questionNumber)}/>
                        : undefined}


                </div>
            </div>
        );
    }

    colors = ['rgb(57, 160, 214)', 'rgb(218, 100, 52)', 'rgb(229, 202, 77)', 'rgb(215, 108, 178)',
        'rgb(32, 115, 89)', 'rgb(123, 86, 67)'];

    buildQuestions() {
        let arr = [];
        let categories = getCategories();
        for (let i = 0; i < categories.length; i++) {
            let holderI = i;
            let section = <div key={i} className="row"><Question key={holderI}
                                                                 position={holderI}
                                                                 answer={(wasCorrect, questionNumber) => this.updateGroup(holderI, false, wasCorrect, questionNumber)}
                                                                 name={categories[holderI]}
                                                                 color={this.colors[holderI]}/>
                {i + 1 !== categories.length ?
                    <Question key={i + 1}
                              position={i + 1}
                              answer={(wasCorrect, questionNumber) => this.updateGroup(i + 1, false, wasCorrect, questionNumber)}
                              name={categories[i + 1]}
                              color={this.colors[i + 1]}/> : undefined}
            </div>

            arr.push(section);
            if (i + 1 !== categories.length) i++;
        }

        return <div className="column"> {arr} </div>;
    }

    updateGroup(questionType, isCheese, wasCorrect, questionNumber) {
        this.setState({
            openCheeseQuestion: -1
        });

        if(wasCorrect) {
            setAnsweredQuestion(questionType, questionNumber)
        }
        if (isCheese && wasCorrect) {
            let newCheeses = this.state.teamCheeses;
            newCheeses[this.state.currentTeam][questionType] = wasCorrect;
            this.setState({
                teamCheeses: newCheeses
            })
        }

    else if (!wasCorrect) {
            let newTeam = this.state.currentTeam;
            newTeam++;
            newTeam %= this.state.teams.length+1;
            this.setState({
                currentTeam: newTeam,
            });
        }
    }


    buildSideBar() {

        let teams = [];
        for (let i = 0; i < this.state.teams.length; i++) {
            let members = [];
            for (let j = 0; j < this.state.teams[i].length; j++) {
                if (j + 1 === this.state.teams[i].length) {
                    members.push(<div key={"member " + i + "," + j}
                                      className="member"> {this.state.teams[i][j]} </div>);
                }
                else {
                    members.push(<div key={"member " + i + "," + j}
                                      className="member"> {this.state.teams[i][j]}, </div>);

                }
            }
            let team = <div className="team">
                <div className="team-title">Hold {i}:</div>
                <div className="team-member-list">{members}</div>
            </div>;
            teams.push(team);
        }

        let cheeses = [];
        for (let i = 0; i < this.state.teams.length; i++) {
            let allCheeses = [];
            for (let j = 0; j < this.colors.length; j++) {
                let style = {};
                style.backgroundColor = this.colors[j];
                style.opacity = this.state.currentTeam === i ? 1.0 : 0.4;
                allCheeses.push(<div key={"cheese " + i + "," + j} className="cheese"
                                     onClick={this.renderCheeseQuestion.bind(this, j, i)}
                                     style={style}> {this.state.teamCheeses[i][j] ? "√" : undefined} </div>);
            }
            let cheeseBlock = <div key={"cheeseBlock " + i} className="cheese-column">{teams[i]}
                <div className="team-cheese">{allCheeses}</div>
            </div>;
            cheeses.push(cheeseBlock);
        }


        return <div className="side-bar">
            <div className="team-cheeses">
                {cheeses}
            </div>
        </div>
    }

    renderCheeseQuestion(question, team) {
        if(team !== this.state.currentTeam) return;
        this.setState({
            openCheeseQuestion: question
        })
    }
}

export default App;
