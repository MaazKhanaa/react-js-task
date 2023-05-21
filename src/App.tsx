// ======================== COMPONENT ========================
import Main from './components/main/main';
import AuthComponent from './components/auth/auth';


// ======================== STORE ========================
import { RootState, useAppSelector } from './store';


// ======================== STYLES ========================
import './App.css';
import MainContainer from './components/main/mainContainer';


const App: React.FC<any> = () => {

  const { auth } = useAppSelector((state: RootState) => state);

  return (
    <div>
      {auth?.isLoggedIn ? (
        // <Main />
        <MainContainer />
      ) : (
        <AuthComponent />
      )}
    </div>
  );
}

export default App;
