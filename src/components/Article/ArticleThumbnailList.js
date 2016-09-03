import Inferno from 'inferno';
import Component from 'inferno-component';
import * as ArticleThumbnail from './Thumbnail/Container';

export default class ArticleThumbnailList extends Component{
    _renderArticle(article){
        return (
            <ArticleThumbnail image={ article.image }
                              description={ article.description } />
        )
    };

    render(){
        const store = this.context.store;
        const state = store.getState();

        return(
            state.articleList.forEach(article =>{
                return this._renderArticle(article)
            })
        );
    }
}