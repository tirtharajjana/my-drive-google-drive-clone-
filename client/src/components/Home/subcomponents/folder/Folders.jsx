import { Grid } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import Folder from './Folder';
import { useHistory } from 'react-router';
import FolderBreadcrumbs from './FolderBreadcrumbs';

const Folders = () => {
    const { folderDetails, currentFolder } = useSelector(state => state.folderDetails);
    const history = useHistory();
    // console.log(folderDetails.length);

    // if (!folderDetails.length ) return 'No Folder found';

    return (
        <>
            <FolderBreadcrumbs currentFolder={currentFolder} />
            <Grid container alignItems='center' spacing={2} >
                {folderDetails &&
                    folderDetails.map((folder) => (
                        <Grid key={folder._id} item xs={12} sm={6} md={3} lg={2} >
                            <Folder folder={folder} />
                        </Grid>
                    ))
                }
            </Grid>
        </>
    )
}

export default Folders
