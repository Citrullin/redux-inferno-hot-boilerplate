import _articles from './article.json';

const TIMEOUT = 200;

export default {
    getArticles(callBack, timeout){
        console.log(_articles);
        setTimeout(() => callBack(_articles), timeout || TIMEOUT);
    }
}