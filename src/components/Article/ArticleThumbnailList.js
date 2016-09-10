import Inferno from 'inferno';
import Component from 'inferno-component';
import { connect }  from 'inferno-redux';

import {getAllArticles} from '../../actions/index';
import {getArticleList} from 'articleListReducers';
import {ArticleThumbnailContainer} from './Thumbnail/ArticleThumbnailContainer';

class ArticleThumbnailList extends Component{
    _renderArticle(article){
        return (
            <ArticleThumbnailContainer data={ article } />
        )
    };

    render(){
        const store = this.context.store;

        var elements = [];
        store.getState().articles.forEach(article =>{
            elements.push(this._renderArticle(article));
        });

        return (<div class="articleThumbnailList">{elements}</div>);
    }
}

const mapStateToProps = (state) => {
    return {
        articles: getArticleList(state)
    }
};

export default connect(
    mapStateToProps,
    {getAllArticles}
)(ArticleThumbnailList)