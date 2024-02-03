import React from "react";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Grid } from "@mui/material";

export default function ProductDitealSpecification() {
    return (<div>
        <Grid item xs={12} >

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '3%' }}> 
            <Accordion expanded style={{ background: '#191919', border: '1px solid white', color: 'white', width: '98%', boxShadow: 'none' }}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon style={{ color: 'white' }} />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography style={{ fontWeight: 'bold' }} >SPECIFICATION</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <div style={{ fontWeight: 'bold' }} >TABLET & IPAD CATEGORY</div>
                    <div style={{ display: 'flex', flexDirection: 'row', marginTop: '1.6%' }}>
                        <div style={{ display: 'flex', flexDirection: 'column', width: '40%' }}>
                            <div >Tablet Type </div>
                            <div >iPadOS Tablet </div>
                        </div>
                        <div>
                            <div >Connectivity</div>
                            <div >Wi-Fi Only</div>
                        </div>
                    </div>
                    <p style={{ borderBottom: '2px solid #353535', width: '100%', margin: '15px 2px 15px 0px' }}></p>

                    <div style={{ fontWeight: 'bold' }} >MANUFACTURER DETAILS</div>
                    <div style={{ display: 'flex', flexDirection: 'row', marginTop: '1.6%', width: '98%' }}>
                        <div style={{ display: 'flex', flexDirection: 'column', width: '40%' }}>
                            <div >Brand  </div>
                            <div >Apple</div>
                        </div>
                        <div style={{ width: '40%' }}>
                            <div >Model Series</div>
                            <div >iPad 10th Generation</div>
                        </div>
                        <div>
                            <div >Model Number</div>
                            <div >MPQ13HN/A</div>
                        </div>
                    </div>
                    <p style={{ borderBottom: '2px solid #353535', width: '100%', margin: '15px 2px 15px 0px' }}></p>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <p style={{ padding: '1%', border: '1px solid white', borderRadius: '10px' }}>view more</p>
                    </div>
                </AccordionDetails>
            </Accordion></div>
        </Grid>
        <Grid item xs={12}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '1%' }}> <Accordion style={{ background: '#191919', border: '1px solid white', color: 'white', width: '98%', boxShadow: 'none' }}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon style={{ color: 'white' }} />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography style={{ fontWeight: 'bold' }} >OVERVIEW</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <div style={{ fontWeight: 'bold' }} >Efficient Performance</div>
                    <div style={{ marginTop: '1.6%' }}>The Apple iPad 10.9-inch is your all-in-one productivity tool, allowing you to take notes, collaborate, and work across apps efficiently. Powered by the A14 Bionic chip, you can edit videos, plan vacations, and handle graphics-intensive tasks. The all-day battery life keeps you going, and the Magic Keyboard Folio provides a comfortable typing experience with a trackpad for precise work.</div>
                    <p style={{ borderBottom: '2px solid #353535', width: '100%', margin: '15px 2px 15px 0px' }}></p>

                    <div style={{ fontWeight: 'bold' }} >Endless Creativity</div>
                    <div style={{ marginTop: '1.6%' }}>Express your creativity with this Apple iPad's Apple Pencil, a versatile tool for doodling, note-taking, document markup, and more. This iPad also features high-quality built-in mics and stereo speakers for podcasting, music creation, and content recording. Plus, the 12MP Wide back camera lets you capture photos and videos in 4K. Also, True Tone technology ensures comfortable viewing in any lighting. </div>
                    <p style={{ borderBottom: '2px solid #353535', width: '100%', margin: '15px 2px 15px 0px' }}></p>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <p style={{ padding: '1%', border: '1px solid white', borderRadius: '10px' }}>view more</p>
                    </div>
                </AccordionDetails>
            </Accordion></div>

        </Grid>
    </div>)
}