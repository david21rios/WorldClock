import { createContext, useState } from 'react';
import PropTypes from 'prop-types';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    
    return (
        <AuthContext.Provider value={{ user, setUser }}>
            {children}
        </AuthContext.Provider>
    );
};

//Validacion de tupos para las props
AuthProvider.propTypes = {
    children: PropTypes.node.isRequired,
    // children debe ser un nodo valido de react y es requerido
}


export { AuthContext, AuthProvider };