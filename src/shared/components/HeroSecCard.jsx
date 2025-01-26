import { Box, Typography } from '@mui/material'
import React from 'react'
import CallMadeIcon from '@mui/icons-material/CallMade';

const HeroSecCard = ({ img, heading, subheading, para }) => {
    return (
        <Box sx={{ py: "50px" }}>
            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "end", mb: "20px" }}>
                <Box>
                    <img src={img} width={"60px"} />
                    <Typography variant='h6' mt={"20px"}>{heading}</Typography>
                    <Typography variant='body1' color='text.secondary'>{subheading}</Typography>
                </Box>
                <Box sx={{ width: "50px", height: "50px", display: "flex", justifyContent: "center", alignItems: "center", borderRadius: "50%", bgcolor: "warning.main" }}>
                    <CallMadeIcon />
                </Box>
            </Box>
            <Typography variant='h6' color='text.secondary'>{para}</Typography>
        </Box>
    )
}

export default HeroSecCard
