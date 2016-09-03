import Inferno from 'inferno';
import Component from 'inferno-component';

import ArticleThumbnailList from '../../components/Article/ArticleThumbnailList';

export default class BlogFrontpage extends Component{
    
    render(){
        return (
            <div class="blogFrontpage">
                Blog Frontpage
                <h2>Article</h2>
                <ArticleThumbnailList/>
            </div>
        );
    }
}