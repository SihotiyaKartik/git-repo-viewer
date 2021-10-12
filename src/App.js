import { BrowserRouter,Route,Switch} from 'react-router-dom';
import './App.css';
import Application from './Application';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Application} />
        </Switch>
    </BrowserRouter>
  );
}

export default App;
