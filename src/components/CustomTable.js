
import React, {useState} from 'react';
import { useDispatch, useSelector} from 'react-redux'
import  '../style/style.scss'


export default function CustomTable() {

    const tableData = useSelector(state => state.tableData);

    let cells = tableData.slice(0,300).map((row, index) =>
        <tr key={`row_${index}`}>
            <td key={`age_${index}`}>{row.Age}</td>
            <td key={`Country_${index}`}>{row.Country}</td>
            <td key={`Employment_${index}`}>{row.Employment}</td>
            <td key={`Gender_${index}`}>{row.Gender}</td>
            <td key={`Hobbyist_${index}`}>{row.Hobbyist}</td>
            <td key={`LanguageWorkedWith_${index}`}>{row.LanguageWorkedWith}</td>
            <td key={`MainBranch_${index}`}>{row.MainBranch}</td>
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
            <tbody>
            {cells}
            </tbody>
        </table>
    )

}
