import React, { useEffect, useState } from "react";
import axios from "axios";
import "./MatchStart.css";
import { useLocation } from "react-router-dom";
export const MatchStart = () => {
  const [overs, setOvers] = useState(10);
  const [toss, setToss] = useState("");
  const [choose, setChoose] = useState("");
  const [team1, setTeam1] = useState("");
  const [team2, setTeam2] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [Batsman1, setBatsman1] = useState([]);
  const [Batsman2, setBatsman2] = useState([]);
  const [Bowler, setBowler] = useState([]);
  const [startmatch1, setstartmatch1] = useState(false);
  const[playingbatsamn,setplayingbatsman]=useState('');
  const[otherbatsamn,setotherbatsman]=useState('');
  const[playingbowler,setplayingbowler]=useState('');
  const[Batsman1score,setBatsman1score]=useState(0);
  const[Batsman2score,setBatsman2score]=useState(0);
  const[bowlerwickets,setbowlerwickets]=useState(0);
  const[totalscore,settotalscore]=useState(0);
  const[totalwickets,settotalwickets]=useState(0);
  const[overslive,setoverslive]=useState(1);
  const[balllive,setballlive]=useState(1);
  const[runsScored,setrunsscored]=useState('');
  const[scoreType,setscoreType]=useState('');
  const[outtype,setouttype]=useState('');
  const location=useLocation();
  const idvalue=location.state?.firstValue || null;
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
  useEffect(() => {
    axios.post(`http://localhost:8080/api/v1/getMatchdetailsToStart/${idvalue}`)
        .then(response2 => {
          const user = response2.data.matchData[0];
          setOvers(user.overs);
          setTeam1(user.team1);
          setTeam2(user.team2);
          setToss(user.toss_win_team);
          setChoose(user.batting_team)
          console.log(user.overs)
            console.log("Teams List:", response2.data.matchData);
            console.log("Teams List:", response2.data.playerData.bowlingTeam);
            console.log("Teams List:", response2.data.playerData.battingTeam);
            setBatsman1(response2.data.playerData.battingTeam);
            setBatsman2(response2.data.playerData.battingTeam);
            setBowler(response2.data.playerData.bowlingTeam);
        })
        .catch(error2 => {
            console.log("Error fetching teams:", error2);
        });
}, [])
  const startMatch = () => {
    axios.post(`http://localhost:8080/api/v1/getMatchdetailsToStart`)
    .then(Response=>{
      console.log(Response);
    })
    .catch(error2 => {
      console.log("Error fetching teams:", error2);
  });
  };
  const onchangebatsman1=((e)=>{
    setplayingbatsman(e.target.value);
    
  })
  const onchangebatsman2=((e)=>{
    if(playingbatsamn===(e.target.value)){
      alert("Both batsman must not be same")
      return false;
    }
    setotherbatsman(e.target.value);
     })
  const onchangebowler=((e)=>{
    setplayingbowler(e.target.value);
     })   
  const saveruns=()=>{
  const runsScoredValue = parseInt(runsScored, 10);
  const outtypeValue = parseInt(outtype, 10);
  const scoreTypevalue=parseInt(scoreType, 10);
    if((runsScoredValue===0||runsScoredValue===2||runsScoredValue===4||runsScoredValue===6||outtypeValue===7||outtypeValue===8||outtypeValue===9||outtypeValue===10)&&scoreTypevalue!=2){
      if(balllive===6){
        setballlive(1);
        setoverslive(overslive+1);
       }else{
        setballlive(balllive+1);
       }
    }else if((runsScoredValue===1||runsScoredValue===3||runsScoredValue===5)&&scoreTypevalue!=2){
      if(balllive===6){
        setballlive(1);
        setoverslive(overslive+1);
        setplayingbatsman(otherbatsamn);
        setotherbatsman(playingbatsamn);
       }else{
        setballlive(balllive+1);
        setplayingbatsman(otherbatsamn);
        setotherbatsman(playingbatsamn);
       }
    }else {
      if((runsScoredValue===1||runsScoredValue===3||runsScoredValue===5)&&scoreTypevalue==2){
        setplayingbatsman(otherbatsamn);
        setotherbatsman(playingbatsamn);
      }
    }
  }
  const saveruns1=()=>{
    if(runsScored==11){
      setoverslive(overslive);
      setballlive(balllive);
      setBatsman1score(Batsman2score);
      setBatsman2score(Batsman1score)
    }else{
      if(balllive===6){
        setballlive(1);
        setoverslive(overslive+1);
        setBatsman1score(Batsman2score);
      setBatsman2score(Batsman1score)
      }else{
        setballlive(balllive+1);
      }
    }
  }   
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
            disabled={overs}
          />
        </div>
        <div className="col-md-2">
          <h3>Team 1</h3>
          <input
            type="text"
            placeholder="Enter overs"
            value={team1}
            onChange={(e) => setTeam1(e.target.value)}
            disabled={team1}
          />
          
        </div>
        <div className="col-md-2">
          <h3>Team 2</h3>
          <input
            type="text"
            placeholder="Enter overs"
            value={team2}
            onChange={(e) => setTeam2(e.target.value)}
            disabled={team2}
          />        
        </div>
        <div className="col-md-2">
          <h3>Toss</h3>
          <input
            type="text"
            placeholder="Enter overs"
            value={toss}
            onChange={(e) => setToss(e.target.value)}
            disabled={toss}
          />
          
        </div>
        <div className="col-md-2">
          <h3>Bating Team</h3>
          <input
            type="text"
            placeholder="Enter overs"
            value={choose}
            onChange={(e) => setChoose(e.target.value)}
            disabled={choose}
          />
         
        </div>
        <div className="col-md-2">
          <h3>Submit</h3>
          <button className="btn btn-success" type="button"  onClick={submitMatch}  disabled={submitted} >
            Submit
          </button>
        </div>
      </div>
       
        <div className="card-match">
    <div className="card-header-match">
        <div className="col-10">
            <h1>match</h1>
        </div>
    </div>
    <div className="row">
      
        <div className="col-md-12">
            
                <label><h1>Player Data</h1></label>
                <div className="row">
                   <div className="col-md-3">
                   <label> <h3>Batsman1 :</h3></label>
                     
                     <select
                      value={playingbatsamn}
                      onChange={onchangebatsman1}
                    >
                      <option value="">Select a Opener</option>
                      {Batsman1.map((player,index)=>(
                        <option key={index} 
                        value={player}>
                        {player} 
                        </option>
                      ))}
                    </select>
                   </div>
                   <div className="col-md-3">
                   <label><h3>Batsman2 :</h3></label>
                     <select
                      value={otherbatsamn}
                      onChange={onchangebatsman2}
                      
                    >
                      <option value="">Select Non-Stricker</option>
                      {Batsman2.map((player,index)=>(
                        <option key={index} value={player}>{player}</option>
                      ))}
                      
                    </select>

                  </div>
                  <div className="col-md-3">
                  <label><h3>Bowler :</h3></label>
                     <select
                        value={playingbowler}
                        onChange={onchangebowler}
                      >
                        <option value="">Select a Bowler</option>
                        {Bowler.map((player,index)=>(
                          <option key={index} value={player}>{player}</option>
                        ))}
                      </select>
                  </div>
                  <div className="col-md-2">
                    <button className="btn btn-success" type="button"  onClick={startMatch}  disabled={startmatch1} >
                      Submit
                    </button>
                  </div>
                </div>
            </div>

            <div className="row" >
              <div className="col-md-2">
                <h4>OVERS:<label style={{color:"blue"}}>{overslive}</label></h4>
              </div>
              <div className="col-md-2">
                <h4>BALLS:<label style={{color:"blue"}}>{balllive}</label></h4>
              </div>
              <div className="col-md-3">
               <label><h4>SCORE TYPE</h4> </label>
                <select style={{color:"blue"}} value={scoreType} onChange={(e)=>setscoreType(e.target.value)}>
                    <option value="">Select ScoreType</option>
                    <option value="0">RUNS</option>
                    <option value="1">OUT</option>
                    <option value="2">NO BALL</option>
                </select>
              </div>
                          
              <div className="col-md-3">
                <label><h4>{scoreType === "0" || scoreType === "2" ? "RUNS SCORED:" : "OUT TYPE :"}</h4></label>
                {scoreType === "0" || scoreType === "2" ? (
                  <select style={{ color: "blue" }} value={runsScored} onChange={(e) => setrunsscored(e.target.value)}>
                    <option value="">Select ScoreType</option>
                    <option value="0">Dot Ball</option>
                    <option value="1">Single</option>
                    <option value="2">Two Runs</option>
                    <option value="3">Three Runs</option>
                    <option value="4">Four</option>
                    <option value="5">Five Runs</option>
                    <option value="6">Six Runs</option>
                  </select>
                ) : (
                  <select style={{ color: "blue" }} value={outtype} onChange={(e) => setouttype(e.target.value)}>
                    <option value="">Select OutType</option>
                    <option value="7">Bowled</option>
                    <option value="8">Catch</option>
                    <option value="9">Run out</option>
                    <option value="10">Stumped</option>
                  </select>
                )}
              </div>

              <div className="col-md-2">
                    <button className="btn btn-success" type="button"  onClick={saveruns}  disabled={startmatch1} >
                      Submit
                    </button>
              </div>
            </div>
        <div className="row" >
          <div className="row">
          <div className="col-md-6" >
            <h3>{playingbatsamn}<span style={{color:"red"}}>*</span>: <label style={{color:"blue"}}>{Batsman1score}</label> </h3>
          </div>
          <div className="col-md-6">
            <h3>{playingbowler}: <label style={{color:"blue"}}>{bowlerwickets}</label> </h3> 
          </div>
          </div>
          <div className="row">
          <div className="col-md-6">
            <h3>{otherbatsamn}: <label style={{color:"blue"}}>{Batsman2score}</label></h3>
          </div>
          <div className="col-md-6">
            <h3>Total Score(R/W) : <label style={{color:"blue"}}>{totalscore}/{totalwickets}</label></h3> 
          </div>
          </div>
        </div>
    
    
        
    </div>
</div>

      
    </>
  );
};