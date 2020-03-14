import PropTypes from "prop-types";

export const headers = [
    {TITLE: 'Age', TYPE: 'Number', SORT: 'ASC', DISPLAY: 'Age', JSON: 'Age', TO_SORT: false, SHOW_COL:true}
    , {TITLE: 'Country', TYPE: 'String', SORT: 'ASC', DISPLAY: 'Country', JSON: 'Country', TO_SORT: false, SHOW_COL:true}
    , {TITLE: 'Employment', TYPE: 'String', SORT: 'ASC', DISPLAY: 'Emp', JSON: 'Employment', TO_SORT: false, SHOW_COL:true}
    , {TITLE: 'Gender', TYPE: 'String', SORT: 'ASC', DISPLAY: 'Sex', JSON: 'Gender', TO_SORT: false, SHOW_COL:true}
    , {TITLE: 'Hobbyist', TYPE: 'String', SORT: 'ASC', DISPLAY: 'Hobby', JSON: 'Hobbyist', TO_SORT: false, SHOW_COL:true}
    , {
        TITLE: 'LanguageWorkedWith',
        TYPE: 'String',
        SORT: 'ASC',
        DISPLAY: 'Skill',
        JSON: 'LanguageWorkedWith',
        TO_SORT: false, SHOW_COL:true
    }
    , {TITLE: 'MainBranch', TYPE: 'String', SORT: 'ASC', DISPLAY: 'Branch', JSON: 'MainBranch', TO_SORT: false, SHOW_COL:true}
    , {TITLE: 'OpSys', TYPE: 'String', SORT: 'ASC', DISPLAY: 'OS', JSON: 'OpSys', TO_SORT: false, SHOW_COL:true}
    , {TITLE: 'Respondent', TYPE: 'String', SORT: 'ASC', DISPLAY: 'ID', JSON: 'Respondent', TO_SORT: false, SHOW_COL:true}
    , {TITLE: 'Student', TYPE: 'String', SORT: 'ASC', DISPLAY: 'Student', JSON: 'Student', TO_SORT: false, SHOW_COL:true}
    , {TITLE: 'SurveyLength', TYPE: 'String', SORT: 'ASC', DISPLAY: 'Survey', JSON: 'SurveyLength', TO_SORT: false, SHOW_COL:true}
    , {
        TITLE: 'WebFrameWorkedWith',
        TYPE: 'String',
        SORT: 'ASC',
        DISPLAY: 'WebFW',
        JSON: 'WebFrameWorkedWith',
        TO_SORT: false, SHOW_COL:true
    }
    , {TITLE: 'YearsCode', TYPE: 'String', SORT: 'ASC', DISPLAY: 'Code', JSON: 'YearsCode', TO_SORT: false, SHOW_COL:true}
];

export const DATA_TYPES = {
    BOOLEAN_TYPE: 'BOOLEAN_TYPE',
    NUMBER_TYPE: 'NUMBER_TYPE',
    STRING_TYPE: 'STRING_TYPE',
    OS: 'OS'
};


headers.propTypes = {
    headers: PropTypes.shape({
            TITLE: PropTypes.string.isRequired,
            TYPE: PropTypes.string.isRequired,
            SORT: PropTypes.string.isRequired,
            DISPLAY: PropTypes.string.isRequired,
            JSON: PropTypes.string.isRequired,
            TO_SORT: PropTypes.bool.isRequired,
            SHOW_COL: PropTypes.bool.isRequired
        }
    )
};

DATA_TYPES.propTypes = {
    BOOLEAN_TYPE: PropTypes.string.isRequired,
    NUMBER_TYPE: PropTypes.string.isRequired,
    STRING_TYPE: PropTypes.string.isRequired,
    OS: PropTypes.oneOf(['Windows', 'Linux-based', 'MacOS', 'BSD', 'NA'])
};







