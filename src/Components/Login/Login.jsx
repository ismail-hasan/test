import { getAuth, signInWithPopup, signOut } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import app from "../../Firebase/Firebase.init";
import { useState } from "react";


const Login = () => {
    const [user, setUser] = useState(null)
    const auth = getAuth(app)
    const provider = new GoogleAuthProvider();




    const btnHandle = () => {
        console.log("worig")
        signInWithPopup(auth, provider)
            .then(result => {
                const signInUser = result.user
                setUser(signInUser)

                console.log(signInUser)
            })
            .catch(err => {
                console.log("big error", err)
            })
    }

    const btnHandleOut = () => {
        signOut(auth)
            .then(setUser(null))
            .catch(err => console.log("signOUt Error", err))
    }


    return (
        <div>
            <h3>login kor vai</h3>

            {user ?
                <button onClick={btnHandleOut}>Google Out</button>
                :
                <button onClick={btnHandle}>Google LogIn</button>
            }



            {user &&
                <div>
                    <p>user data:{user?.displayName}</p>
                    <p>user data:{user?.email}</p>
                    <img src={user?.photoURL}></img>
                </div>
            }

        </div >
    );
};

export default Login;