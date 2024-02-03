import { Button, Fab } from "@mui/material";
import RemoveIcon from '@mui/icons-material/Remove';
import { useEffect, useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import { useNavigate } from "react-router-dom";
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

export default function PlusMinesComponents(props) {
    const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('sm'));
  const matches_md = useMediaQuery(theme.breakpoints.up('md'));
    var navigate = useNavigate()
    //alert(props.value)

    const [count, setCount] = useState(0)

    useEffect(function () {
        setCount(props.value)
    }, [props])

    const handlePlus = () => {
        var c = count + 1
        setCount(c)
        props.onChange(c)
    }
    const handleMin = () => {
        var c = count - 1
        if (c >= 0) {
            setCount(c)
            props.onChange(c)
        }

    }
    const handleShopping = () => {
        navigate('/home')
    }

    return (<div style={{ display: 'flex' }}>
        {count == 0 ? <div style={{display:'flex'}} >
            <span><Button onClick={handlePlus} style={{ color: 'white', background: '#353535', padding:matches?'10px 40px 10px 40px':'10px 20px 10px 20px', border: '1px solid white', borderRadius: '10px' }}>Add to cart</Button></span>
            <span><Button style={{ color: 'black', marginLeft: '12px', background: '#12DAA8', padding: '10px 40px 10px 40px', borderRadius: '10px' }}>BuyNow</Button></span>
            {/* <span><Button style={{ color: 'black', marginLeft: '10px', background: '#12DAA8', padding: '10px 50px 10px 50px', borderRadius: '10px' }}>BuyNow</Button></span> */}
        </div> : <div style={{ display: 'flex', justifyContent: 'space-between', width:matches?'70%':'90%', alignItems: 'center'}}>
            <div style={{ display: 'flex', justifyContent: 'space-between', width: '35%', alignItems: 'center' }} >
            <Button onClick={handleMin}>
                <Fab size="small" color="secondary" aria-label="remove" style={{zIndex:0}}>
                    <RemoveIcon />
                </Fab>
            </Button>
            <div style={{ fontSize: 20, color:props.screen=='cart'?'#000':'#fff' }}>
                {count}
            </div>
            <Button onClick={handlePlus}>
                <Fab size="small" color="secondary" aria-label="add" style={{zIndex:0}}>
                    <AddIcon />
                </Fab>
            </Button>
            </div>
            {props.screen=='cart'?<></>:<span ><Button style={{ color: 'black', marginLeft: '12px', background: '#12DAA8', padding:'6px', borderRadius: '10px' }} onClick={handleShopping}  >Continue Shopping</Button></span>}
        </div>}
        <span>
        </span>
    </div>)
}