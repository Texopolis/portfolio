import './App.css';
import { Routes, Route} from 'react-router-dom'
import Landing from './pages/landing'
import Web3 from './pages/web3passgen'
import Web2 from './pages/web2passgen'
import Pacman from './pages/pacman'
import TroutCounter from './pages/troutCounter'
import ApiDashboard from './pages/apiDashboard'
import Web3Video from './pages/web3passgenvideo'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={ <Landing/> } />
        <Route path='/web3' element={ <Web3/> } />
        <Route path='/web2' element={ <Web2/> } />
        <Route path='/pacman' element={ <Pacman/> } />
        <Route path='/troutCounter' element={ <TroutCounter/> } />
        <Route path='/apiDashboard' element={ <ApiDashboard/> } />
        <Route path='/web3Video' element={ <Web3Video/> } />
      </Routes>
    </>
  );
}

export default App;


