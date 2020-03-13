import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import IconButton from '@material-ui/core/IconButton';
import '../style/style.scss';
import {complexSort, sortColumn} from "../redux/actions/actions";
import {makeStyles} from '@material-ui/core/styles';
import {red} from '@material-ui/core/colors';

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
    const [filterColumns, setColumn] = useState([]);


    const applySortASC = (e, column) => {
        column.SORT = 'ASC';
        if (e.shiftKey) {
            dispatch(complexSort({column, MODE: 'MULTI'}));
        } else {
            dispatch(complexSort({column, MODE: 'SINGLE'}));
        }
    };


    const applySortDESC = (e, column) => {
        column.SORT = 'DESC';
        if (e.shiftKey) {
            dispatch(complexSort({column, MODE: 'MULTI'}));
        } else {
            dispatch(complexSort({column, MODE: 'SINGLE'}));
        }
    };

    const elements = headers.map((item, index) => {
        return (
            <th key={`th_${index}`}>
              <span>
                  {item.DISPLAY}
              </span>
                <IconButton aria-label="filter list" onClick={(e) => applySortASC(e, item)}>
                    <ArrowDownwardIcon/>
                </IconButton>
                <IconButton aria-label="filter list" onClick={(e) => applySortDESC(e, item)}>
                    <ArrowUpwardIcon/>
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



