import React, {useState, useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import IconButton from '@material-ui/core/IconButton';
import '../style/style.scss';
import {complexSort, sortColumn} from "../redux/actions/actions";
import { makeStyles } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

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
        headers.filter((x) => x.TITLE === column.TITLE)[0].SORT = 'ASC';
        column.SORT = 'ASC';
        if(e.shiftKey) {
            setColumn([...filterColumns, column])
        }
        else {
            setColumn([column]);
        }
        console.log('asc_filterColumns:', filterColumns)
        dispatch(complexSort(filterColumns));
    };


    const applySortDESC = (e, column) => {
        headers.filter((x) => x.TITLE === column.TITLE)[0].SORT = 'DESC';
        column.SORT = 'DESC';
        if(e.shiftKey) {
            setColumn([...filterColumns, column])
        }
        else {
            setColumn([column]);
        }
        console.log('desc_filterColumns:', filterColumns)
        dispatch(complexSort(filterColumns));
    };

    const elements = headers.map((item, index) => {
        return (
          <th key={`th_${index}`}>
              <span>
                  {item.DISPLAY}
              </span>
                <IconButton aria-label="filter list" onClick={(e) => applySortASC(e, item)} >
                    <ArrowDownwardIcon />
                </IconButton>
                <IconButton aria-label="filter list" onClick={(e) => applySortDESC(e, item)}>
                    <ArrowUpwardIcon />
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



