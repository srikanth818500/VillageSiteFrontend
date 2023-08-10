import React, { useState } from "react";
import axios from "axios";
import "./MatchStart.css";
export const MatchStart = () => {
  const [overs, setOvers] = useState(10);
  const [toss, setToss] = useState("");
  const [choose, setChoose] = useState("");
  const [team1, setTeam1] = useState("");
  const [team2, setTeam2] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [Batsman1, setBatsman1] = useState("");
  const [Batsman2, setBatsman2] = useState("");
  const [Bowler, setBowler] = useState("");
  const [startmatch1, setstartmatch1] = useState(false);

  const submitMatch = () => {
    console.log(overs + "" + toss + "" + choose + "" + team1 + "" + team2);
    setSubmitted(true);
    // axios
    //   .post("http://localhost:8080/api/v1/matchStart", {
    //     overs,
    //     toss,
    //     choose,
    //     team1,
    //     team2,
    //   })
    //   .then((response) => {
    //     console.log(response.data);
    //     setSubmitted(true);
    //   });
  };
  const startMatch = () => {
    console.log(Batsman1 + "" + Batsman2 + "" + Bowler );
    setstartmatch1(true);
  };
  return (
    <>
      <br />
      <br />
      <div className="row">
        <div className="col-md-2">
          <h3>Overs</h3>
          <input
            type="text"
            placeholder="Enter overs"
            value={overs}
            onChange={(e) => setOvers(e.target.value)}
            disabled={submitted}
          />
        </div>
        <div className="col-md-2">
          <h3>Team 1</h3>
          <select
            value={team1}
            onChange={(e) => setTeam1(e.target.value)}
            disabled={submitted}
          >
            <option value="">Select a player</option>
            {/* Add options for team 1 players */}
          </select>
        </div>
        <div className="col-md-2">
          <h3>Team 2</h3>
          <select
            value={team2}
            onChange={(e) => setTeam2(e.target.value)}
            disabled={submitted}
          >
            <option value="">Select a player</option>
            {/* Add options for team 2 players */}
          </select>
        </div>
        <div className="col-md-2">
          <h3>Toss</h3>
          <select
            value={toss}
            onChange={(e) => setToss(e.target.value)}
            disabled={submitted}
          >
            <option value="">Select a player</option>
            {/* Add options for toss players */}
          </select>
        </div>
        <div className="col-md-2">
          <h3>Bating Team</h3>
          <select
            value={choose}
            onChange={(e) => setChoose(e.target.value)}
            disabled={submitted}
          >
            <option value="">Select a player</option>
            <option value="0">Batting</option>
            <option value="1">Bowling</option>
          </select>
        </div>
        <div className="col-md-2">
          <h3>Submit</h3>
          <button className="btn btn-success" type="button"  onClick={submitMatch}  disabled={submitted} >
            Submit
          </button>
        </div>
      </div>
      {submitted && (
        <div className="card-match">
    <div className="card-header-match">
        <div className="col-10">
            <h1>match</h1>
        </div>
    </div>
    <div className="row">
      
        <div className="col-md-12">
            
                <h1>Player Data</h1>
                <div className="row">
                   <div className="col-md-3">
                     <h3>Batsman1</h3>
                     <select
                      value={Batsman1}
                      onChange={(e) => setBatsman1(e.target.value)}
                      disabled={startmatch1}
                    >
                      <option value="">Select a player</option>
                      <option value="0">Batting</option>
                      <option value="1">Bowling</option>
                    </select>
                   </div>
                   <div className="col-md-3">
                     <h3>Batsman2</h3>
                     <select
                      value={Batsman2}
                      onChange={(e) => setBatsman2(e.target.value)}
                      disabled={startmatch1}
                    >
                      <option value="">Select a player</option>
                      <option value="0">Batting</option>
                      <option value="1">Bowling</option>
                    </select>
                  </div>
                  <div className="col-md-3">
                     <h3>Bowler</h3>
                     <select
                        value={Bowler}
                        onChange={(e) => setBowler(e.target.value)}
                        disabled={startmatch1}
                      >
                        <option value="">Select a player</option>
                        <option value="0">Batting</option>
                        <option value="1">Bowling</option>
                      </select>
                  </div>
                  <div className="col-md-2">
                    <h3>Submit</h3>
                    <button className="btn btn-success" type="button"  onClick={startMatch}  disabled={startmatch1} >
                      Submit
                    </button>
                  </div>
                </div>
            </div>
        
    </div>
    <div className="row">
      
        <div className="col-md-12">
                <div className="row">
                   <div className="col-md-3">
                     <h3>Overs</h3>
                   
                   </div>
                   <div className="col-md-3">
                     <h3>Batsman2</h3>
                     <select
                      value={Batsman2}
                      onChange={(e) => setBatsman2(e.target.value)}
                      disabled={startmatch1}
                    >
                      <option value="">Select a player</option>
                      <option value="0">Batting</option>
                      <option value="1">Bowling</option>
                    </select>
                  </div>
                  <div className="col-md-3">
                     <h3>Bowler</h3>
                     <select
                        value={Bowler}
                        onChange={(e) => setBowler(e.target.value)}
                        disabled={startmatch1}
                      >
                        <option value="">Select a player</option>
                        <option value="0">Batting</option>
                        <option value="1">Bowling</option>
                      </select>
                  </div>
                  <div className="col-md-2">
                    <h3>Submit</h3>
                    <button className="btn btn-success" type="button"  onClick={startMatch}  disabled={startmatch1} >
                      Submit
                    </button>
                  </div>
                </div>
            </div>
        
    </div>
</div>

      )}
    </>
  );
};