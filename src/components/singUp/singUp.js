import React from "react";
export default function SingUp(props) {
    const image={
        "margin-top": "5rem",
       
    }
    

    
  return (
    <div className="d-flex justify-content-center" style={image}>
        <div className="border border-primary col-3 justify-content-center d-flex flex-column">
            <div class="input-group flex-column">
            <form>
            <div class="mb-3 form-check">
                    <label class="form-label" for="exampleCheck1">name</label>
                <input type="text"
                 class="form-control" id="exampleInputEmail1" />
                </div>
                <div class="mb-3 form-check">
                    <label class="form-label" for="exampleCheck1">last name</label>
                <input type="text"
                 class="form-control" id="exampleInputEmail1" />
                </div>
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Email address</label>
                <input type="email"
                 class="form-control" id="exampleInputEmail1" 
                 value={`${props.date.email}`}/> 
                <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
              </div>
              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Password</label>
                <input type="password" class="form-control" id="exampleInputPassword1" 
                value={`${props.date.pasword}`}/>
              </div>
              <div class="mb-3 form-check">
                <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                <label class="form-check-label" for="exampleCheck1">Check me out</label>
                </div>
            
                {/*<button type="submit" class="btn btn-primary">Submit</button>*/}
                <button className="m-0 mt-2 btn btn-primary col-12 "
                    type="submit"
                    onClick={props.login}
                    /*onClick={() => store.dispatch(sendMessage())}*/>
                        Sing Up
                </button>
            </form>            
            </div>
        </div>
    </div>
  );
  }