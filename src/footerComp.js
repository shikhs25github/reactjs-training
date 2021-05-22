import React from 'react';
import './footer.css';

class FooterComp extends React.Component {
    render(){
        return(
            <footer>@CopyRight www.emsmis.in, Conatct Us: {this.props.contact}</footer>
        )
    }
}

export default FooterComp;