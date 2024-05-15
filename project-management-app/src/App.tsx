import './App.css';
import AllRoutes from './routes/Routes';
import { BrowserRouter as Router } from 'react-router-dom';

const App = () => 
{
  return (
  <Router>
    <AllRoutes/>
  </Router>
  );
}

export default App;
