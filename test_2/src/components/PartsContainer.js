import React, {Component} from 'react';
import Part from './Part'

class PartsContainer extends Component{
    render(){
        return(
            <div>
                <li><Part/></li>
            </div>
        )
    }
}

export default PartsContainer

//this will list ALL the productsm this is the iteration, and there will be a link to the individual part