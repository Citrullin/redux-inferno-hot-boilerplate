import Inferno from 'inferno';
import { Router, Route, browserHistory } from 'inferno-router';

import App from './App';
import BlogFrontpage from './containers/Blog/BlogFrontpage';

export default function AppRouter() {
    return(
        <Router history={browserHistory} component={ App }>
            <Route path="/blog" component={ BlogFrontpage }/>
        </Router>
    );
}