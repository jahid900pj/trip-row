import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import Button from 'react-bootstrap/esm/Button';
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

const SocialAccount = () => {
    const { googleProviderLogin } = useContext(AuthContext);
    const googleProvider = new GoogleAuthProvider();

    const handleGoogleSingIn = () => {

        googleProviderLogin(googleProvider)
            .then((result) => {
                const user = result.user;
                console.log(user)
            })
            .catch((error) => {
                console.error(error)
            })

    }
    return (
        <div>
            <div>
                {/* onClick={handleGoogleSingIn}  */}
                <Button onClick={handleGoogleSingIn} className='mb-2 w-100' variant="outline-primary"> <FaGoogle></FaGoogle> Login with google</Button>
            </div>
        </div>
    );
};

export default SocialAccount;