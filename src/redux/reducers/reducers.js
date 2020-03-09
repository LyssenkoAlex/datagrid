import {
    SORT,
} from "../actions/actions";
import rowData from '../../data/data_source';
import PropTypes from 'prop-types';



const initialState = {
    tableData:rowData,
    rowsPerPage:50,
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

directorsRootReducer.propTypes = {
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
