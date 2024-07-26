import { useState } from 'react';
import {auth} from '../firebase';
import {createUserWithEmailAndPassword} from 'firebase/auth';

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);

    const handleRegister = async () =>{

        try{
            await createUserWithEmailAndPassword(auth, email, password);
        } catch (error) {
            setError(error.message);
        }

        // e.preventDefault();
        // await addDoc(collection(db, 'users'),{
        //     email,
        //     password,
        // });
        alert('User registered successfully!');
    };

    return(
        <div>
        <h1>Register</h1>
            <form>
                <label>Email:</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required/>
                <br/>
                <label>Password:</label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required/>
                <br/>
                <button onClick={handleRegister}>Register</button>
                {error && <p style={{color: 'red'}}>{error}</p>}
            </form>
        </div>
    );

};

export default Register;