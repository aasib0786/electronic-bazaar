import React from "react";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FormGroup from '@mui/material/FormGroup';
import Checkbox from '@mui/material/Checkbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';


export default function ProductDetailsFillterComponents(){
    return(<div>
        <div style={{marginLeft:'38%', }}>
                    <div style={{margin:'10px',marginLeft:'0',fontWeight:'500'}}>
                 SORT BY
                 </div>
                 <div>
                 <Accordion  style={{background:'#191919',border:'1px solid white',color:'white',width:'90%' , boxShadow:'none'}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon style={{color:'white'}}/>}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography >FEATURED</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <List  component="nav" aria-label="mailbox folders">
      <ListItem button>
        <ListItemText primary="TOP RATED" />
      </ListItem>
      <ListItem button >
        <ListItemText primary="PRICE (LOWEST FIRST)" />
      </ListItem>
      <ListItem button>
        <ListItemText primary="PRICE (HIGHEST FIRST)" />
      </ListItem>
      <ListItem button>
        <ListItemText primary="DISCOUNT (DESCENDING)" />
      </ListItem>
      <ListItem button>
        <ListItemText primary="LATEST ARRIVAL" />
      </ListItem>
      <ListItem button>
        <ListItemText primary="FEATURED" />
      </ListItem>
    </List>
          </Typography>
        </AccordionDetails>
      </Accordion>
      </div>
                 </div>
                 <div style={{marginLeft:'38%',marginTop:'10%' }}>
                 FILTER BY
                 <p style={{borderBottom:'1px solid white',width:'90%' }}></p>
                 </div>
                 <div>
                 <Accordion expanded style={{background:'#191919',color:'white',width:'60%' , marginLeft:'34%', boxShadow:'none'}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon style={{color:'white'}}/>}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>CETEGORIES</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <FormGroup style={{fontSize:'0.8vw',fontWeight:'1200'}} >
                <span style={{flexDirection:'column',height:'30px'}}><Checkbox style={{color:'white' ,flexDirection:'column'}}/>Inverter ACs (57)</span>
                <span style={{flexDirection:'column',height:'30px'}}><Checkbox style={{color:'white' ,flexDirection:'column'}}/>Split ACs (56)</span>
                <span style={{flexDirection:'column',height:'30px'}}><Checkbox style={{color:'white' ,flexDirection:'column'}}/>3 Star Acs (36)</span>
                <span style={{flexDirection:'column',height:'30px'}}><Checkbox style={{color:'white' ,flexDirection:'column'}}/>5 Star ACs (21)</span>
                <span style={{flexDirection:'column',height:'30px'}}><Checkbox style={{color:'white' ,flexDirection:'column'}}/>Window ACs (4)</span>
                </FormGroup>
          </Typography>
        </AccordionDetails>
      </Accordion>
      </div>
                
                 
                 <div style={{marginLeft:'34%', marginTop:'10%' }}>
                 
                 <Accordion expanded style={{background:'#191919',color:'white',width:'92%' , boxShadow:'none'}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon style={{color:'white'}}/>}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>PRICE</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <FormGroup style={{fontSize:'0.8vw',fontWeight:'1200'}} >
                <span style={{flexDirection:'column',height:'30px'}}><Checkbox style={{color:'white' ,flexDirection:'column'}}/>20,001 - 30,000 (20)</span>
                <span style={{flexDirection:'column',height:'30px'}}><Checkbox style={{color:'white' ,flexDirection:'column'}}/>30,001 - 40,000 (32)</span>
                <span style={{flexDirection:'column',height:'30px'}}><Checkbox style={{color:'white' ,flexDirection:'column'}}/>40,001 - 50,000 (8)</span>
                <span style={{flexDirection:'column',height:'30px'}}><Checkbox style={{color:'white' ,flexDirection:'column'}}/>50,001 - 60,000 (1)</span>
                <span style={{flexDirection:'column',height:'30px'}}><Checkbox style={{color:'white' ,flexDirection:'column'}}/>60,000 - 1,00,000 (1)</span>
                </FormGroup>
          </Typography>
        </AccordionDetails>
      </Accordion>
                 </div>
                 <div style={{marginLeft:'34%', marginTop:'10%' }}>
                 
                 <Accordion expanded style={{background:'#191919',color:'white',width:'92%', boxShadow:'none' }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon style={{color:'white'}}/>}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>BRAND</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <FormGroup style={{fontSize:'0.8vw',fontWeight:'1200'}} >
                <span style={{flexDirection:'column',height:'30px'}}><Checkbox style={{color:'white' ,flexDirection:'column'}}/>Croma (9)</span>
                <span style={{flexDirection:'column',height:'30px'}}><Checkbox style={{color:'white' ,flexDirection:'column'}}/>LG (5)</span>
                <span style={{flexDirection:'column',height:'30px'}}><Checkbox style={{color:'white' ,flexDirection:'column'}}/>Haier (3)</span>
                <span style={{flexDirection:'column',height:'30px'}}><Checkbox style={{color:'white' ,flexDirection:'column'}}/>VOLTAS (11)</span>
                <span style={{flexDirection:'column',height:'30px'}}><Checkbox style={{color:'white' ,flexDirection:'column'}}/>Blue Star (9)</span>
                </FormGroup>
          </Typography>
        </AccordionDetails>
      </Accordion>
                 </div>
    </div>)
}