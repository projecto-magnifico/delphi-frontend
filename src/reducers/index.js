import { combineReducers } from 'redux'
import main from './main';
import admin from './admin';

const reducer = combineReducers({
    main, admin
})

export default reducer;