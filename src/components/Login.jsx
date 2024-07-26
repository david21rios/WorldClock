import { useState } from 'react';
import {auth} from '../firebase';
import {signInWithEmailAndPassword} from 'firebase/auth';
import { useContext } from 'react';
import { AuthContext } from './AuthContext';
import { useNavigate } from 'react-router-dom'; // Importa useNavigate

const Login = () => {
    const { setUser } = useContext(AuthContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const navigate = useNavigate(); // Crea una instancia de navigate

    const handleLogin = async (e) => {
        e.preventDefault(); // Evita el comportamiento predeterminado del formulario
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;
            setUser(user); // Actualiza el estado del usuario en el contexto
            // Redirige al usuario a la página de inicio
            navigate('/'); // Cambia '/' a la ruta que desees redirigir
            console.log('Inicio de sesión exitoso');
        } catch (error) {
            console.error('Error al iniciar sesión:', error);
            setError(error.message);
        }
    };
    
    return(
        <div className='login'>
            <h1>Login</h1>
            <form>
                <label>Email:</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required/>
                <br/>
                <label>Password:</label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required/>
                <br/>
                <button onClick={handleLogin}>Login</button>
                {error && <p style={{color: 'red'}}>{error}</p>}
            </form>
        </div>
    );

};

export default Login;