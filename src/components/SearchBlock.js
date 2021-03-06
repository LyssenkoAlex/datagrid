import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {filterItem, filterData, deleteRows, showHideColumn} from "../redux/actions/actions";
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import {makeStyles} from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import AccessibilityNewIcon from '@material-ui/icons/AccessibilityNew';
import PregnantWomanIcon from '@material-ui/icons/PregnantWoman';
import NotListedLocationIcon from '@material-ui/icons/NotListedLocation';
import TextField from '@material-ui/core/TextField';
import DescriptionIcon from '@material-ui/icons/Description';
import Button from '@material-ui/core/Button';
import {arrayToCSV} from "../utils/helpers";
import RemoveIcon from '@material-ui/icons/Remove';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

const useStyles = makeStyles(theme => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: 200,
        },

    },
    button: {
        margin: '8px',
    },
}));


export function SearchBlock() {
    const classes = useStyles();
    const dispatch = useDispatch();
    const [age] = React.useState('');
    const inputLabel = React.useRef(null);
    const [labelWidth, setLabelWidth] = React.useState(0);
    React.useEffect(() => {
        setLabelWidth(inputLabel.current.offsetWidth);
    }, []);

    const searchData = event => {
        if (event.charCode === 13) {
            dispatch(filterData(event.target.value));
        }
    };

    const handleChange = event => {
        dispatch(filterItem(event.target.value));
    };

    const tableData = useSelector(state => state.tableData);
    const tableHeaders = useSelector(state => state.tableHeaders);


    const createCSV = () => {
        let csv = arrayToCSV({data: tableData});
        let filename = 'export_data.csv';
        csv = 'data:text/csv;charset=utf-8,' + csv;
        csv = csv.replace(/#/g,'');
        let data = encodeURI(csv);
        let link = document.createElement('a');
        link.setAttribute('href', data);
        link.setAttribute('download', filename);
        link.click();
    };

    const removeSelectedRows = () => {
        dispatch(deleteRows())
    };

    const handlerShowHideColumn = (column) => {
        dispatch(showHideColumn(column))
    };


    return (
        <div className='searchBlock'>
            <form className={classes.root} noValidate autoComplete="off">
                <TextField id="outlined-search" label="Search field" type="search" variant="outlined"
                           onKeyPress={e => searchData(e)}/>
            </form>

            <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel ref={inputLabel} id="demo-simple-select-outlined-label">
                    Age
                </InputLabel>
                <Select
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    value={age}
                    onChange={handleChange}
                    labelWidth={labelWidth}
                >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value={{TITLE: 'Age', VALUE: 10, TYPE: 'Number'}}>Ten</MenuItem>
                    <MenuItem value={{TITLE: 'Age', VALUE: 20, TYPE: 'Number'}}>Twenty</MenuItem>
                    <MenuItem value={{TITLE: 'Age', VALUE: 30, TYPE: 'Number'}}>Thirty</MenuItem>
                </Select>
            </FormControl>
            <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel ref={inputLabel} id="demo-simple-select-outlined-label2">
                    Sex
                </InputLabel>
                <Select
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined2"
                    value={age}
                    onChange={handleChange}
                    labelWidth={labelWidth}
                >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value={{TITLE: 'Gender', VALUE: 'Man', TYPE: 'String'}}><AccessibilityNewIcon/></MenuItem>
                    <MenuItem value={{TITLE: 'Gender', VALUE: 'Woman', TYPE: 'String'}}><PregnantWomanIcon/></MenuItem>
                    <MenuItem value={{
                        TITLE: 'Gender',
                        VALUE: 'Woman;Non-binary, genderqueer, or gender non-conforming',
                        TYPE: 'String'
                    }}><NotListedLocationIcon/></MenuItem>
                </Select>
            </FormControl>
            <FormControl variant="outlined" className={classes.formControl}>
                <Button
                    variant="contained"
                    color="primary"
                    size="small"
                    className={classes.button}
                    startIcon={<DescriptionIcon/>}
                    onClick={() => createCSV()}
                >
                    CSV
                </Button>
            </FormControl>
            <FormControl variant="outlined" className={classes.formControl}>
                <Button
                    variant="contained"
                    color="primary"
                    size="small"
                    className={classes.button}
                    startIcon={<RemoveIcon/>}
                    onClick={() => removeSelectedRows()}
                >
                    Remove rows
                </Button>
            </FormControl>
            <FormControlLabel
                control={
                    <Checkbox
                        checked={tableHeaders[2].SHOW_COL}
                        value="checkedB"
                        color="primary"
                        onChange={() => handlerShowHideColumn('Country')}
                    />
                }
                label="Country"
            />

            <FormControlLabel
                control={
                    <Checkbox
                        checked={tableHeaders[4].SHOW_COL}
                        value="checkedB"
                        color="primary"
                        onChange={() => handlerShowHideColumn('Gender')}
                    />
                }
                label="Gender"
            />
            <FormControlLabel
                control={
                    <Checkbox
                        checked={tableHeaders[0].SHOW_COL}
                        value="checkedB"
                        color="primary"
                        onChange={() => handlerShowHideColumn('Respondent')}
                    />
                }
                label="Respondent"
            />
            <FormControlLabel
                control={
                    <Checkbox
                        checked={tableHeaders[12].SHOW_COL}
                        value="checkedB"
                        color="primary"
                        onChange={() => handlerShowHideColumn('YearsCode')}
                    />
                }
                label="YearsCode"
            />
        </div>
    )
}
