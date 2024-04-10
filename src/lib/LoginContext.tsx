import React, {createContext, FC, useState} from 'react';

const LoginContext = createContext({
    user: {},
    setUser: (newUser:any) => {}
})

interface MyComponentProps {
    children?: React.ReactNode;
}


const LoginProvider: FC<MyComponentProps> = ({children}) => {
    const[user, setUser] = useState<any>({})
    return (
        <LoginContext.Provider value={{user, setUser}}>
            {children}
        </LoginContext.Provider>
    );
};

export {LoginProvider, LoginContext};