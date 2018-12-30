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
        <div>

            <div className="current-user">
                <img src="https://scontent-yyz1-1.cdninstagram.com/vp/fc1e539c4beed806c8b38f3e286d909a/5CC46D9E/t51.2885-19/s150x150/47029503_229817771242833_2023291151057944576_n.jpg?_nc_ht=scontent-yyz1-1.cdninstagram.com"/>
                <div>
                    <h1>vieiraillustration</h1>
                    <h2>Kieran Vieira</h2>
                </div>
            </div>

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

            <div className="footer-links">
                <ul>
                    <a href="#">About Us •</a>
                    <li><a href="#">Support •</a></li>
                    <li><a href="#">Press •</a></li>
                    <li><a href="#">API •</a></li>
                    <li><a href="#">Jobs •</a></li>
                    <li><a href="#">Privacy •</a></li>
                    <li><a href="#">Terms •</a></li>
                    <li><a href="#">Directory •</a></li>
                    <li><a href="#">Profiles •</a></li>
                    <li><a href="#">Hashtags •</a></li>
                    <li><a href="#">Language</a></li>
                </ul>
                <p>(c) 2018 KIERAN VIEIRA</p>
            </div>
            
        </div>
    )
}

export default FooterContainer;