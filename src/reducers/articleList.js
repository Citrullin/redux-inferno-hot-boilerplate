/*
 action = {type: 'DELETE_ARTICLE_FILTER_RULE', name: 'sport'}
 action = {type: 'ADD_ARTICLE_FILTER_RULE', name: 'sport'}
 */
import * as ActionTypes from '../constants/ActionTypes';

export const updateArticleFilter = (state = [
    {
        name: '',
        url: '',
        headline: '',
        description: '',
        imageUrl: '',
        tags: [],
        show: false
    }
], action) => {

    switch (action.type) {
        case ActionTypes.ADD_ARTICLE_FILTER_RULE:
            return state.articles.map(article => {
                var hasTag =
                    article.tags.map(tag => {
                        if (tag == action.name) {
                            return true;
                        }
                    }) || false;

                if (hasTag) {
                    article.show = false;
                }
            });
        case ActionTypes.RECEIVED_ARTICLES:
            return action.articles;
        default:
            return state;
    }
};

export const getArticleList = (state) => {
  return state.articles.filter(article => {
     if(article.visible){
         return true;
     }
  });
};