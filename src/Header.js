import React  from 'react';
import './Header.css';
import {Link } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { useStateValue } from './Stateprovider';
import { auth } from './firebase';



function Header() {
    const [{basket,user},dispatch] = useStateValue();

    const handleAuthentication = ()=>{
        if (user){
            auth.signOut();
        }
    }


    return (
        <nav className='header'>
            <Link to='/'>
            <img className='header__logo' 
            src='https://www.ampercent.com/wp/wp-content/uploads/Amazon-Logo.png' alt=''/>
            </Link>
            <div className='header__search'>
            <input className='header__searchInput'/>
            <SearchIcon className='header__searchIcon'/>
            <div className='header__nav' >

                <Link to={!user&&'/login'} className='header__link'>
                <div onClick={handleAuthentication} className='header__option'>
                <p >Hello {user?.email}</p>
                <p>{user?'Sign out':'Sign In'}</p>
                </div>
                
                </Link>

                <Link to='/' className='header__link'>
                <div className='header__option'>
                <Link to='/subtotal'className='kart'>
                <ShoppingCartIcon />
                <p >{basket.length}</p>
                
                </Link>
                </div>
                
                </Link>
            </div>
            </div>
        </nav>
    )
}

export default Header
