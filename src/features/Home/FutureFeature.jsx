import React from 'react'
import { Constants } from '../../shared/constants'
import { Grid2, Typography, Box } from '@mui/material'
import FutureFeaCard from '../../shared/components/FutureFeaCard'
import { BORDER_STYLE } from '../../shared/constants'

const FutureFeature = () => {
    const data = [
        {
            icon: Constants.customImages.FeaIcon1,
            name: "Future Technology Blog",
            text: "Stay informed with our blog section dedicated to future technology.",
            Features: [
                { heading: "Quantity", para: "Over 1,000 articles on emerging tech trends and breakthroughs." },
                { heading: "Variety", para: "Articles cover fields like AI, robotics, biotechnology, and more." },
                { heading: "Frequency", para: "Fresh content added daily to keep you up to date." },
                { heading: "Authoritative", para: "Written by our team of tech experts and industry professionals." },
            ]

        },
        {
            icon: Constants.customImages.FeaIcon2,
            name: "Research Insights Blogs",
            text: "Dive deep into future technology concepts with our research section.",
            Features: [
                { heading: "Depth", para: "500+ research articles for in-depth understanding." },
                { heading: "Graphics", para: "Visual aids and infographics to enhance comprehension." },
                { heading: "Trends", para: "Explore emerging trends in future technology research." },
                { heading: "Contributors", para: "Contributions from tech researchers and academics." },
            ]

        },
    ]
    return (
        <Box sx={{ bgcolor: "primary.main" }}>
            {
                data.map((item, index) => (
                    <Grid2 container sx={{ px: "162px", borderBottom: index == 0 ? BORDER_STYLE : "none" }} key={index} >
                        <Grid2 size={4} sx={{ display: "flex", justifyContent: "center", alignItems: "start", flexDirection: "column" }}>
                            <img src={item.icon} width={"90px"} />
                            <Typography variant='h3' mt={"40px"}>{item.name}</Typography>
                            <Typography variant='body2' color='text.secondary'>{item.text}</Typography>

                        </Grid2>
                        <Grid2 size={8} sx={{ pl: '80px', py: "80px", borderLeft: BORDER_STYLE }}>
                            <Grid2 container spacing={"20px"}>
                                {
                                    item.Features.map((item, index) => (
                                        <Grid2 size={6} display={"flex"} alignItems={"stretch"} key={index}>
                                            <FutureFeaCard heading={item.heading} text={item.para} />
                                        </Grid2>
                                    ))
                                }
                            </Grid2>
                        </Grid2>
                    </Grid2>
                ))
            }


        </Box>
    )
}

export default FutureFeature
