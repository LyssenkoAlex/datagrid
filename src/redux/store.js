import { createStore  } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import directorsRootReducer from './reducers/reducers'




const store = createStore(
    directorsRootReducer,
    composeWithDevTools()
);

export default store;

