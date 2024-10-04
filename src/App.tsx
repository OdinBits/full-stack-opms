import { useRoutes } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes';

function App() {
  const routing = useRoutes(AppRoutes()); 
  return <main>{routing}</main>;
}

export default App;
