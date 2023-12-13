import React from "react";
import './App.css';
import FullForm from "./components/Full-Form/FullForm";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Login from "./components/Full-Form/Login"; 
import ViewDetails from "./components/Full-Form/viewdetails/ViewDetails";
import PieChart from "./components/Full-Form/pie-chart";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Form" element={<FullForm />} />
        <Route path="/View" element={<ViewDetails />} />
        <Route path="/chart" element={<PieChart />} />
      </Routes>
    </Router>
  );
}

export default App;