import './index.css';
import store from './redux/state';
import RerenderTree from './render';

RerenderTree(store.getState());

