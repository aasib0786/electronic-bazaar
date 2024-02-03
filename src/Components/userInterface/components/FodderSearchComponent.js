import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { InputAdornment, TextField } from "@mui/material"
export default function FodderSearchComponent(props){
    return(<div style={{display:'flex',background:'white',width:'100%',height:55,paddingLeft:25,paddingRight:10,borderRadius:7,alignItems:'center'}}>
          <TextField 
          placeholder="Enter Email ID?"
          InputProps={{disableUnderline:true,
                        endAdornment:(
                            <InputAdornment position="end">
                            <ArrowRightAltIcon />
                            </InputAdornment>
                                      ),
                        }}
          variant="standard"
          size="small"
          fullWidth
          />
    </div>)
}