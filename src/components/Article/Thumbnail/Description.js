import Inferno from 'inferno';
import Component from 'inferno-component';

export default class Description extends Component{
    reunder(){
        return (
            <div>{this.props.children}</div>
        )
    }
}