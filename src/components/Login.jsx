import { useState } from 'react';
import { db } from '../firebase';
import { collection, getDocs, query, where} from 'firebase/firestore';

const Login = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [email, setEmail] = useState('');
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [password, setPassword] = useState('');

    const handleLogin = async (e) =>{
        e.preventDefault();
        const usersRef = collection(db, 'users');
        const q = query(usersRef, where('email', '==', email));
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            if (doc.data().password === password) {
                alert('Login successful');
            } else {
                alert('Invalid credentials');
            }
        });   
    };

    return(
        <form onSubmit={handleLogin}>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required/>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required/>
            <button type="submit">Login</button>
        </form>
    );

};

export default Login;