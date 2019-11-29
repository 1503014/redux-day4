
import {createStore, combineReducers} from 'redux';
import filter from './reducers/filter';
import todos from './reducers/todos';
import color from './reducers/color';

let store = createStore(combineReducers({todos, filter, color}));

store.subscribe(()=> console.log(store.getState()));

store.dispatch({type : "ADD_TODO", text : "Onion"});
store.dispatch({type : "ADD_TODO", text : "Milk"});
store.dispatch({type : "ADD_TODO", text : "Cheese"});
store.dispatch({type : "SET_FILTER", visibility : "SHOW_COMPLETED"});
store.dispatch({type: "TOGGLE_TODO", text : "Milk"});
store.dispatch({type: "SET_FILTER", visibility : "SHOW_COMPLTED"});
store.dispatch({type: "ADD_BLACK"});


