import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './AppRouter';
import NavBar from './components/NavBar.js';

export default function App() {
  return (
    <>
      <NavBar/>
      <Router >
        <AppRoutes/>
      </Router>
    </>
  );
}