import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux'
import '../style/style.scss'
import TableHeader from "./TableHeader";
import {green} from '@material-ui/core/colors';
import {DATA_TYPES} from "../utils/consts";
import {selectRow} from "../redux/actions/actions";


export default function CustomTable() {

    const tableData = useSelector(state => state.tableData);
    const selectedPage = useSelector(state => state.selectedPage);
    const rowsPerPage = useSelector(state => state.rowsPerPage);
    const dispatch = useDispatch();

    const rowHandler = (row) => {
        dispatch(selectRow({row}))
    };

    let cells = tableData.slice(selectedPage, selectedPage + rowsPerPage).map((row, index) => {
            let rowCell = row.SELECTED ? 'selectedRow' : '';
        return (
            <tr key={`${row.ROW_ID}`} onClick={() => rowHandler(row)}>
                <CellRender value={row.Age} index={index} type={DATA_TYPES.NUMBER_TYPE} />
                <td key={`Country_${index}`} className={rowCell}>{row.Country}</td>
                <CellRender value={row.Employment} index={index} type={DATA_TYPES.STRING_TYPE}/>
                <td key={`Gender_${index}`} className={rowCell}>{row.Gender}</td>
                <CellRender value={row.Hobbyist} index={index} type={DATA_TYPES.BOOLEAN_TYPE}/>
                <td key={`LanguageWorkedWith_${index}`} className={rowCell}>{row.LanguageWorkedWith}</td>
                <CellRender value={row.MainBranch} index={index} type={DATA_TYPES.STRING_TYPE}/>
                <CellRender value={row.OpSys} index={index} type={DATA_TYPES.OS}/>
                <td key={`Respondent_${index}`} className={rowCell}>{row.Respondent}</td>
                <td key={`Student_${index}`} className={rowCell}>{row.Student}</td>
                <td key={`SurveyLength_${index}`} className={rowCell}>{row.SurveyLength}</td>
                <td key={`WebFrameWorkedWith_${index}`} className={rowCell}>{row.WebFrameWorkedWith}</td>
                <td key={`YearsCode_${index}`} className={rowCell}>{row.YearsCode}</td>
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

