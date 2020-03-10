import {
    FILTER, FILTER_AGE,
    MOVE_PAGE,
    SET_PAGE,
    SORT, SORT_COLUMN,
} from "../actions/actions";
import rowData from '../../data/data_source';
import PropTypes from 'prop-types';
import {headers} from "../../utils/consts";


const initialState = {
    tableData: rowData,
    originalData:rowData,
    rowsPerPage: 10,
    selectedPage: 0,
    pageRange: [...Array(Math.ceil(rowData.length / 10)).keys()],
    pageRangeDisplay: 0,
    tableHeaders: headers
};


function directorsRootReducer(state = initialState, action) {

    switch (action.type) {
        case SORT:
            return state;
        case SET_PAGE:
            return Object.assign({}, state, {selectedPage: action.number});
        case MOVE_PAGE:
            return Object.assign({}, state, {pageRangeDisplay: state.pageRangeDisplay + action.number});
        case SORT_COLUMN:
            if (action.column.TYPE === 'String') {
                state.tableData.sort((a, b) => {

                    if (a[action.column.TITLE] < b[action.column.TITLE]) {
                        return action.column.SORT === 'ASC' ? -1 : 1;
                    }
                    if (a[action.column.TITLE] > b[action.column.TITLE]) {
                        return action.column.SORT === 'ASC' ? 1 : -1;
                    }
                    return 0;
                });
            } else {
                if(action.column.SORT === 'DESC') {
                    state.tableData.sort((a, b) => Number(a[action.column.TITLE]) - Number(b[action.column.TITLE]));
                }
                else {
                    state.tableData.sort((a, b) => Number(b[action.column.TITLE]) - Number(a[action.column.TITLE]));
                }
            }


            if(state.tableHeaders.filter((x) => x.TITLE === action.column.TITLE)[0].SORT === 'ASC')
            {
                state.tableHeaders.filter((x) => x.TITLE === action.column.TITLE)[0].SORT = 'DESC'
            }
            else {
                state.tableHeaders.filter((x) => x.TITLE === action.column.TITLE)[0].SORT = 'ASC'
            }

            return Object.assign({}, state, {tableData: [...state.tableData]}, {tableHeaders: [...state.tableHeaders]});

        case FILTER:
            return Object.assign({}, state, {tableData: [...state.originalData.filter((x) => x.OpSys === action.value)]} );
        case FILTER_AGE:
            return Object.assign({}, state, {tableData: [...state.originalData.filter((x) => x.Age < action.value)]} );
        default:
            return state;
    }
}

export default directorsRootReducer;

directorsRootReducer.propTypes = {
    selectedPage: PropTypes.number.isRequired,
    pageRangeDisplay: PropTypes.arrayOf(PropTypes.number).isRequired,
    pageRange: PropTypes.arrayOf(PropTypes.number).isRequired,
    tableData: PropTypes.shape({
        Age: PropTypes.number.isRequired,
        Country: PropTypes.string.isRequired,
        Employment: PropTypes.string.isRequired,
        Gender: PropTypes.string.isRequired,
        Hobbyist: PropTypes.string.isRequired,
        LanguageWorkedWith: PropTypes.string.isRequired,
        MainBranch: PropTypes.string.isRequired,
        OpSys: PropTypes.string.isRequired,
        Respondent: PropTypes.number.isRequired,
        Student: PropTypes.string.isRequired,
        SurveyLength: PropTypes.string.isRequired,
        WebFrameWorkedWith: PropTypes.string.isRequired,
        YearsCode: PropTypes.number.isRequired
    }).isRequired
};
