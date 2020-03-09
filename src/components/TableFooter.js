import React, {useState} from 'react';
import { useDispatch, useSelector} from 'react-redux'
import  '../style/style.scss'
import {setSelectedPage} from "../redux/actions/actions";


export default function TableFooter() {

    const tableData = useSelector(state => state.tableData);
    const rowsPerPage = useSelector(state => state.rowsPerPage);
    const dispatch = useDispatch();

    const setPageId = (id) => {
        dispatch(setSelectedPage(id))
    };

    let elements = [...Array(Math.ceil(tableData.length / rowsPerPage)).keys()].map((number, index) => <li onClick={() => setPageId(index)} key={`li_${index}`}>{index}</li>);

    return (
        <ul>
            {elements}
        </ul>
    )
}


