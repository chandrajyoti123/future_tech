import React from 'react'
import { Badge, Box, Card, CardContent, IconButton, Typography } from '@mui/material'
import CallMadeIcon from '@mui/icons-material/CallMade';
import { BORDER_STYLE } from '../constants';


const TechRevCard = ({ Heading, Text }) => {
    return (
        <Card sx={{ p: "40px", border:BORDER_STYLE, borderRadius: "12px", bgcolor: "secondary.main"}}>
            <CardContent>
                <Box sx={{ display: "flex", justifyContent: "space-between" , mb:"15px" }}>
                    <Typography variant='h5'>{Heading}</Typography>
                    <Badge
                        badgeContent={
                            <IconButton
                                sx={{
                                    p: "15px",
                                    backgroundColor: "warning.main",

                                }}
                            >
                                <CallMadeIcon />
                            </IconButton>
                        }
                        sx={{
                            "& .MuiBadge-badge": {
                                backgroundColor: "transparent",
                                padding: "0",
                            },
                        }}
                    />
                </Box>
                <Typography variant='body2' color='text.secondary'>{Text}</Typography>

            </CardContent>
        </Card>

    )
}

export default TechRevCard
