
import React from 'react'
import { GoogleLogout } from 'react-google-login';

const Logout = (props) => {
    const logout = ()=>{
        console.log('logout successful')
        props.response()

  
    }
    const clientId= "259846178726-jjdsbnhcbcvj6dndh9fdhofodku9srkh.apps.googleusercontent.com";
    return (
        <div>
            <GoogleLogout
                clientId={clientId}
                buttonText="Logout"
                onLogoutSuccess={logout}
            ></GoogleLogout>
        </div>
    )
}

export default Logout