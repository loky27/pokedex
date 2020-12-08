import React from "react";
import { Link as button } from "react-router-dom";
export default function LogIn(props) {
    const image={
        "margin-top": "5rem",
       
    }
  return (
    <div className="d-flex justify-content-center" style={image}>
        <div className="border border-primary col-3 justify-content-center d-flex flex-column">
            <div class="input-group flex-column">
            <form>
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Email address</label>
                <input type="email" class="form-control" id="exampleInputEmail1"></input>
                <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
              </div>
              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Password</label>
                <input type="password" class="form-control" id="exampleInputPassword1"></input>
              </div>
              <div class="mb-3 form-check">
                <input type="checkbox" class="form-check-input" id="exampleCheck1"></input>
                <label class="form-check-label" for="exampleCheck1">Check me out</label>
                </div>
            <div>
                <label for="btn-input" class="form-label">Email address</label>
                <input
                    id="btn-input"
                    type="text"
                    class="form-control input-sm"
                    placeholder="Type your message here..."
                    value={/*chat.newMessage*/ "new"}
                    /*onChange={(event) => store.dispatch(changeInput(event.target.value))}*/
                />
                <span class="input-group-btn">
                    
                </span>
            </div>
                {/*<button type="submit" class="btn btn-primary">Submit</button>*/}
                <button className="m-0 mt-2 btn btn-primary col-12 "
                    type="submit"
                    /*onClick={() => store.dispatch(sendMessage())}*/>
                        Sing In
                </button>
            </form>            
                <button className="m-0 mt-2 btn btn-primary "
                    onClick={props.signInGoogle}
                    /*onClick={() => store.dispatch(sendMessage())}*/>
                    Sing In With Google
                </button>
                <button className="m-0 mt-2 mb-2 btn btn-primary " 
                    onClick={props.signInFacebook}
                    /*onClick={() => store.dispatch(sendMessage())}*/>
                    Sing In With Facebook
                </button>
            </div>
        </div>
    </div>
  );
}
/*
return (
    <div className="row border border-primary m-5 col-5" >
        <img src={props.img} alt={props.name} style={image}
         className="shadow  mt-3 bg-white rounded col"/>
        <div className="col-12 m-2 row">
            <h3 className="col-3">#{props.number}</h3>
            <h2 className="col">{props.name}</h2> 
            <div className="col-2 btn btn-primary" onClick={() => props.info(props.number,false)}>info</div>
            
        </div>
    </div>
    */