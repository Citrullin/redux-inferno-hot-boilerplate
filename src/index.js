import Inferno from 'inferno';
import InfernoDOM from 'inferno-dom';
import AppRouter from './router';

var store = {};

InfernoDOM.render(<AppRouter/>, document.getElementById('root'));
