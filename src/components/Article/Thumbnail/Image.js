import Inferno from 'inferno';
import Component from 'inferno-component';

export default class Image extends Component{

    render(){
        return(<img src={this.props.src}/>)
    }
};