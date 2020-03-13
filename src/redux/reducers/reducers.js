import {
    COMPLEX_SORT,
    FILTER, FILTER_ITEM,
    MOVE_PAGE, SELECT_ROW,
    SET_PAGE,
    SORT, SORT_COLUMN,
} from "../actions/actions";
import rowData from '../../data/data_source';
import PropTypes from 'prop-types';
import {headers} from "../../utils/consts";


const initialState = {
    tableData: rowData,
    originalData: rowData,
    rowsPerPage: 10,
    selectedPage: 0,
    pageRange: [...Array(Math.ceil(rowData.length / 10)).keys()],
    pageRangeDisplay: 0,
    tableHeaders: headers
};


function directorsRootReducer(state = initialState, action) {
    let sortColumn;
    switch (action.type) {
        case SORT:
            return state;
        case SET_PAGE:
            return Object.assign({}, state, {selectedPage: action.number});
        case MOVE_PAGE:
            return Object.assign({}, state, {pageRangeDisplay: state.pageRangeDisplay + action.number});
        case FILTER:
            return Object.assign({}, state, {tableData: [...state.originalData.filter((x) => x.SurveyLength.toLowerCase().indexOf(action.value.toLowerCase()) !== -1)]});
        case FILTER_ITEM:
            if (action.value.TITLE === 'Number') {
                return Object.assign({}, state, {tableData: [...state.originalData.filter((x) => x[action.value.TITLE] < action.value.VALUE)]});
            } else {
                return Object.assign({}, state, {tableData: [...state.originalData.filter((x) => x[action.value.TITLE] === action.value.VALUE)]});
            }
        case COMPLEX_SORT:

            if (action.value.MODE === 'SINGLE') {
                state.tableHeaders.forEach((x) => x.TO_SORT = false)
            }
            state.tableHeaders.filter((x) => x.TITLE === action.value.column.TITLE)[0].SORT = action.value.column.SORT;
            state.tableHeaders.filter((x) => x.TITLE === action.value.column.TITLE)[0].TO_SORT = true;
            sortColumn = state.tableHeaders.filter((x) => x.TO_SORT === true);
            return Object.assign({}, state, {tableData: [...state.originalData.sort(fieldSorter(sortColumn))]}, {tableHeaders: [...state.tableHeaders]});
        case SELECT_ROW:
            state.tableData.filter((x) => x.ROW_ID === action.value.ROW_ID)[0].SELECTED = true;
              return Object.assign({}, state, {tableData: [...state.tableData]} );
        default:
            state.tableData.forEach((x, y) => {
                 x.ROW_ID = y;
                 x.SELECTED = false;
                 return x;
            });
            return state;
    }
}

const fieldSorter = (fields) => (a, b) => fields.map(o => {
    let dir = 1;

    if (o.SORT === 'ASC') {
        dir = -1;
    }
    o = o.TITLE;
    return a[o] > b[o] ? dir : a[o] < b[o] ? -(dir) : 0;
}).reduce((p, n) => p ? p : n, 0);

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
