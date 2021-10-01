import React from 'react'
// import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Grid, TextField } from '@mui/material';


const ChangePassword = () => {
    return (
        <div>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography>Change Password</Typography>
                </AccordionSummary>
                {/* <AccordionDetails>
                    <Grid >
                        <TextField style={{margin:"5px"}}  label="Enter current password" fullWidth />
                        <TextField style={{margin:"5px"}} label="Enter new password" fullWidth />
                        <TextField style={{margin:"5px"}} label="Repeat new password" fullWidth />
                    </Grid>
                </AccordionDetails> */}
            </Accordion>

        </div >
    )
}

export default ChangePassword
