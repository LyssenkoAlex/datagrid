import React from 'react';
import CustomTable from "./components/CustomTable";
import {SearchBlock} from "./components/SearchBlock";

function App() {
    return (
        <React.Fragment>
            <SearchBlock/>
            <CustomTable/>
        </React.Fragment>
    );
}

export default App;
