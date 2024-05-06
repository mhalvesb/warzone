import './App.css';

import { BrowserRouter } from 'react-router-dom';

import { Rotas } from "./routes/Rota";

import { Header } from './pages/home/Header';

import { SettingButton } from "./pages/main/functions/SButtons";



function App() {


  return (
    <div>
      <Header/>
      <Rotas/>
    </div>
    
  );
}

export default App;
