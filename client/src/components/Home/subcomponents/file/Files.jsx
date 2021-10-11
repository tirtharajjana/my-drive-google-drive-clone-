import React from 'react'
import { useSelector } from 'react-redux';
import File from './File';

const Files = () => {
    const { fileDetails } = useSelector(state => state.folderDetails);
    // console.log(fileDetails);
    return (
        <>
            <p>Files</p>
            {fileDetails &&
                fileDetails.map((file, id) => (
                    <File key={id} file={file} />
                    // console.log(file);
                ))
            }
        </>
    )
}

export default Files
