// import NavBar from "../header/navbar";
import NavTabs from "../header/navbarWithTabs";

import * as React from 'react';


function Main() {
    // const [loggedIn, setLoggedIn] = React.useState(false);

    // const userLoggedIn = () => {
    //     setLoggedIn(true);
    // };
    // const UserNotLoggedIn = () => {
    //     setLoggedIn(false);
    // };
    return (
        <div >
            <NavTabs></NavTabs>
            {/* {loggedIn ? (
                <NavTabs></NavTabs>
            ) : (
                <NavBar></NavBar> */}
            {/* )} */}
        </div>
    );

}
export default Main;