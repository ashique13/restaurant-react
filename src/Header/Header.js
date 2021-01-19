import React from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';

const Header =()=>{
    return (
        <div>
            <Navbar drak color='dark'>
                <div className='container'>
                    <NavbarBrand href='/'>Restaurant</NavbarBrand>
                </div>
            </Navbar>
        </div>
    )
}
export default Header;