import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';

const Login = () => {
    const {providerLogin, logOut} = useContext(AuthContext);
    const provider = new GoogleAuthProvider()

    const googlePopupLogin = (provider) =>{
        providerLogin(provider)
        .then(result => {
            const user = result.user;
            console.log(user);
        })
        .catch(error => {
            console.log(error);
        })
    }

    const userLogOut = () =>{
        logOut()
        .then()
        .catch()
    }
    return (
        <div>
            this is login page
            <button className='block' onClick={()=>googlePopupLogin(provider)}>login</button>
            <button className='block' onClick={()=>userLogOut()}>logout</button>
        </div>
    );
};

export default Login;