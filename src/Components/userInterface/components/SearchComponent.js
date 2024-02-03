import { Search } from "@mui/icons-material"
import { InputAdornment, TextField } from "@mui/material"
import { useState } from "react"
import { postData } from "../../../services/FetchNodeServices"
import { json, useNavigate } from "react-router-dom"
export default function SearchComponent(props){
    var navigate = useNavigate()
    const [text , setText] = useState('')
    const fetch_record=async()=>{
        var result = await postData ('Userinterface/filter_search',{text})
        return(result.data)
        
    }
    const handleSearch=()=>{
        fetch_record().then((respons)=>{
                // alert(JSON.stringify(respons))
        navigate('/productsearch',{state:{data:respons}})

        })

    }

    return(<div style={{display:'flex',background:'white',width:'100%',height:55,paddingLeft:25,paddingRight:10,borderRadius:7,alignItems:'center'}}>
          <TextField 
          placeholder="What you are looking for?"
          onChange={(e)=>setText(e.target.value)}
          InputProps={{disableUnderline:true,
                        endAdornment:(
                            <InputAdornment position="end">
                            <Search onClick={handleSearch} style={{cursor:'pointer'}} />
                            </InputAdornment>
                                      ),
                        }}
          variant="standard"
          size="small"
          fullWidth
          />
    </div>)
}