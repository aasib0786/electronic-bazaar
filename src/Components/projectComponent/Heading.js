import  list from "../../assets/list.png"
import { useNavigate } from "react-router-dom"

export default function Heading(props){
    var navigate = useNavigate()
    return(<div style={{display:'flex',flexDirection:'row'}}>
           <img src={props.image} width='25'/>
           <div style={{fontFamily:'dosis', paddingLeft:5,paddingTop:4,fontSize:18,fontWeight:'bold'}} >
               {props.caption}
           </div>
           <div style={{marginLeft:'auto', cursor:'pointer'}} onClick={()=>navigate(props.link)}>
                <img src={list} width='25' />
           </div>
    </div>
    
    )
}