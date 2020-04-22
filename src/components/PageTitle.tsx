import React from 'react';

type Props = {
    children: React.ReactNode
}

export const PageTitle:React.FC<Props> = ({children}) => {
    return(
    <li className="list-group-item">
                <h2 className="card-title">{children}</h2>
            </li>
)};
