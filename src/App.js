import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './AppRouter';
import NavBar from './components/navbar/NavBar.js';
import { useEffect, useState } from "react";

export default function App() {

  let [darkMode, setDarkMode] = useState(() => {
    const storedDarkMode = localStorage.getItem("darkMode");

    return storedDarkMode ? JSON.parse(storedDarkMode) : false;
  });

  useEffect(() => {
      if (darkMode) {
          document.documentElement.classList.add("dark");
      } else {
          document.documentElement.classList.remove("dark");
      }

      localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode])

  return (
    <>
      <Router >
        <NavBar darkMode={darkMode} setDarkMode={setDarkMode}/>
        <AppRoutes/>
      </Router>
    </>
  );
}