import React from 'react'
import { Box, Grid2, Typography } from '@mui/material'
import Rotate from './../../assets/img/rotate.png'
import TechRevCard from '../../shared/components/TechRevCard'
import { BORDER_STYLE } from '../../shared/constants'
const TechRevolution = () => {
    const data = [
        {
            heading: "Resource Access",
            text: "Visitors can access a wide range of resources, including ebooks, whitepapers, reports."
        },
        {
            heading: "Community Forum",
            text: "Join our active community forum to discuss industry trends, share insights, and collaborate with peers."
        },
        {
            heading: "Tech Events",
            text: "Stay updated on upcoming tech events, webinars, and conferences to enhance your knowledge."
        },
    ]
    return (
        <Box sx={{ paddingX: "162px", backgroundColor: "secondary.main", paddingY: "120px" }}>
            <Grid2 container mb={"80px"}>
                <Grid2 size={2} >
                    <img src={Rotate} width={"160px"} />
                </Grid2>
                <Grid2 size={10}>
                    <Typography variant='h6' sx={{ bgcolor: "primary.light", px: "10px", py: "6px", borderRadius: "4px", display: "inline" }}>Learn, Connect, and Innovate</Typography>
                    <Typography variant='h2' color='text.primary' my={"10px"}>Be Part of the Future Tech Revolution</Typography>
                    <Typography variant='body2' color='text.secondary'>Immerse yourself in the world of future technology. Explore our comprehensive resources, connect with fellow tech enthusiasts, and drive innovation in the industry. Join a dynamic community of forward-thinkers.</Typography>

                </Grid2>

            </Grid2>
            <Grid2 container sx={{ border: BORDER_STYLE, bgcolor: 'primary.main', p: "20px", borderRadius: "12px" }} spacing={"20px"}>
                {
                    data.map((item, index) => (
                        <Grid2 size={4} display={"flex"} alignItems={"stretch"}>
                            <TechRevCard Heading={item.heading} Text={item.text} key={index} />
                        </Grid2>
                    ))
                }
            </Grid2>
        </Box>
    )
}

export default TechRevolution
