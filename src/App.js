import Inferno from 'inferno';
import Component from 'inferno-component';

import NavigationBar from './components/Navigation/NavigationBar';
import NavigationBarElement from './components/Navigation/NavigationElement';

export default class App extends Component {

    render(){
        return(
            <div>
                <NavigationBar>
                    <NavigationBarElement name="element nummer 1"/>
                    <NavigationBarElement name="element nummer 2"/>
                </NavigationBar>
                {/* Following is the content of the current page inserted */}
                {this.props.children}
            </div>
        );
    }
}