import React from "react";
export function List({ children}) {
    return (
    <div className="cardItem">
        <ul className="list-group">{children}
            
        </ul>
    </div>
    )
}

export function ProfileItem({children}) {
    return (
        <div>
            <li className="list-group-item" style={{ textAlign: 'center' }}>{children} 
            </li>
        </div>
    )
};