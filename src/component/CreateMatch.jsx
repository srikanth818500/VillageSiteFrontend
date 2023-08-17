import React, { useState } from 'react';
import { Nav, NavDropdown } from 'react-bootstrap';
import './CreateMatch.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { useEffect } from 'react';
import axios from 'axios';


export function CreateMatch() {
    const [teamName, setTeamName] = useState('');
    const [players, setPlayers] = useState([]);
    const [teamName2, setTeamName2] = useState('');  
    const [players2, setPlayers2] = useState([]);
    const [selectedPlayers, setSelectedPlayers] = useState([]);
    const [activeTab, setActiveTab] = useState('/team1');
    const [selectedPlayer, setSelectedPlayer] = useState('');
    const [playerList, setPlayerList]=useState([]);
    const [selectPlayerPhonenumber,setselectPlayerPhonenumber]=useState([])
    const [playerDetails, setPlayerDetails] = useState(null);
    const [error,setError]=useState('');
    const [hoveredPlayer, setHoveredPlayer] = useState(null);
    const allPlayers = [
        'Player 1',
        'Player 2',
        'Player 3',
        'Player 4',
        'Player 5',
        'Player 6',
        'Player 7',
        'Player 8',
        'Player 9',
        'Player 10',
        'Player 12',
        'Player 13',
      
    ];
    const samplePlayerDetails = {
        name: 'John Doe',
        age: 25,
        position: 'Forward',
        nationality: 'USA',
        // Add more properties as needed
      };
    useEffect(() => {
        axios.get('http://localhost:8080/api/v1/getPlayerList')
        .then((response=>{
            console.log("ooooooooooooooooooooooooooooooooooo",response);
            setPlayerList(response.data)
        })
        )
        //setPlayers2(fetchedPlayers);
    }, []);
    const handleAddPlayer = () => {
        if (players.length < 11) {
            setPlayers([...players, '']);
        }
    };
    const handleAddPlayer2 = () => {
        if (players.length < 11) {
            setPlayers([...players, '']);
        }
    };
    const handlePlayerNameChange = (index, playerName) => {
        const updatedPlayers = [...players];
        updatedPlayers[index] = playerName;
        setPlayers(updatedPlayers);
    };
    const handlePlayerNameChange2 = (index, playerName) => {
        const updatedPlayers = [...players];
        updatedPlayers[index] = playerName;
        setPlayers(updatedPlayers);
    };
     const handleTabChange = (tab) => {
        setActiveTab(tab);
    };
    const handlePlayerChange = (event) => {
        setSelectedPlayer(event.target.value);
      };
    const handlePlayerSelection = () => {    
        if (players.includes(selectedPlayer)) {
            alert("Player already selected");
        }
        else if (selectedPlayer && players.length > 10) {
           alert("Team is full");
        }
       else if (selectedPlayer && players.length <= 10) {
            setPlayers([...players, selectedPlayer]);
            setSelectedPlayer(''); 
        }
        
    }; 
    
    const handlePlayerSelection2 = () => {
        alert(selectedPlayer);
        if (players2.includes(selectedPlayer)) {
            alert("Player already selected");
        }
        else if (selectedPlayer && players2.length > 10) {
           alert("Team is full");
        }
       else if (selectedPlayer && players.length <= 10) {
            setPlayers2([...players2, selectedPlayer]);
            setSelectedPlayer(''); 
        }
        
    };  
    const handlePlayerRemoval = () => {
        const updatedPlayers=players.filter(players=>players!==selectedPlayer);
        setPlayers(updatedPlayers);
    };
    
    const handlePlayerRemoval2 = () => {
        const updatedPlayers = players2.filter(player => player !== selectedPlayer);
        setPlayers2(updatedPlayers);
    };

    const SubmitTeams = () => {
      const selectPlayerPhonenumber1 =selectPlayerPhonenumber;
      const phoneNumber = sessionStorage.getItem('loggeduser');

      axios.post(`http://localhost:8080/api/v1/saveTeam`, { selectedPlayers: players,teamName,phoneNumber})
        .then((response) => {
          console.log(response);
        })
        .catch(error => {
          console.error(error);
        });
    };
    const handlePlayerClick = async (playerName) => {
        try {
        //  const response = await fetch(`/api/getPlayerDetails?player=${playerName}`);
          //const data = await response.json();
          
          setPlayerDetails(samplePlayerDetails);
          openPlayerModal();
        } catch (error) {
          console.error('Error fetching player details:', error);
        }
      };
      const openPlayerModal = () => {
        const modal = document.getElementById('playerModal');
        modal.style.display = 'block';
      };
    
      const closePlayerModal = () => {
        const modal = document.getElementById('playerModal');
        modal.style.display = 'none';
      };
      const checkTeamNameExistOrNot=()=>{
        const team=teamName;
        axios.post(`http://localhost:8080/api/v1/checkTeamName/${team}`)
        .then((response)=>{
         console.log(response)
         setTeamName(teamName)
         setError("")
        })
        .catch(error => {
         console.error(error);
         setError("TeamName allready exists");
       });
      }
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
            {error && <div style={{ color: 'red' }}><h3>{error}</h3></div>}
               <div className={activeTab === '/team1' ? 'tab-pane fade show active' : 'tab-pane fade'} id="/team1">
                        
                        <div className="row">
                            <div className="col-6">
                                <h3>Team1 Name:</h3>
                                <input
                                    type="text"
                                    value={teamName}
                                    onChange={(e) => setTeamName(e.target.value)}
                                    onBlur={checkTeamNameExistOrNot}
                                />
                            </div>
                        </div>
                        <div className="row">

                            <div className="col-6">
                                <h3>Players:</h3>
                                <select value={selectedPlayer} onChange={handlePlayerChange}>
                                    <option value="">Select a player</option>
                                    {playerList.map((player, index) => (
                                        <option key={index} 
                                                value={`${player.firstname}`}>
                                            {player.firstname} 
                                        </option>
                                    ))}
                                </select>
  
                                  <br/><br/>                    
                                <button className="btn btn-success" type="button" onClick={handlePlayerSelection}>
                                    Add Player
                                </button>
                                <button  className="btn btn-danger" type="button" onClick={handlePlayerRemoval}>
                                    Remove Player
                                </button>
                                {players.length > 10 && (
              <button className="btn btn-success" type="button" onClick={SubmitTeams}>
                   Submit
                 </button>
)}
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
                            
                            <select value={selectedPlayer} onChange={handlePlayerChange}>
                                    <option value="">Select a player</option>
                                    {allPlayers.map((playerName, index) => (
                                        <option key={index} value={playerName}>
                                            {playerName}
                                        </option>
                                    ))}
                                </select>   <br/><br/>     
                                               
                                <button className="btn btn-success" type="button" onClick={handlePlayerSelection2}>
                                    Add Player
                                </button>
                                <button className="btn btn-danger" type="button" onClick={handlePlayerRemoval2}>
                                    Remove Player
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

                                            <li key={index}                                
                                         onMouseEnter={() => setHoveredPlayer(playerName)}
                                        onMouseLeave={() => setHoveredPlayer(null)}
                                        >
                                           <h4 onClick={() => handlePlayerClick(playerName)} style={{
                                            cursor: 'pointer',
                                            color: hoveredPlayer === playerName ? 'blue' : 'black', 
                                          }}>{playerName}</h4>
                                         </li>
                                         
                                    ))}
                                </ul>
                            </div>
                        )}
                        {activeTab === '/team2' && (
                            <div className="team-details">
                                <h3> {teamName2}</h3>
                                <h3 style={{color:"red"}}>Players:</h3>
                                <ul>
                                    {players2.map((playerName, index) => (
                                        <li key={index}><h4>{playerName}</h4></li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
                </div>
                {playerDetails && (
        <div id="playerModal" className="modal">
          <div className="modal-content">
          <button type="button" className="close" onClick={closePlayerModal}>
          &times;
        </button>
            <div className="card-player">
            <div className="card-header-player">
            <div className="col-10">
                <h1>Player Data</h1>
                </div>
            </div>
        <div className="row">
            <div className="col-2">
                <h3>Name :</h3>
            </div>
            <div className="col-4">
                <h3></h3>
            </div>
            <div className="col-2">
                <h3>Player Type :</h3>
            </div>
            <div className="col-4">
                <h3></h3>
            </div>
        </div>
        <div className="row">
            <div className="col-2">
                <h3>Total Runs :</h3>
            </div>
            <div className="col-4">
                <h3></h3>
            </div>
            <div className="col-2">
                <h3>Heighest Runs :</h3>
            </div>
            <div className="col-4">
                <h3></h3>
            </div>
        </div>
        <div className="row">
            <div className="col-2">
                <h3>Bowling Average :</h3>
            </div>
            <div className="col-4">
                <h3></h3>
            </div>
            <div className="col-2">
                <h3>Bat Average  :</h3>
            </div>
            <div className="col-4">
                <h3></h3>
            </div>
        </div>
        <div className="row">
            <div className="col-2">
                <h3>No Of 50s:</h3>
            </div>
            <div className="col-4">
                <h3></h3>
            </div>
            <div className="col-2">
                <h3>No Of 3 wik  :</h3>
            </div>
            <div className="col-4">
                <h3></h3>
            </div>
        </div>
        <div className="row">
            <div className="col-2">
                <h3>No Of 4s:</h3>
            </div>
            <div className="col-4">
                <h3></h3>
            </div>
            <div className="col-2">
                <h3>No Of 6s  :</h3>
            </div>
            <div className="col-4">
                <h3></h3>
            </div>
        </div>
        <div className="row">
            <div className="col-2">
                <h3>Best-W/R:</h3>
            </div>
            <div className="col-4">
                <h3></h3>
            </div>
            <div className="col-2">
                <h3>  :</h3>
            </div>
            <div className="col-4">
                <h3></h3>
            </div>
        </div>
        
        </div>
        
          </div>
        </div>
      )}
             </div>

        </div> 
    );
}
