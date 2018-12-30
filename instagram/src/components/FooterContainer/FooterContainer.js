import React from 'react';
import './FooterContainer.css';

const users = [
    {
        img: 'https://tk-assets.lambdaschool.com/ecd33d34-c124-4b75-92d2-e5c52c171ed8_11201517_887808411287357_1307163552_a.jpg',
        name: 'philzcoffee',
        reccomendedFrom: 'Friend on Facebook',
    },
    {
        img: 'https://tk-assets.lambdaschool.com/ce601fdf-7cb0-4098-83d3-1a1584a72513_30841289_342445456281079_112845064497004544_n.jpg',
        name: 'fortnite',
        reccomendedFrom: 'Friend on Facebook',
    },
    {
        img: 'https://tk-assets.lambdaschool.com/c432f179-8bd7-4758-959d-d88a21f96bca_37105899_432228420518610_5035444036064772096_n.jpg',
        name: 'playhearthstone',
        reccomendedFrom: 'Friend on Facebook',
    }
]

const FooterContainer = props => {
    return (
        <div className="suggestion-container">
            <div className="suggestion-header">
                <h1>Suggestions For You</h1>
                <a href="#">See All</a>
            </div>
            {users.map(user => {
                return(
                    <div className="user-suggestion">
                        <img src={user.img}/>
                        <div className="reccomended-user-name">
                            <h2>{user.name}</h2>
                            <p>{user.reccomendedFrom}</p>
                        </div>
                        <a href="">Follow</a>
                    </div>
                )
            })}
        </div>
    )
}

export default FooterContainer;