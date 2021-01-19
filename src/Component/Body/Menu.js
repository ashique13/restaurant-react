import React, { Component } from 'react';
import Dishes from '../../data/dishes';
import MenuItem from './MenuItem';

class Menu extends Component {
    state={
        dishe: Dishes
    }
    render(){
       const menu =this.state.dishe.map(item => {
            return (
                <MenuItem itemss={item} key={item.id}/>
            )
        })
        return (
            <div>
                {menu}
            </div>
        )
    }
}
export default Menu;