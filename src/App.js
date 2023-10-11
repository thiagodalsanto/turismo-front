import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './AppRouter';

export default function App() {
  return (
    <>
      <div className="container w-96 h-128 bg-gray-200 rounded-xl shadow border p-8 m-10 content-center">
        <p className="text-3xl text-gray-700 font-bold mb-5 text-center">
          Salve, familia!
        </p>
        <p className="text-gray-500 text-lg text-center">
          Tu tá na rota da:
        </p>
        <Router >
          <AppRoutes/>
        </Router>
      </div>

    </>
  );
}