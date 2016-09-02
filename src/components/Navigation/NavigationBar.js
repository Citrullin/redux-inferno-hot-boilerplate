import Inferno from 'inferno';
import Component from 'inferno-component';

export default class NavigationBar extends Component{

    render(){
        return (
            <ul class="navigationBar">
                {this.props.children}
            </ul>
        );
    }
}