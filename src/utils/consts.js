import PropTypes from "prop-types";

export  const headers = [{TITLE: 'Age', TYPE: 'Number', SORT: 'ASC', DISPLAY:'Age'}
    , {TITLE: 'Country', TYPE: 'String', SORT: 'ASC', DISPLAY:'Country'}
    , {TITLE: 'Employment', TYPE: 'String', SORT: 'ASC', DISPLAY:'Emp'}
    , {TITLE: 'Gender', TYPE: 'String', SORT: 'ASC', DISPLAY:'Sex'}
    , {TITLE: 'Hobbyist', TYPE: 'String', SORT: 'ASC', DISPLAY:'Hobby'}
    , {TITLE: 'LanguageWorkedWith', TYPE: 'String', SORT: 'ASC', DISPLAY:'Skill'}
    , {TITLE: 'MainBranch', TYPE: 'String', SORT: 'ASC', DISPLAY:'Branch'}
    , {TITLE: 'OpSys', TYPE: 'String', SORT: 'ASC', DISPLAY:'OS'}
    , {TITLE: 'Respondent', TYPE: 'String', SORT: 'ASC', DISPLAY:'ID'}
    , {TITLE: 'Student', TYPE: 'String', SORT: 'ASC', DISPLAY:'Student'}
    , {TITLE: 'SurveyLength', TYPE: 'String', SORT: 'ASC', DISPLAY:'Survey'}
    , {TITLE: 'WebFrameWorkedWith', TYPE: 'String', SORT: 'ASC', DISPLAY:'WebFW'}
    , {TITLE: 'YearsCode', TYPE: 'String', SORT: 'ASC', DISPLAY:'Code'}
] ;

headers.propTypes = {
    headers: PropTypes.shape({
            TITLE: PropTypes.string.isRequired,
            TYPE: PropTypes.string.isRequired,
            SORT: PropTypes.string.isRequired,
            DISPLAY:PropTypes.string.isRequired
        }
    )
};
