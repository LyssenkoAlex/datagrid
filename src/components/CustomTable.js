
import React, {useState} from 'react';
import { useDispatch, useSelector} from 'react-redux'


export default function CustomTable() {

    const tableData = useSelector(state => state.tableData);

    let cells = tableData.map((row, index) =>
        <span key={index}>{row.Respondent}</span>
    );

    return (
        <div>
            {cells}
        </div>
    )

}
