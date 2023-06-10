import './App.css'
import { Login } from './assets/components/Login';
import { Dashboard } from './assets/components/Dashboard';
import { Uploader } from './assets/components/Uploader';

function App() {

  const userName = localStorage.getItem("name");

  return (
    <div>
        {
          !userName ? (<Login />)  : (
            <>
              <Uploader />
              <Dashboard />
            </>   
          )
        }
    </div>
);
}

export default App;
