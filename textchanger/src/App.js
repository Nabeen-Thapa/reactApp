import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Alert from './components/Alert';
import TextForm from './components/TextForm';

import React from "react";

function App() {
  const [mode, setMode] = useState("light");
  // color mode
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark")
      document.body.style.backgroundColor = "#55585b";
      showAlert("dark mode has beed enabled", "danger");
      document.title = "dark mode";
    } else {
      setMode("light")
      document.body.style.backgroundColor = "white";
      showAlert("light mode has beed enabled", "success");
      document.title = "light mode";
    }
  }
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  }
  return (
    <>
      <Navbar title="mysite" aboutUs="about mysite" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <TextForm header="Enter the text" showAlert={showAlert} mode={mode} />
    </>
  );
}

export default App;
