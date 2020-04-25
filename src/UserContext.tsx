import React from 'react';

interface User {
    username?: string,
    password: string,
    email: string
}


type C = {
    user: User | null;
    setUser(user: User | null): void

}

export const UserContext = React.createContext<C>(
    {
        user:
        {
            email: "",
            password: ""
        }, 
        setUser() {}
    }
);

export class UserProvider extends React.Component {
    state = {
        user: null
    }

    setUser = (user: User) => {
        this.setState({user})
    }

    render() {
        return <UserContext.Provider value={{
            user:  this.state.user,
            setUser: this.setUser}}>
            {this.props.children}
        </UserContext.Provider>

    }

}