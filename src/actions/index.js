import * as ActionTypes from '../constants/ActionTypes';
import articles from '../api/articles';

function receivedArticles(articles){
    return {
        type: ActionTypes.RECEIVED_ARTICLES,
        articles: articles
    }
}

export function getAllArticles(){
    return (dispatch, getState) => {
        articles.getArticles(articles => {
            dispatch(receivedArticles(articles));
        })
    }
}