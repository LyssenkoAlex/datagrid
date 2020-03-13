import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux'
import '../style/style.scss'
import TableHeader from "./TableHeader";
import {green} from '@material-ui/core/colors';
import {DATA_TYPES} from "../utils/consts";


export default function CustomTable() {

    const tableData = useSelector(state => state.tableData);
    const selectedPage = useSelector(state => state.selectedPage);
    const rowsPerPage = useSelector(state => state.rowsPerPage);

    const rowHandler = (e) => {
        console.log('row: ', e)
    }

    let cells = tableData.slice(selectedPage, selectedPage + rowsPerPage).map((row, index) => {

        return (
            <tr key={`row_${index}`} onClick={(e) => rowHandler(e)}>
                <CellRender value={row.Age} index={index} type={DATA_TYPES.NUMBER_TYPE}/>
                <td key={`Country_${index}`}>{row.Country}</td>
                <CellRender value={row.Employment} index={index} type={DATA_TYPES.STRING_TYPE}/>
                <td key={`Gender_${index}`}>{row.Gender}</td>
                <CellRender value={row.Hobbyist} index={index} type={DATA_TYPES.BOOLEAN_TYPE}/>
                <td key={`LanguageWorkedWith_${index}`}>{row.LanguageWorkedWith}</td>
                <CellRender value={row.MainBranch} index={index} type={DATA_TYPES.STRING_TYPE}/>
                <CellRender value={row.OpSys} index={index} type={DATA_TYPES.OS}/>
                <td key={`Respondent_${index}`}>{row.Respondent}</td>
                <td key={`Student_${index}`}>{row.Student}</td>
                <td key={`SurveyLength_${index}`}>{row.SurveyLength}</td>
                <td key={`WebFrameWorkedWith_${index}`}>{row.WebFrameWorkedWith}</td>
                <td key={`YearsCode_${index}`}>{row.YearsCode}</td>
            </tr>
        )
    });

    return (
        <table>
            <TableHeader/>
            <tbody>
            {cells}
            </tbody>
        </table>
    )
}

function CellRender({value, index, type}) {
    let className;

    switch (type) {
        case DATA_TYPES.NUMBER_TYPE:
            className = 'numberBlock';
            break;
        case DATA_TYPES.STRING_TYPE:
            className = 'textBlock';
            break;
        case DATA_TYPES.BOOLEAN_TYPE:
            if (value === 'Yes') {
                className = 'booleanBlockYes';
                value = '';
            } else {
                className = 'booleanBlockNo';
                value = '';
            }
            break;
        case DATA_TYPES.OS:

            switch (value) {
                case  'Windows':
                    className = 'windowLogo';
                    break;
                case  'Linux-based':
                    className = 'linuxLogo';
                    break;
                case  'MacOS':
                    className = 'macLogo';
                    break;
                case  'BSD':
                    className = 'bsdLogo';
                    break;
            }
            value = '';
            break;
        default:
            className = ''
    }

    return (
        <td key={`td_${index}`} className={className}>
            {value}
        </td>
    )
}

