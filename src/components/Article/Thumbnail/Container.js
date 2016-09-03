import Inferno from 'inferno';
import Component from 'inferno-component';

import Image from './Image';
import Description from './Description';

export default class Container extends Component {

    render(){
        return  (
            <div class="articleThumbnail">
                <Image src={ this.props.data.imageUrl }/>
                <Description>
                    { this.props.data.description }
                </Description>
            </div>
        )
    }
}