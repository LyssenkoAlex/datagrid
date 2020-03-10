import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import '../style/style.scss';
import {sortColumn} from "../redux/actions/actions";
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
    },
    paper: {
        marginRight: theme.spacing(2),
    },
}));


export default function TableHeader() {

    const dispatch = useDispatch();
    const headers = useSelector(state => state.tableHeaders);

    const applySort = (column) => {
        dispatch(sortColumn(column));
    };

    const toggle = (column) => {
        console.log('column: ', column)
    }

    const elements = headers.map((item, index) => {
        let sortIcon;
        if (item.SORT === 'ASC') {
            sortIcon =  <ArrowDownwardIcon/>;
        } else {
            sortIcon = <ArrowUpwardIcon/>;
        }
        return (
            <th key={`th_${index}`}>{item.DISPLAY}
                <IconButton aria-label="filter list" onClick={() => applySort(item)}>
                    {sortIcon}
                </IconButton>
            </th>
        )

    });

    return (
        <thead>
        <tr>
            {elements}
        </tr>
        </thead>
    )
}


