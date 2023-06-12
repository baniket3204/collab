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
              <h1>Welcome {userName.toUpperCase()} </h1>
              <Uploader />
              <Dashboard />
            </>   
          )
        }
    </div>
);
}

export default App;
