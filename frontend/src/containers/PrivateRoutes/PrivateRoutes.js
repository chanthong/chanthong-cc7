import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Menubar from '../../components/Navbar/Menubar';

function PrivateRoutes(props) {
    const role = props.role || "Guest";

    return (
        <>
            {role !== "GUEST" ? <Menubar /> : null}
            <Switch>

            </Switch>
        </>
    )
}

export default PrivateRoutes
