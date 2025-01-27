import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import { TextBadge } from './TechRevolution'
import CallMadeIcon from '@mui/icons-material/CallMade';
const DepthInformation = ({ subheading, heading, name, isButton }) => {
    return (
        <Box sx={{ paddingX: "162px", backgroundColor: "secondary.main", paddingY: "120px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <Box>
                <TextBadge text={subheading} />
                <Typography variant='h2' my={"20px"}>{heading}</Typography>
            </Box>
            {
                isButton && (
                    <Button variant='outlined' endIcon={<CallMadeIcon sx={{ color: "warning.main" }} />}> View All {name}</Button>
                )
            }

        </Box>
    )
}

export default DepthInformation
