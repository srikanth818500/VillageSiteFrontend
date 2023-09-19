import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const ListTodayMatches = () => {
  const [matchesList, setMatchesList] = useState([]);
  const [selectedMatch, setSelectedMatch] = useState(null);
  const [hoveredMatch, setHoveredMatch] = useState(null);
  const phone = sessionStorage.getItem("loggeduser");
  const navigate=useNavigate();
  useEffect(() => {
    axios
      .post(`http://localhost:8080/api/v1/getTodaymatchesList/${phone}`)
      .then((response) => {
        setMatchesList(response.data);
      })
      .catch((error) => {
        console.error("Error fetching matches:", error);
      });
  }, [phone]);

  // Function to handle match item click
  const handleMatchItemClick = (match) => {
    const matchData = match.split(',');
    const firstValue = matchData[0];
    navigate('/matchstart', { state: { firstValue: firstValue } });
  };

  return (
    <div className="card-match">
      <div className="card-header-match">
        <div className="col-10">
          <h1>TODAY MATCHES LIST</h1>
        </div>
      </div>
      <div className="row">
        <div className="matches-list">
          {matchesList.length === 0 ? (
            <h3 style={{color:"red"}}>No matches available today.</h3>
          ) : (
            <ul>
              {matchesList.map((match, index) => (
                <li
                  key={index}
                  onClick={() => handleMatchItemClick(match)}
                  onMouseEnter={() => setHoveredMatch(match)}
                  onMouseLeave={() => setHoveredMatch(null)}
                  style={{
                    cursor: "pointer",
                    color: selectedMatch === match || hoveredMatch === match ? "blue" : "black",
                  }}
                >
                  <h1>
                    {match.split(',')[5]} vs {match.split(',')[6]}
                  </h1>
                </li>
              ))}
            </ul>
          )}
        </div>
        {selectedMatch && (
          <div className="selected-match">
            <p>Selected ID: {selectedMatch}</p>
          </div>
        )}
      </div>
    </div>
  );
};
