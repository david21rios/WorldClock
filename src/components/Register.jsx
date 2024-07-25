import { useState } from 'react';
import { db } from '../firebase';
import { collection, addDoc} from 'firebase/firestore';

const Register = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [email, setEmail] = useState('');
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [password, setPassword] = useState('');

    const handleRegister = async (e) =>{
        e.preventDefault();
        await addDoc(collection(db, 'users'),{
            email,
            password,
        });
        alert('User registered successfully!');
    };

    return(
        <form onSubmit={handleRegister}>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required/>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required/>
            <button type="submit">Register</button>
        </form>
    );

};

export default Register;