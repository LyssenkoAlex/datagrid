import React, {useState} from 'react';
import { useDispatch, useSelector} from 'react-redux'
import  '../style/style.scss'
import {movePage, setSelectedPage} from "../redux/actions/actions";


export default function TableFooter() {

    const rowsPerPage = useSelector(state => state.rowsPerPage);
    const selectedPage = useSelector(state => state.selectedPage);
    const pageRangeDisplay = useSelector(state => state.pageRangeDisplay);
    const dispatch = useDispatch();


    const fillRange = (start, end) =>
        [...Array(end - start + 1)].map((item, index) => start + index);

    const setPageId = (id) => {
        dispatch(setSelectedPage(id))
    };

    const nextPage = (direction) => {
            if(direction === 'forward') {
                dispatch(movePage( 1))
            }
            else {
                dispatch(movePage( - 1))
            }
    };

    let elements = fillRange(pageRangeDisplay * rowsPerPage, pageRangeDisplay * rowsPerPage + 10)
        .map((number, index) => <a href={'#'} className={selectedPage === index ? 'active' : ''} onClick={() => setPageId(index)} key={`ahref_${index}`}>{number}</a>);


    return (
        <div className='pagination'>
            <a href={'#'} key={'backwardKey'} onClick={() => nextPage('backward')}>&laquo;</a>
            {elements}
            <a href={'#'} key={'forwardKey'} onClick={() => nextPage('forward')}>&raquo;</a>
        </div>
    )
}


