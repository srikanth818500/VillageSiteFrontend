import React, { useState } from 'react';
import { Nav, NavDropdown } from 'react-bootstrap';
import './CreateMatch.css';
import 'bootstrap/dist/css/bootstrap.min.css';
export function CreateMatch() {
    const [teamName, setTeamName] = useState('');
    const [players, setPlayers] = useState([]);
    const [teamName2, setTeamName2] = useState('');  
    const [players2, setPlayers2] = useState([]);
    const [activeTab, setActiveTab] = useState('/team1');
    const handleAddPlayer = () => {
        if (players.length < 11) {
            setPlayers([...players, '']);
        }
    };
    const handleAddPlayer2 = () => {
        if (players2.length < 11) {
            setPlayers2([...players2, '']);
        }
    };
    const handlePlayerNameChange = (index, playerName) => {
        const updatedPlayers = [...players];
        updatedPlayers[index] = playerName;
        setPlayers(updatedPlayers);
    };
    const handlePlayerNameChange2 = (index, playerName) => {
        const updatedPlayers = [...players2];
        updatedPlayers[index] = playerName;
        setPlayers2(updatedPlayers);
    };
     const handleTabChange = (tab) => {
        setActiveTab(tab);
    };
    return (
        <div className="card-match">
            <h1 style={{ textAlign: 'left' }}>Create Match</h1>
            <div className="card-header-match">
                <Nav variant="tabs"  activeKey={activeTab} onSelect={handleTabChange} >
                    <Nav.Item>
                        <Nav.Link eventKey="/team1">Team 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="/team2">Team 2</Nav.Link>
                    </Nav.Item>
                </Nav>
               
            </div>
            <div className="row">
            <div className="col-6">
            <div className="tab-content">
               <div className={activeTab === '/team1' ? 'tab-pane fade show active' : 'tab-pane fade'} id="/team1">
                        
                        <div className="row">
                            <div className="col-6">
                                <h3>Team1 Name:</h3>
                                <input
                                    type="text"
                                    value={teamName}
                                    onChange={(e) => setTeamName(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-6">
                                <h3>Players:</h3>
                                {players.map((playerName, index) => (
                                    <div key={index}>
                                        <input
                                            type="text"
                                            value={playerName}
                                            onChange={(e) =>
                                                handlePlayerNameChange(index, e.target.value)
                                            }
                                            placeholder={`Player ${index + 1}`}
                                        />
                                    </div>
                                ))}
                                <button type="button" onClick={handleAddPlayer}>
                                    Add Player
                                </button>
                            </div>
                        </div>
                    </div>
                    {/* Other tab content */}
                </div>  
                <div className={activeTab === '/team2' ? 'tab-pane fade show active' : 'tab-pane fade'} id="/team2">
                    <div className="row">
                        <div className="col-6">
                            <h3>Team2 Name:</h3>
                            <input
                                type="text"
                                value={teamName2}
                                onChange={(e) => setTeamName2(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-6">
                            <h3>Players:</h3>
                            {players2.map((playerName2, index) => (
                                <div key={index}>
                                    <input
                                        type="text"
                                        value={playerName2}
                                        onChange={(e) =>
                                            handlePlayerNameChange2(index, e.target.value)
                                        }
                                        placeholder={`Player ${index + 1}`}
                                    />
                                </div>
                            ))}
                            <button type="button" onClick={handleAddPlayer2}>
                                Add Player
                            </button>
                        </div>
                    </div>
                </div>
            </div>  
              <div className="col-6">
              <div className="team-details-container">
                        {/* Display the entered names on the right side */}
                        {activeTab === '/team1' && (
                            <div className="team-details">
                                {/* <h3 style={{color:"red"}}>Team1 : {teamName}</h3> */}
                                <h3 style={{color:"red"}}>Players:</h3>
                                <ul>
                                    {players.map((playerName, index) => (
                                       <li key={index}><h4>{playerName}</h4></li>
                                    ))}
                                </ul>
                            </div>
                        )}
                        {activeTab === '/team2' && (
                            <div className="team-details">
                                <h3>Team2 Name: {teamName2}</h3>
                                <h3>Players:</h3>
                                <ul>
                                    {players2.map((playerName, index) => (
                                        <li key={index}>{playerName}</li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
                </div>
             </div>
        </div> 
   
        
    );
}