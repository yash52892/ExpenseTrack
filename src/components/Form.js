
import React from 'react';
import { useRef } from 'react';


const Forms=()=>{
    const email_id=useRef(null);
    const pass=useRef(null);
    const conpass=useRef(null);

    const handlesub=async (e)=>{
        e.preventDefult();
        const obj={
            email:email_id.current.value,
            password:pass.current.value,
            confrimpass:conpass.current.value
        }
        await fetch("https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBLAYe2M0Gf_twVPGDmlWvNQpbMyvtkLYs",{
            method: "POST",
            
        })
    }

    return(
    <div className="card" style={{width: "5rem"}}>
    <section className="card-body" style={{alignSelf:"center"}}>
     <form>
      <label>Email id</label>
      <input type='email' ref={email_id} required></input>
      <label>Password</label>
      <input type='password' ref={pass} required></input>
      <label>Confirm Password</label>
      <input type='password' ref={conpass} required></input>
      <button>Sign Up</button>
     </form>
     </section>
     </div>
    )
}

export default Forms;