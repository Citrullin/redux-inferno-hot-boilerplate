import * as ActionTypes from '../constants/ActionTypes';
import ArticleAPI from 'ArticleAPI';

function receivedArticles(articles){
    return {
        type:       ActionTypes.RECEIVED_ARTICLES,
        articles:   articles
    }
}

export function getAllArticles(){
    return (dispatch, getState) => {
        ArticleAPI.getArticles(articles => {
            dispatch(receivedArticles(articles));
        })
    }
}