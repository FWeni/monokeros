import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';


const Panel = (props) => {
    <div hidden="props.value !== props.index">
        <Typography>
           { props.children }
        </Typography>
        {/* this is a for the NavBar of a user that is logged in */}
        {/* will add contents of each tab here */}
    </div>
}

function NavTabs() {
    const pageTabs = [
        {id: 1, name:'Bid'},
        {id: 2, name:'Buy'},
        {id: 3, name:'Sell'}
    ];
    const [pageIndex, setPageIndex] = React.useState(0);
    const activeTab = (event, pageIndex) => {
        setPageIndex(pageIndex);
    };
    pageTabs.forEach(tab =>{
        <Panel value={pageIndex} pageIndex={tab.id}>
            ${tab.name} to be displayed here....
        </Panel>
    })

    return(
        <Tabs centered value="pageIndex" onChange={activeTab}>
            <Tab color="inherit" label="Bid"></Tab>
            <Tab color="inherit" label="Buy"></Tab>
            <Tab color="inherit" label="Sell"></Tab>
        </Tabs>
        );



};

export default NavTabs;