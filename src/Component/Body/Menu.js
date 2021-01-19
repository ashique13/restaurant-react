import React, { Component } from 'react';
import Dishes from '../../data/dishes';
import DishDetial from './DishDetails';
import MenuItem from './MenuItem';

class Menu extends Component {
    state={
        dishe: Dishes,
        dishdetails: null,
    }
    ondishdetial =(dish)=>{
        this.setState({dishdetails: dish})
    }

    render(){
       const menu =this.state.dishe.map(item => {
            return (
                <MenuItem itemss={item} key={item.id} ondishdetial={()=>this.ondishdetial(item)}/>
            )
        })

        let selectDish = null;
        if(this.state.dishdetails!=null){
            selectDish = <DishDetial dish={this.state.dishdetails} />
        }
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            {menu}
                        </div>
                        <div className="col-md-6">
                            {selectDish}
                        </div>
                    </div>
                </div>
                
            </div>
        )
    }
}
export default Menu;