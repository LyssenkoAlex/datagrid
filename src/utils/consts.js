import PropTypes from "prop-types";
import {useEffect, useLayoutEffect, useState} from "react";

export  const headers = [
      {TITLE: 'Age', TYPE: 'Number', SORT: 'ASC', DISPLAY:'Age', JSON:'Age'}
    , {TITLE: 'Country', TYPE: 'String', SORT: 'ASC', DISPLAY:'Country', JSON:'Country'}
    , {TITLE: 'Employment', TYPE: 'String', SORT: 'ASC', DISPLAY:'Emp', JSON:'Employment'}
    , {TITLE: 'Gender', TYPE: 'String', SORT: 'ASC', DISPLAY:'Sex', JSON:'Gender'}
    , {TITLE: 'Hobbyist', TYPE: 'String', SORT: 'ASC', DISPLAY:'Hobby', JSON:'Hobbyist'}
    , {TITLE: 'LanguageWorkedWith', TYPE: 'String', SORT: 'ASC', DISPLAY:'Skill', JSON:'LanguageWorkedWith'}
    , {TITLE: 'MainBranch', TYPE: 'String', SORT: 'ASC', DISPLAY:'Branch', JSON:'MainBranch'}
    , {TITLE: 'OpSys', TYPE: 'String', SORT: 'ASC', DISPLAY:'OS', JSON:'OpSys'}
    , {TITLE: 'Respondent', TYPE: 'String', SORT: 'ASC', DISPLAY:'ID', JSON:'Respondent'}
    , {TITLE: 'Student', TYPE: 'String', SORT: 'ASC', DISPLAY:'Student', JSON:'Student'}
    , {TITLE: 'SurveyLength', TYPE: 'String', SORT: 'ASC', DISPLAY:'Survey', JSON:'SurveyLength'}
    , {TITLE: 'WebFrameWorkedWith', TYPE: 'String', SORT: 'ASC', DISPLAY:'WebFW', JSON:'WebFrameWorkedWith'}
    , {TITLE: 'YearsCode', TYPE: 'String', SORT: 'ASC', DISPLAY:'Code', JSON:'YearsCode'}
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







