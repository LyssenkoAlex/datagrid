import {
    CHANGE_ROWS,
    COMPLEX_SORT, DELETE_ROW,
    FILTER, FILTER_ITEM,
    MOVE_PAGE, SELECT_ROW,
    SET_PAGE, SHOW_HIDE_COLUMN
} from "../actions/actions";
import rowData from '../../data/data_source';
import PropTypes from 'prop-types';
import {headers} from "../../utils/consts";

const NUMBER_OR_ROWS = 50;

const initialState = {
    tableData: rowData,
    originalData: rowData,
    rowsPerPage: NUMBER_OR_ROWS,
    selectedPage: 0,
    pageRange: [...Array(Math.ceil(rowData.length / 10)).keys()],
    pageRangeDisplay: 0,
    tableHeaders: headers,
    rowBlockNumber: 1
};


function directorsRootReducer(state = initialState, action) {
    let sortColumn;
    let show;
    switch (action.type) {

        case SET_PAGE:
            return Object.assign({}, state, {selectedPage: action.number});

        case MOVE_PAGE:
            return Object.assign({}, state, {pageRangeDisplay: state.pageRangeDisplay + action.number});

        case FILTER:
            return Object.assign({}, state, {tableData: [...state.originalData.filter((x) => x.SurveyLength.toLowerCase().indexOf(action.value.toLowerCase()) !== -1).slice(0, NUMBER_OR_ROWS)]});

        case FILTER_ITEM:
            if (action.value.TITLE === 'Number') {
                return Object.assign({}, state, {tableData: [...state.originalData.filter((x) => x[action.value.TITLE] < action.value.VALUE).slice(0, NUMBER_OR_ROWS)]});
            } else {
                return Object.assign({}, state, {tableData: [...state.originalData.filter((x) => x[action.value.TITLE] === action.value.VALUE).slice(0, NUMBER_OR_ROWS)]});
            }

        case COMPLEX_SORT:

            if (action.value.MODE === 'SINGLE') {
                state.tableHeaders.forEach((x) => x.TO_SORT = false)
            }
            state.tableHeaders.filter((x) => x.TITLE === action.value.column.TITLE)[0].SORT = action.value.column.SORT;
            state.tableHeaders.filter((x) => x.TITLE === action.value.column.TITLE)[0].TO_SORT = true;
            sortColumn = state.tableHeaders.filter((x) => x.TO_SORT === true);
            return Object.assign({}, state, {tableData: [...state.originalData.sort(fieldSorter(sortColumn)).slice(0, NUMBER_OR_ROWS)]}, {tableHeaders: [...state.tableHeaders]});

        case SELECT_ROW:
            state.tableData.filter((x) => x.ROW_ID === action.value.row.ROW_ID)[0].SELECTED = !action.value.row.SELECTED;
            return Object.assign({}, state, {tableData: [...state.tableData]});

        case DELETE_ROW:
            return Object.assign({}, state, {tableData: [...state.tableData.filter((x) => !x.SELECTED)]});

        case SHOW_HIDE_COLUMN:
            show = state.tableHeaders.filter((x) => x.TITLE === action.value)[0].SHOW_COL;
            state.tableHeaders.filter((x) => x.TITLE === action.value)[0].SHOW_COL = !show;
            return Object.assign({}, state, {tableHeaders: [...state.tableHeaders]});

        case CHANGE_ROWS:

                return Object.assign({}, state, {
                        tableData: [...state.originalData.slice((state.rowBlockNumber * NUMBER_OR_ROWS) -  NUMBER_OR_ROWS
                            , (state.rowBlockNumber * NUMBER_OR_ROWS) + NUMBER_OR_ROWS * 2 + 50)]
                    }
                    , {rowBlockNumber: state.rowBlockNumber + action.value});
        default:
            state.tableData.forEach((x, y) => {
                x.ROW_ID = y;
                x.SELECTED = false;
                return x;
            });
            return Object.assign({}, state, {tableData: [...state.originalData.slice(0, NUMBER_OR_ROWS)]});
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
