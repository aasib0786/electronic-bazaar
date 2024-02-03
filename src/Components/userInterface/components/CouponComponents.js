import { Button, Paper } from "@mui/material";
import PercentIcon from '@mui/icons-material/Percent';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import React from "react";
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';


export default function Coupon() {
    const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('md'));
    return (
        <div style={{ display: 'flex', width: '100%' }}>
            <Paper style={{ display: 'flex', width: '100%', justifyContent: 'space-between' }}>
                <Button style={{ width:matches?'70%':'40%', padding:'25px',justifyContent:'space-between' }}>
                    <span style={{ borderRadius: '80px', border: '1px solid #121212', color: 'black' }}>
                        <PercentIcon />
                    </span>
                    <span style={{  fontWeight: 'bold', fontSize: '20px', color: 'black' }}>
                        Apply Coupon
                    </span>
                </Button>
                <Button style={{ color: 'black', }}>
                    <ArrowForwardIosIcon />
                </Button>
            </Paper>
        </div>
    )
}