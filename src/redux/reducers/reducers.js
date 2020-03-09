import {
    SORT,
} from "../actions/actions";
import rowData from '../../data/data_source';



const initialState = {
    tableData:rowData,
};



function directorsRootReducer(state = initialState, action) {

    switch (action.type) {
        case SORT:
           return state;
        default:
            return state;
    }
}

export default directorsRootReducer;
