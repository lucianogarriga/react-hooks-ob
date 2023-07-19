import React from 'react';
import {List, ListItem, ListItemIcon, ListItemText} from '@mui/material';

import {Home, Settings} from '@mui/icons-material'; 
import { useNavigate } from 'react-router-dom';

const getIcon = () => {
    switch (icon) {
        case 'HOME':
            return (<Home/>)
        case 'TASKS':
            return (<Home/>)
        case 'SETTINGS':
            return (<Settings/>) 
        default:
            return (<Home/>)
    }
}

// Receive by props => A list
const MenuListItems = ({list}) => {

    // This component must navigate
    const navigate = useNavigate();
    const navigation = (path) => {
        navigate(path); 
    }

    return (
        // A list which receive by props
        <Link>
            {list.map(({text, path, icon}, index) => {
                (
                <ListItem key={index} component="button" onClick={() => navigation(path)} >
                    <ListItemIcon>
                        {getIcon(icon)}
                    </ListItemIcon>
                    <ListItemText primary={text}/>
                </ListItem>
                )
            })}
        </Link>
    );
}

export default MenuListItems;
