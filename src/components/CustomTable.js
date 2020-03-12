
import React, {useState} from 'react';
import { useDispatch, useSelector} from 'react-redux'
import  '../style/style.scss'
import TableHeader from "./TableHeader";


export default function CustomTable() {

    const tableData = useSelector(state => state.tableData);
    const selectedPage = useSelector(state => state.selectedPage);
    const rowsPerPage = useSelector(state => state.rowsPerPage);

    let cells = tableData.slice(selectedPage, selectedPage + rowsPerPage).map((row, index) =>
        <tr key={`row_${index}`}>
            <CellRender value={row.Age} index={index} type={'Number'}/>
            <td key={`Country_${index}`}>{row.Country}</td>
            <td key={`Employment_${index}`}>{row.Employment}</td>
            <td key={`Gender_${index}`}>{row.Gender}</td>
            <CellRender value={row.Hobbyist} index={index} type={'Boolean'}/>
            <td key={`LanguageWorkedWith_${index}`}>{row.LanguageWorkedWith}</td>
            <CellRender value={row.MainBranch} index={index} type={'String'}/>
            <td key={`OpSys_${index}`}>{row.OpSys}</td>
            <td key={`Respondent_${index}`}>{row.Respondent}</td>
            <td key={`Student_${index}`}>{row.Student}</td>
            <td key={`SurveyLength_${index}`}>{row.SurveyLength}</td>
            <td key={`WebFrameWorkedWith_${index}`}>{row.WebFrameWorkedWith}</td>
            <td key={`YearsCode_${index}`}>{row.YearsCode}</td>
        </tr>
    );

    return (
        <table>
            <TableHeader/>
            <tbody>
            {cells}
            </tbody>
        </table>
    )
}

function CellRender  ({value, index, type}) {
    let className;
    if(type === 'Number') {
        className = 'numberBlock'
    }
    else if(type === 'Boolean') {
        className = 'booleanBlock';
    }
    else {
        className = 'textBlock'
    }

    return (
        <td key={`age_${index}`} className={className}>
            {value}
        </td>
    )
}

