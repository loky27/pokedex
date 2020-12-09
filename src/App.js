import store from "./redux/store"
import firebase, {auth} from "./components/firebase/config";
import React, {useState} from "react";
import {
  Switch,
  Route,
  useHistory
} from "react-router-dom";
import Nav from "./components/nav/nav";
import Pokedex from "./components/pokedex/pokedex";
import LogIn from "./components/logIn/logIn"
import PrivateRoute from "./components/PrivateRouter/PrivateRouter"
import Panel from "./components/panel/panel"
import SingUp from "./components/singUp/singUp"
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
      history.push("/panel");
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
    let email={
      email:"hef6666@gmail.com"
      ,pasword:"1234ewef"
    };
    const login = (event) => {
        event.preventDefault();
        auth
          .signInWithEmailAndPassword(`${email.email}`, `${email.pasword}`)
          .then((response) => {
              console.log(response);
              history.push("/panel");
          }
          )
          .catch((error) => console.log(error));
        }
  return (

      <div>
          <Nav/>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
        <PrivateRoute path="/panel" logged={isLogged} user={user}>
            <Panel />
          </PrivateRoute>
          <Route path="/pokedex">
          <Pokedex/>;
          </Route>
          <Route path="/singUp">
          <SingUp  login={login} date={email}/>
          </Route>
          <Route path="/login">
          <LogIn signInGoogle={signInGoogle} signInFacebook={signInFacebook} login={login} date={email}/>
          </Route>
          <Route path="/">
          <LogIn signInGoogle={signInGoogle} signInFacebook={signInFacebook} login={login} date={email}/>
          </Route>
        </Switch>
      </div>
   
  );
}