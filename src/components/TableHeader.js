import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import IconButton from '@material-ui/core/IconButton';
import '../style/style.scss';
import {complexSort} from "../redux/actions/actions";
import {makeStyles} from '@material-ui/core/styles';
import {red,  grey} from '@material-ui/core/colors';

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
        let iconUP;
        let iconDown;

        if(item.TO_SORT) {
            if(item.SORT === 'ASC') {
                iconUP = grey[500];
                iconDown = red[500];
            }
            else {
                iconUP = red[500];
                iconDown = grey[500];
            }
        }
        else {
            iconUP = grey[500];
            iconDown = grey[500];
        }

        return (
            <th key={`th_${index}`}>
              <span>
                  {item.DISPLAY}
              </span>
                <IconButton aria-label="filter list" onClick={(e) => applySortASC(e, item)}>
                    <ArrowDownwardIcon style={{ color: iconDown }}/>
                </IconButton>
                <IconButton aria-label="filter list" onClick={(e) => applySortDESC(e, item)}>
                    <ArrowUpwardIcon style={{ color: iconUP }}/>
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



