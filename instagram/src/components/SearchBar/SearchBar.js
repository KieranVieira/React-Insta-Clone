import React from 'react';
import './SearchBar.css'

const SearchBar = props => {
    return(
        <div className="search-bar-main">
            <div className="search-bar-container">
                <div className="search-bar-left">
                    <i class="fab fa-instagram"></i> Instagram 
                </div>
                <div className="search-bar-middle">
                    <form>
                        <input 
                            type="text" 
                            placeholder={'Search'}
                            onChange={props.handleChange}
                        />
                    </form>
                </div>
                <div className="search-bar-right">
                    <i class="far fa-compass"></i>
                    <i class="far fa-heart"></i>
                    <i class="far fa-user"></i>
                </div>
            </div>
        </div>
    )
}

export default SearchBar;