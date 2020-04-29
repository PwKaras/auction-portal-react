import React from 'react';

type Props = {
    children: React.ReactNode
}

export const InfoCard:React.FC<Props> = ({children}) => {
    return(
        <div className="container mt-5">
                <div className="card col-5 m-auto p-3 shadow text-center font-weight-bold">
                    <h4>{children}</h4>
                </div>
                </div>
    )
}