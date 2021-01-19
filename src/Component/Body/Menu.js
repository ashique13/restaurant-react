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
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            {menu}
                        </div>
                        <div className="col-md-6">
                        
                        </div>
                    </div>
                </div>
                
            </div>
        )
    }
}
export default Menu;