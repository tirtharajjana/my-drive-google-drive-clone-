import { Button } from '@material-ui/core'
import React from 'react'
import { Link } from 'react-router-dom'
import FolderIcon from '@mui/icons-material/Folder';
import { useHistory } from 'react-router';

const Folder = ({ folder }) => {
    // console.log(folder);
    const history = useHistory();
    const handleClick = () => {
        history.push(`/folder/${folder._id}`)
    }

    return (
        // <Button component={Link} href={`http://localhost:3000/folder/${folder._id}`} variant='outlined' >
        //     <FolderIcon /> {folder.name}
        // </Button>
        <Button onClick={handleClick} variant='outlined' style={{ textTransform: 'none' }} >
            <FolderIcon /> {folder.name}
        </Button>


    )
}

export default Folder
