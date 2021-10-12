import React from 'react'
import { useSelector } from 'react-redux';
import File from './File';
import { Grid } from '@mui/material';


const Files = () => {
    const { fileDetails } = useSelector(state => state.folderDetails);
    // console.log(fileDetails);
    return (
        <>
            <p>Files</p>
            <Grid container alignItems='center' spacing={3} >
                {fileDetails &&
                    fileDetails.map((file, id) => (
                        <Grid key={file._id} item xs={6} sm={6} md={2} lg={2} >

                            <File file={file} />
                        </Grid>
                        // console.log(file);
                    ))
                }
            </Grid>

        </>
    )
}

export default Files
