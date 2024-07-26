import { useState } from 'react';
import {auth, db} from '../firebase';
import {createUserWithEmailAndPassword} from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);

    const handleRegister = async (e) =>{
        e.preventDefault(); // Evita el comportamiento predeterminado del formulario
        try {
            // Crear usuario en Firebase Authentication
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;

            // Guardar información adicional en Firestore
            await setDoc(doc(db, 'users', user.uid), {
                email: user.email,
                displayName: 'Usuario', // Cambia esto según cómo quieras manejar el nombre
                // Agrega otros campos que desees almacenar
            });

            // Aquí puedes redirigir al usuario o hacer algo después de registrarse
            console.log('Usuario registrado:', user);
        } catch (error) {
            setError(error.message);
        }
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