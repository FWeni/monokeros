import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
// import { Link, useLocation } from "react-router-dom";
import AppBar from '@mui/material/AppBar';

// import Slides from '../body/picSlides';
// import Categories from '../body/categoryGrid';
import { Toolbar, Typography } from '@mui/material';
import HomePage from '../../pages/tabs/homePage';
// import HomePage from "../../pages/tabs/homePage";
// import BidPage from "../../pages/tabs/bidPage";
// import BuyCatalogPage from "../../pages/tabs/buyCatalogPage";
// import  SellPage from "../../pages/tabs/sellPage";

// import { Home,Bids,ForSale, YourVault } from '../../routes/routes';




function NavTabs() {
    // const pathname = useLocation();
    const [index, setIndex] = React.useState(0);
    const onTabClicked = (event, index) => {
        setIndex(index);
      };

    return(
        <div>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <AppBar position="static">
                    <Toolbar>
                        <Typography align='start' variant="h4" component="div" sx={{ flexGrow: 1 }}>
                            Monokeros
                        </Typography>
                        <Tabs value={index} onChange={onTabClicked} variant="fullWidth" >
                            <Tab
                                label="Home"
                            />
                            <Tab
                                label="Bid"
                            />
                            <Tab
                                label="Buy"
                            />
                            <Tab
                                label="Sell"
                            />
                        </Tabs>
                    </Toolbar>
                </AppBar>
                <Panel value= {index} index={0}>
                    {/* <Slides></Slides> */}
                    <HomePage></HomePage>
                </Panel>
                {/* <Categories></Categories> */}
            </Box>
        </div>
        );



};

const Panel = (props) => (
    <div hidden={props.value !== props.index}>
        {props.children}
    </div>
)
export default NavTabs;