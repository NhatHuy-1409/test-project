import logo from './logo.svg';
import './App.css';
import { Route, Router, Switch } from 'react-router-dom'
import SignIn from './pages/SignIn/SignIn';
import { createBrowserHistory } from 'history'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faTwitter, faFontAwesome } from '@fortawesome/free-brands-svg-icons'
import SignUp from './pages/SignUp/SignUp';
import CreateProject from './pages/CreateProject/CreateProject';
import GetAllProject from './pages/GetAllProject/GetAllProject';
import { HomeTemplate } from './templates/HomeTemplate';


library.add(fas, faTwitter, faFontAwesome, faFacebook)
export const history = createBrowserHistory()

function App() {
  return (
    <Router history={history}>
      <div className="App">
        <Switch>
          <HomeTemplate path='/signin' component={SignIn} />
          <HomeTemplate path='/signup' component={SignUp} />
          <HomeTemplate path='/createproject' component={CreateProject} />
          <HomeTemplate path='/getallprojects' component={GetAllProject} />
          <HomeTemplate path='/' component={SignIn} />

        </Switch>
      </div>
    </Router>

  );
}

export default App;
