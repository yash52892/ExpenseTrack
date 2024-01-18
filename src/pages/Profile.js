import { useContext, useRef } from "react";
import Token from "../Store/TokenContext";

const Profile=()=>{
    const Dname=useRef(null);
    const photo=useRef(null);

    const tokk=useContext(Token);

    const handleprofile=()=>{
        fetch("https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyBLAYe2M0Gf_twVPGDmlWvNQpbMyvtkLYs",{
            method:"POST",
            body: JSON.stringify({
                "idToken": tokk.token,
                "displayName": Dname.current.value,
                "photoUrl": photo.current.value,
                "returnSecureToken":true
            }),
            headers: {
                "Content-Type": "application/json;charset=utf-8",
              }
        })
    }

    return(
        <>
        <h3>Contact details</h3>
        <form onSubmit={handleprofile}>
            <label>Full Name</label>
            <input type="text"ref={Dname}/>
            <label>Profile Photo URL</label>
            <input type="text" ref={photo}/>
            <button type="submit">Submit</button>
        </form>
        </>
    )
}
export default Profile;