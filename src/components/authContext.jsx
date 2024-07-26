import { createContext, useState } from 'react';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    
    return (
        <AuthContext.Provider value={{ user, setUser }}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    // eslint-disable-next-line no-undef
    children: PropTypes.string.isRequired
}

export { AuthContext, AuthProvider };