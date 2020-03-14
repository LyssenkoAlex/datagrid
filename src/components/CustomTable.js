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
    const headers = useSelector(state => state.tableHeaders);

    const rowHandler = (row) => {
        dispatch(selectRow({row}))
    };

    let cells = tableData.slice(selectedPage, selectedPage + rowsPerPage).map((row, index) => {
        let rowCell;

        switch (true) {
            case row.SELECTED:
                rowCell = 'selectedRow';
                break;

            default:
                rowCell = '';
        }
        let styleYearsCode = headers.filter((x) => x.TITLE === 'YearsCode')[0].SHOW_COL;
        let styleCountry = headers.filter((x) => x.TITLE === 'Country')[0].SHOW_COL;
        let styleGender = headers.filter((x) => x.TITLE === 'Gender')[0].SHOW_COL;
        let styleRespondent = headers.filter((x) => x.TITLE === 'Respondent')[0].SHOW_COL;


        return (
            <tr key={`${row.ROW_ID}`} onClick={() => rowHandler(row)}>
                <CellRender value={row.Age} index={index} type={DATA_TYPES.NUMBER_TYPE}/>
                <td key={`Country_${index}`} className={rowCell} style={{'display': styleCountry ? '' : 'none'}}>{row.Country}</td>
                <CellRender value={row.Employment} index={index} type={DATA_TYPES.STRING_TYPE}/>
                <td key={`Gender_${index}`} className={rowCell} style={{'display': styleGender ? '' : 'none'}}>{row.Gender}</td>
                <CellRender value={row.Hobbyist} index={index} type={DATA_TYPES.BOOLEAN_TYPE}/>
                <td key={`LanguageWorkedWith_${index}`} className={rowCell}>{row.LanguageWorkedWith}</td>
                <CellRender value={row.MainBranch} index={index} type={DATA_TYPES.STRING_TYPE}/>
                <CellRender value={row.OpSys} index={index} type={DATA_TYPES.OS}/>
                <td key={`Respondent_${index}`} className={rowCell} style={{'display': styleRespondent ? '' : 'none'}}>{row.Respondent}</td>
                <td key={`Student_${index}`} className={rowCell}>{row.Student}</td>
                <td key={`SurveyLength_${index}`} className={rowCell}>{row.SurveyLength}</td>
                <td key={`WebFrameWorkedWith_${index}`} className={rowCell}>{row.WebFrameWorkedWith}</td>
                <td key={`YearsCode_${index}`} className={rowCell} style={{'display': styleYearsCode ? '' : 'none'}}>{row.YearsCode}</td>
            </tr>
        )
    });

    return (
        <div className='withscroll'>
        <table>
            <TableHeader/>
            <tbody>
            {cells}
            </tbody>
        </table>
        </div>
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

