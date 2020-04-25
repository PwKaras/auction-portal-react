import React from 'react';

type Props = {
    children: React.ReactNode
}

export const Button:React.FC<Props> = ({children}) => {
    return(
        <button className="btn btn-primary ml-3 shadow" type="submit">{children}</button>
)};


