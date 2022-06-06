//import './css/Routes.css';
import {BrowserRouter , Switch , Route} from 'react-router-dom'
import Login from '../pages/Login/Login';
import Menu from '../pages/Menu';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path = "/" component={Login} />
        <Route exact path = "/menu" component={Menu} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;