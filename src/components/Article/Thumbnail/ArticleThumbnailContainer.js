import Inferno from 'inferno';
//import Component from 'inferno-component';

import {Image} from './Image';
import Description from './Description';

export const ArticleThumbnailContainer = ({ data }) => (
    <div class="articleThumbnail">
        <Image src={ data.imageUrl }/>
        <Description>
            { data.description }
        </Description>
    </div>
);