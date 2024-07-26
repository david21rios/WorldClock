// import {useState, useEffect} from 'react';
import {useContext }from 'react';
import { AuthContext }from './AuthContext';
// import {auth} from './firebase';

const UserProfile = () => {
    const {user} = useContext(AuthContext);

    // useEffect(() => {
    //     const user = auth.currentUser;
    //     if (user) {
    //         setUser(user);
    //     }
    // }, [auth.currentUser]);

    // const [user, setUser] = useState(null);
    
    return (
        <div>
            <h1>Perfil de Usuario</h1>
            <p>Nombre de Usuario: {user ? user.displayName : 'No hay usuario logueado'}</p>
            {user &&(
                <p>Correo Electronico: {user.email}</p>
            )}
        </div>
    );
};

export default UserProfile;