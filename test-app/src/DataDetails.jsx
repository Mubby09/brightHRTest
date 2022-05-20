import './App.css';
import React from "react";
import { useLocation, Link } from "react-router-dom";

const DataDetails = (_) => {
    const { state } = useLocation();
    console.log(state);


    return (
        <div className="App" >
            <div>
                <div>
                    <strong>Id:</strong> {state}
                </div>
                <div>
                    <strong>File Name:</strong> {state}
                </div>
                <div>
                    <strong>File Type:</strong> {state}
                </div>
                <div>
                    <strong>Date Added:</strong> {state}
                </div>
            </div>

            <Link to="/">
                <button>Back</button>
            </Link>
        </div>
    );
};

export default DataDetails;