import Inferno from 'inferno';
import Component from 'inferno-component';

export class Image extends Component{

    render(){
        var imageURL = '';
        if(!!this.props.src && this.props.src !== ''){
            var requireURL = this.props.src;
            imageURL = require('img/ILoveMath.jpg');
        }

        return(<img src={ imageURL }/>)

    }
}

