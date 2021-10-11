import React from 'react';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import { useHistory } from 'react-router';


function handleClick(event) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
}

const FolderBreadcrumbs = ({ currentFolder }) => {
    const history = useHistory();
    // console.log(currentFolder)
    const openFolder = (id) => {
        history.push(`/folder/${id}`)
    }
    return (
        <div role="presentation">
            <Breadcrumbs aria-label="breadcrumb">
                {
                    currentFolder?.path.map((folder, index) => (
                        <div key={folder.id} style={{ cursor: 'pointer' }} onClick={() => openFolder(folder.id)} >
                            <Link

                                underline="hover"
                                color="inherit"
                            >
                                {folder.name}
                            </Link>
                        </div>
                    ))
                }
                {/* <Link underline="hover" color="inherit" href="/">
                    MUI
                </Link>
                <Link
                    underline="hover"
                    color="inherit"
                    href="/getting-started/installation/"
                >
                    Core
                </Link> */}
                <Typography color="text.primary">{currentFolder?.name}</Typography>
            </Breadcrumbs>
        </div>
    )
}

export default FolderBreadcrumbs
