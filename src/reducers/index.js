import { updateArticleFilter } from './articleList';
import { combineReducers } from 'redux';
//import multireducers from 'multi';
//import {reducer as reduxAsyncConnect } from 'redux-a';

export default combineReducers({
    articles: updateArticleFilter
});
