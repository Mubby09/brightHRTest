import React, { Component } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DataDetails from "./DataDetails";
import Home from "./Home";

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route
                            path="/view-details/:id"
                            element={<DataDetails />}
                        />
                    </Routes>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;