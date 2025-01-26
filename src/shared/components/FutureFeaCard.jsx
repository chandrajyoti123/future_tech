import React from 'react'
import { Card, CardContent, Typography } from '@mui/material'
import { BORDER_STYLE } from '../constants';

const FutureFeaCard = ({ heading, text }) => {
    return (
        <Card sx={{ p: "40px", border: BORDER_STYLE, borderRadius: "12px", bgcolor: "secondary.main" }}>
            <CardContent>
                <Typography variant='h4' mb={"10px"}>{heading}</Typography>
                <Typography variant='body2' color='text.secondary'>{text}</Typography>
            </CardContent>
        </Card>
    )
}

export default FutureFeaCard
