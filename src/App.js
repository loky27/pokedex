import store from "./redux/store"
import firebase, {auth} from "./components/firebase/config";
import React, {useState} from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory
} from "react-router-dom";
import Nav from "./components/nav/nav";
import Pokedex from "./components/pokedex/pokedex";
import LogIn from "./components/logIn/logIn"
import PrivateRoute from "./components/PrivateRouter/PrivateRouter"
//import Panel from "./components/panel/panel"

//import React from "react";
const pokemones = store.getState();
console.log(pokemones)

export default function App() {
  let history = useHistory();
  //Provedor de autenticacion con google
  let provider = new firebase.auth.GoogleAuthProvider();
  let facebookProvider = new firebase.auth.FacebookAuthProvider();
  let [user, setUser] = useState({});
  let [isLogged, setIsLogged] = useState(false);

  const signInGoogle = () => {
    auth.signInWithPopup(provider).then(result => {
      let user = result.user;
      setUser(user);
      setIsLogged(true);
      history.push('/panel');
    }).catch(error => {
      setIsLogged(false);
      console.log(error);
    })
  }

  const signInFacebook = () => {
    auth.signInWithPopup(facebookProvider).then(result => {
      let user = result.user;
      setUser(user);
      setIsLogged(true);
      history.push('/panel');
      console.log(user);
    }).catch(error => {
      console.log(error);
    })
  }
  return (
    <Router>
      <div>
          <Nav/>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path ="/logIn" exact>
            <LogIn signInGoogle={signInGoogle} signInFacebook={signInFacebook} />
          </Route>
          <PrivateRoute path="/panel" exact logged={isLogged} user={user}>
           {/* <Panel />*/}
          </PrivateRoute>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return <Pokedex/>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}

