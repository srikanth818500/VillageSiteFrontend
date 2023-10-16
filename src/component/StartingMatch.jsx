import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card, CardGroup } from "react-bootstrap";
import CardHeader from "react-bootstrap/esm/CardHeader";
import { useNavigate } from "react-router-dom";
export const StartingMatch = () => {

    const [overs, setOvers] = useState(10);
    const [toss, setToss] = useState("");
    const [choose, setChoose] = useState("");
    const [team1, setTeam1] = useState("");
    const [team2, setTeam2] = useState("");
    const [submitted, setSubmitted] = useState(false);
    const [teamlist, setTeamsList] = useState([]);
    const [Batsman2, setBatsman2] = useState("");
    const [matchdate, setmatchdate] = useState("");
    const [startmatch1, setstartmatch1] = useState(false);
    const navigate = useNavigate();
    const phone = sessionStorage.getItem('loggeduser');
    useEffect(() => {
        axios.post(`http://localhost:8080/api/v1/getTeamsList/${phone}`)
            .then(response2 => {
                setTeamsList(response2.data);
                console.log("Teams List:", response2.data);

            })
            .catch(error2 => {
                console.log("Error fetching teams:", error2);
            });
    }, [])
    const startmatch=()=>{
        const data={
            phoneNumber:phone,
            overs: overs,
            team1: team1,
            team2: team2,
            tossWinTeam: toss,
            battingTeam:choose,
            matchdate:matchdate
        };
        if(team1==team2){
            alert("both teams must not be same");
            return false;
        }
        axios.post('http://localhost:8080/api/v1/startmatch', data)
        .then(response => {
         console.log(response);
         navigate('/matchesList');
        })
          .catch(error => {
            console.error(error);
            
          });
    }
    return (
        <>
            <div className="card">
                <div className="card-header">
                    <h1>welcome</h1>
                </div>
                <div className="card-body">
                    <div className="row">
                        <div className="col-md-4">
                            <h3>Overs</h3>
                            <input
                                type="text"
                                placeholder="Enter overs"
                                value={overs}
                                onChange={(e) => setOvers(e.target.value)}
                                disabled={submitted}
                            />
                        </div>
                        <div className="col-md-4">
                            <h3>Team 1</h3>
                            <select
                                value={team1}
                                onChange={(e) => setTeam1(e.target.value)}
                            >
                                <option value="">Select a player</option>
                                {teamlist.map((playerName, index) => (
                                    <option key={index} value={playerName}>
                                        {playerName}
                                    </option>
                                ))}
                            </select>
                        </div>

                        
                        <div className="col-md-4">
                            <h3>Team 2</h3>
                            <select
                                value={team2}
                                onChange={(e) => setTeam2(e.target.value)}   
                            >
                                <option value="">Select a player</option>
                                {teamlist.map((playerName, index) => (
                                    <option key={index} value={playerName}>
                                        {playerName}
                                    </option>
                                ))}
                            </select>
                        </div>
                        </div>
                        <div className="row">
                        <div className="col-md-4">
                            <h3>Toss</h3>
                            <select
                                value={toss}
                                onChange={(e) => setToss(e.target.value)}
                                disabled={submitted}
                            >
                                <option value="">Select a player</option>
                                <option value={`${team1}`}>{team1}</option>
                                <option value={`${team2}`}>{team2}</option>
                            </select>
                        </div>
                        
                        <div className="col-md-4">
                            <h3>Bating Team</h3>
                            <select
                                value={choose}
                                onChange={(e) => setChoose(e.target.value)}
                                disabled={submitted}
                            >
                                <option value="">Select a player</option>
                                <option value={`${team1}`}>{team1}</option>
                                <option value={`${team2}`}>{team2}</option>
                            </select>
                        </div>
                        <div className="col-md-4">
                            <h3>Bating Team</h3>
                            <input
                                type="date"
                                placeholder="Phone Number"
                                name="matchdate"
                                className="form-control"
                                value={matchdate}
                                onChange={(e) => setmatchdate(e.target.value)}
                                />
                        </div>
                
                        </div>
                        <div className="row">
                        <div className="col-md-6">
                            <button className="btn btn-success" type="button" onClick={startmatch} >
                                Submit
                            </button>
                        </div>
                    </div>
                </div>
            </div>


        </>

    );
}