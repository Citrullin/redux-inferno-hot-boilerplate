import Inferno from 'inferno';
import Component from 'inferno-component';

export default class NavigationElement extends Component{
    render(){
        return (
            <li class="NavigationBar_Element">{this.props.name}</li>
        );
    }
}