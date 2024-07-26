import { useState } from 'react';
import {auth} from '../firebase';
import {signInWithEmailAndPassword} from 'firebase/auth';
// import { db } from '../firebase';
// import { collection, getDocs, query, where} from 'firebase/firestore';

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);

    const handleLogin = async () =>{

        try{
            await signInWithEmailAndPassword(auth, email, password);
        } catch (error) {
            setError(error.message);
        }

        // e.preventDefault();
        // const usersRef = collection(db, 'users');
        // const q = query(usersRef, where('email', '==', email));
        // const querySnapshot = await getDocs(q);
        // querySnapshot.forEach((doc) => {
        //     if (doc.data().password === password) {
        //         alert('Login successful');
        //     } else {
        //         alert('Invalid credentials');
        //     }
        // });   
    };
    
    return(
        <div>
            <h1>Login</h1>
            <form>
                <label>Email:</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required/>
                <br/>
                <lable>Password:</lable>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required/>
                <br/>
                <button onClick={handleLogin}>Login</button>
                {error && <p style={{color: 'red'}}>{error}</p>}
            </form>
        </div>
    );

};

export default Login;