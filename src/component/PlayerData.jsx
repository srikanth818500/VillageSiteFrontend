import React, { useEffect } from 'react';
import './PlayerData.css';
import axios from 'axios';
export const PlayerData = () => {
    useEffect(() => {
        axios.get('http://localhost:8080/api/v1/getPlayerData')
        .then((response) => {
            console.log(response.data);
        })
        .catch((error) => {
            console.log(error);
        })
    }, [])
    return (
        <>
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
        </>
    )
}