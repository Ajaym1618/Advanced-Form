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
        <Route path="https://Ajaym1618.github.io/Advanced-Form/" element={<Login />} />
        <Route path="https://Ajaym1618.github.io/Advanced-Form/Form" element={<FullForm />} />
        <Route path="https://Ajaym1618.github.io/Advanced-Form/View" element={<ViewDetails />} />
        <Route path="https://Ajaym1618.github.io/Advanced-Form/chart" element={<PieChart />} />
      </Routes>
    </Router>
  );
}

export default App;