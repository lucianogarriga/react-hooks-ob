import React from 'react';
// Material UI Components
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';


const Copyright = () => {
    return (
        <Typography variant='body2' color="GrayText" align='center'>
            {'Copyright © '}
            <Link color="inherit" href="https://github.com/lucianogarriga">
                Luciano Garriga
            </Link>
            { ' Year '}
            { new Date().getFullYear()}
        </Typography>
    );
}

export default Copyright;
