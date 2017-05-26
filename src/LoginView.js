import React, {Component} from 'react';
import App from './App';
import './LoginView.css';
import TextField from 'material-ui/TextField';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import RaisedButton from 'material-ui/RaisedButton';

class Question extends Component {

    constructor(props) {
        super(props);
        this.state = {
            teams: [["", "", ""],["", "", ""],["", "", ""]],
            showApp: false,
        };
    }

    render() {
        if (this.state.showApp) return <App teams={this.state.teams}/>;
        return <div className="login-view">
            <div className="login-view-main-content">
                <h1>Skriv hold</h1>
                {this.renderTeamSelector()}
                <RaisedButton label="Begynd spillet"
                              primary={true}
                              style={{marginTop: '40px'}}
                              onTouchTap={this.showApp.bind(this)}/>

            </div>
        </div>
    }

    showApp() {
        this.setState({
            showApp: true
        })
    }

    renderTeamSelector() {
        let innerContent = [];
        for (let i = 0; i < this.state.teams.length; i++) {
            let team = this.state.teams[i];
            let teamMembers = [];
            for (let j = 0; j < team.length; j++) {
                teamMembers.push(<TextField
                    key={"member" + i + "," + j}
                    hintText="Navn"
                    defaultValue={team[j]}
                    onChange={(event, text) => this.textChange(text, i, j)}
                />)
            }
            innerContent.push(teamMembers);
        }
        let content = [];
        for(let i = 0; i<innerContent.length; i++) {
            content.push(<div key={"login-row " + i} className="login-row">
                {innerContent[i]}
                <FloatingActionButton mini={true}
                                      style={{boxShadow: 'none'}}
                                      secondary={true}
                                      key={"ButtonAdd" + i}
                                      onTouchTap={this.addRow.bind(this, i)}>
                    <ContentAdd/>
                </FloatingActionButton>
            </div>);
        }

        return <div className="team-selector">
            {content}
        </div>
    }

    textChange(text, i, j) {
        let teams = this.state.teams;
        teams[i][j] = text;
        this.setState({
            teams: teams
        })
    }

    addRow(i) {
        let teams = this.state.teams;
        let newTeam = teams[i];
        newTeam.push("");
        teams[i] = newTeam;
        this.setState({
            teams: teams
        })
    }
}

export default Question;
