import React from 'react';
import CustomTable from "./components/CustomTable";
import TableFooter from "./components/TableFooter";
import {SearchBlock} from "./components/SearchBlock";

function App() {
    return (
        <React.Fragment>
            <SearchBlock/>
            <CustomTable/>
            <TableFooter/>
        </React.Fragment>
    );
}

export default App;
