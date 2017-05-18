import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Question from './Question';
import {getCategories} from './QuestionsAndAnswers.js';

class App extends Component {

    constructor(props) {
        super(props);


        let team1 = ["Peter", "Charlotte"];
        let team2 = ["Palle", "Jesper"];
        let newTeams = [];
        newTeams.push(team1);
        newTeams.push(team2);
        let newTeamCheeses = [];
        newTeamCheeses.push([]);
        newTeamCheeses.push([]);
        for(let i = 0; i<6; i++) {
            newTeamCheeses[0][i] = false;
            newTeamCheeses[1][i] = false;
        }


        this.state = {
            teams: newTeams,
            teamCheeses: newTeamCheeses,
            currentTeam: 0,
        };

        console.log(this.state);
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

                </div>
            </div>
        );
    }

    colors = ['rgb(57, 160, 214)', 'rgb(218, 100, 52)', 'rgb(229, 202, 77)', 'rgb(215, 108, 178)', 'rgb(32, 115, 89)', 'rgb(123, 86, 67)'];

    buildQuestions() {
        let arr = [];
        let categories = getCategories();
        for (let i = 0; i < categories.length; i++) {
            let section = <div key={i} className="row"><Question key={i}
                                                                 position={i}
                                                                 answer={(wasCorrect) => this.updateGroup(i, false, wasCorrect)}
                                                                 name={categories[i]}
                                                                 color={this.colors[i]}/>
                {i + 1 !== categories.length ?
                    <Question key={i + 1} position={i + 1} name={categories[i + 1]}
                              color={this.colors[i + 1]}/> : undefined}
            </div>

            arr.push(section);
            if (i + 1 !== categories.length) i++;
        }

        return <div className="column"> {arr} </div>;
    }

    updateGroup(questionType, isCheese, wasCorrect) {
        let newCheeses = this.state.teamCheeses;
        newCheeses[this.state.currentTeam][questionType] = wasCorrect;

        this.setState({
            teamCheeses: newCheeses
        })
    }


    buildSideBar() {
        // Team scores top i form af udfyldte/ikke udfyldte oste
        // 30-50% visibility når det ikke er gruppens tur, gør så de ikke kan klikkes (active false?)
        // Når man klikker vælges spørgsmål 7-12
        // Farver er tidligere brugt array og sendes med til question vha. arr[pos+arr.length]

        let teams = [];
        for (let i = 0; i < this.state.teams.length; i++) {
            let members = [];
            for (let j = 0; j < this.state.teams[i].length; j++) {
                if (j + 1 === this.state.teams[i].length) {
                    members.push(<div key={"member " + i + "," + j} className="member"> {this.state.teams[i][j]} </div>);
                }
                else {
                    members.push(<div key={"member " + i + "," + j} className="member"> {this.state.teams[i][j]}, </div>);

                }
            }
            let team = <div className="team">
                <div className="team-title">Team {i}:</div>
                <div className="team-member-list">{members}</div>
            </div>;
            teams.push(team);
        }

        let cheeses = [];
        for (let i = 0; i < this.state.teams.length; i++) {
            let allCheeses = [];
            for (let j = 0; j < this.colors.length; j++) {
                //console.log("->", this.state.teamCheeses)
                allCheeses.push(<div key={"cheese " + i + "," + j} className="cheese" style={{backgroundColor: this.colors[j]}}> {this.state.teamCheeses[i][j] ? "gj" : undefined} </div>);
            }
            let cheeseBlock = <div key={"cheeseBlock " + i} className="cheese-column">{teams[i]} <div className="team-cheese">{allCheeses}</div> </div>;
            cheeses.push(cheeseBlock);
        }



        return <div className="side-bar">
            <div className="team-cheeses">
                {cheeses}
            </div>
        </div>
    }
}

export default App;
