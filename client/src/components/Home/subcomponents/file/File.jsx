import React from 'react'
import { Typography } from '@material-ui/core';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';

import DownloadIcon from '@mui/icons-material/Download';

const File = ({ file }) => {
    console.log(file);
    const baseUrl = "http://localhost:5000/files";
    const size = (file.size / 1024 / 1024).toFixed(3)
    const handleClick = () => {
        window.open(`${baseUrl}/${file._id}`);
    };
    return (
        <>

            <Card sx={{ maxWidth: 200 }} elevation={6} >
                <CardContent>

                    <Typography noWrap color='primary' variant="subtitle1" component="div">
                        {file.name}
                    </Typography>
                    <Typography varient="subtitle2" sx={{ mb: 1.5 }} color="text.secondary">
                        {`Size: ${size} MB`}
                    </Typography>
                    <Typography variant="body2">
                        {`Type: ${file.fileType}`}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button variant="contained" onClick={handleClick} endIcon={<DownloadIcon />}>
                        Download
                    </Button>
                </CardActions>
            </Card>
        </>
    )
}

export default File

