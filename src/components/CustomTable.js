import React, {  useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux'
import '../style/style.scss'
import TableHeader from "./TableHeader";
import {DATA_TYPES} from "../utils/consts";
import {changeRows, selectRow} from "../redux/actions/actions";


export default function CustomTable() {

    const tableData = useSelector(state => state.tableData);
    const dispatch = useDispatch();
    const headers = useSelector(state => state.tableHeaders);

    const rowHandler = (row) => {
        dispatch(selectRow({row}))
    };

    useEffect(() => {
        let scrollPos = 0;
        const list = document.getElementById('table-scroll');
        list.addEventListener('scroll', (e) => {
            const el = e.target;

            if (el.scrollTop > scrollPos){
                if (el.scrollTop % el.clientHeight >= 0 && el.scrollTop % el.clientHeight <= 10) {
                    dispatch(changeRows(1))
                }

            } else {
                if (el.scrollTop === 0 ) {
                     // dispatch(changeRows(-1))
                }
            }


            scrollPos = el.scrollTop;
        });
    });

    let cells = tableData.map((row) => {
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
                <th key={`Respondent_${row.ROW_ID}`}
                    style={{'display': styleRespondent ? '' : 'none'}}>{row.Respondent}</th>
                <CellRender value={row.Age} index={row.ROW_ID} type={DATA_TYPES.NUMBER_TYPE}/>
                <td key={`Country_${row.ROW_ID}`} className={rowCell}
                    style={{'display': styleCountry ? '' : 'none'}}>{row.Country}</td>
                <CellRender value={row.Employment} index={row.ROW_ID} type={DATA_TYPES.STRING_TYPE}/>
                <td key={`Gender_${row.ROW_ID}`} className={rowCell}
                    style={{'display': styleGender ? '' : 'none'}}>{row.Gender}</td>
                <CellRender value={row.Hobbyist} index={row.ROW_ID} type={DATA_TYPES.BOOLEAN_TYPE}/>
                <td key={`LanguageWorkedWith_${row.ROW_ID}`} className={rowCell}>{row.LanguageWorkedWith}</td>
                <CellRender value={row.MainBranch} index={row.ROW_ID} type={DATA_TYPES.STRING_TYPE}/>
                <CellRender value={row.OpSys} index={row.ROW_ID} type={DATA_TYPES.OS}/>
                <td key={`Student_${row.ROW_ID}`} className={rowCell}>{row.Student}</td>
                <td key={`SurveyLength_${row.ROW_ID}`} className={rowCell}>{row.SurveyLength}</td>
                <td key={`WebFrameWorkedWith_${row.ROW_ID}`} className={rowCell}>{row.WebFrameWorkedWith}</td>
                <td key={`YearsCode_${row.ROW_ID}`} className={rowCell}
                    style={{'display': styleYearsCode ? '' : 'none'}}>{row.YearsCode}</td>
            </tr>
        )
    });

    return (
        <div id="table-scroll" className="table-scroll">
            <table id="main-table" className="main-table">
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
                default:
                    className = '';
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

