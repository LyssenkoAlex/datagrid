import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {filterAge, filterData} from "../redux/actions/actions";
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

export function SearchBlock() {
    const [value, setValue] = useState("");
    const dispatch = useDispatch();
    const [age, setAge] = React.useState('');

    const searchData = () => {
            console.log('vals:' , value);
        dispatch(filterData(value));
    };

    const handleChange = event => {
        setAge(event.target.value);
        dispatch(filterAge(event.target.value));
        console.log('age: ', age)
    };


    return (
        <form>
            <label>Search</label>
            <input type="text" onChange={e => setValue(e.target.value)}/>
            <input type="submit" onClick={searchData}/>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={age}
                onChange={handleChange}
            >
                <MenuItem value={20}>less than 20</MenuItem>
                <MenuItem value={30}>less than 30</MenuItem>
                <MenuItem value={40}>less than 40</MenuItem>
                <MenuItem value={50}>less than 50</MenuItem>
                <MenuItem value={85}>less than 85</MenuItem>
            </Select>
        </form>


    )

}
