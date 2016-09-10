import Inferno from 'inferno';
import { Router, Route, browserHistory } from 'inferno-router';
import { Provider } from 'inferno-redux';

import App from 'App';
import BlogFrontpage from 'BlogFrontpage';

import {store} from 'store';

import {getAllArticles} from 'actions';

store.dispatch(getAllArticles());

export default function AppRouter() {

    return(
        <Provider store={ store }>
            <Router history={browserHistory} component={ App }>
                <Route path="/blog" component={ BlogFrontpage }/>
            </Router>
        </Provider>
    );
}