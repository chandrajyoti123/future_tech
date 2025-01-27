import { Box, Button, Grid2, Typography } from '@mui/material'
import React from 'react'
import { Constants } from '../../shared/constants'
import { BORDER_STYLE } from '../../shared/constants'
import HeroSecCard from '../../shared/components/HeroSecCard'
import CallMadeIcon from '@mui/icons-material/CallMade';
import Navbar from '../../layout/Navbar'


const HeroSection = () => {
    const data = [
        {
            img: Constants.customImages.HeroIcon1,
            heading: "Latest News Updates",
            suhead: "Stay Current",
            para: "Over 1,000 articles published monthly"
        },
        {
            img: Constants.customImages.HeroIcon2,
            heading: "Expert Contributors",
            suhead: "Trusted Insights",
            para: "50+ renowned AI experts on our team"
        },
        {
            img: Constants.customImages.HeroIcon3,
            heading: "Global Readership",
            suhead: "Worldwide Impact",
            para: "2 million monthly readers"
        },
    ]

    const number = [
        {
            number: "300",
            name: "Resources available"
        },
        {
            number: "12k",
            name: "Total Downloads"
        },
        {
            number: "10k",
            name: "Active Users"
        },
    ]

    const paddingLstSec = (index) => {
        if (index == 0) {
            return "0 50px 0  0"
        }
        if (index == 1) {
            return " 0 50px"
        }
        if (index == 2) {
            return " 0 0 0 50px"
        }

    }
    const paddingFirSec = (index) => {
        if (index == 0) {
            return "0 30px 0  0"
        }
        if (index == 1) {
            return " 0 30px"
        }
        if (index == 2) {
            return " 0 0 0 30px"
        }

    }
    return (
        <Box bgcolor={"primary.main"}>
            <Box>
                <Typography variant='body2' color='text.secondary' py="20px" textAlign={"center"}>Subscribe to our Newsletter For New & latest Blogs and Resources</Typography>
                <Navbar />
            </Box>
            <Grid2 container>
                <Grid2 size={7} borderRight={BORDER_STYLE}>
                    <Box pl={"162px"} pr={"50px"} py={"100px"}>
                        <Typography variant='h4' color='text.secondary'>Your Journey to Tomorrow Begins Here</Typography>
                        <Typography variant='h1'>Explore the Frontiers of Artificial Intelligence</Typography>
                        <Typography variant='body2' color='text.secondary'>Welcome to the epicenter of AI innovation. FutureTech AI News is your passport to a world where machines think, learn, and reshape the future. Join us on this visionary expedition into the heart of AI.</Typography>
                    </Box>
                    <Grid2 container pl={"162px"} borderTop={BORDER_STYLE}>
                        {
                            number.map((item, index) => (
                                <Grid2 size={4} sx={{ p: paddingFirSec(index), borderRight: index == 2 ? "none" : BORDER_STYLE }} key={index}>
                                    <Box sx={{ py: "50px" }}>
                                        <Typography variant="h4">
                                            {item.number}
                                            <Box
                                                component="span"
                                                sx={{ color: 'warning.main', fontWeight: 'inherit' ,ml:1 }}
                                            >
                                                +
                                            </Box>
                                        </Typography>
                                        <Typography variant='body2' color='text.secondary'>{item.name}</Typography>
                                    </Box>

                                </Grid2>
                            ))
                        }

                    </Grid2>
                </Grid2>
                <Grid2
                    size={5}
                    sx={{
                        backgroundImage: 'url("./src/assets/img/Layer.png")',
                        backgroundSize: 'contain',
                        backgroundPosition: 'start',
                        backgroundRepeat: 'no-repeat',
                        pr: "162px",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "end"

                    }}
                >
                    <Box sx={{ pl: "80px", pb: "80px" }}>
                        <Box
                            sx={{
                                px: "20px",
                                py: "5px",
                                bgcolor: "primary.main",
                                border: BORDER_STYLE,
                                borderRadius: "50px",
                                display: "inline-flex",
                                position: "relative",
                                mb: "20px"
                            }}
                        >
                            {[
                                Constants.customImages.Img2,
                                Constants.customImages.Img3,
                                Constants.customImages.Img4,
                                Constants.customImages.Img5,
                            ].map((item, index) => (
                                <Box
                                    key={index}
                                    sx={{
                                        position: "relative",
                                        marginLeft: index === 0 ? 0 : "-10px", // Collapse by 20px for subsequent images
                                    }}
                                >
                                    <img
                                        src={item}
                                        alt={`Image ${index}`}
                                        style={{
                                            width: "50px",
                                            height: "50px",
                                            borderRadius: "50%",
                                            border: "2px solid rgba(102, 102, 102, 1)",
                                        }}
                                    />
                                </Box>
                            ))}
                        </Box>
                        <Typography variant='h4'>Explore 1000+ resources</Typography>
                        <Typography variant='body2' color='text.secondary' sx={{ mt: 1, mb: 3 }}>Over 1,000 articles on emerging tech trends and breakthroughs.</Typography>
                        <Button variant='outlined' endIcon={<CallMadeIcon sx={{ color: "warning.main" }} />}>Explore Resources</Button>
                    </Box>

                </Grid2>
            </Grid2>
            <Grid2 container sx={{ borderTop: BORDER_STYLE, px: "162px" }}>
                {
                    data.map((item, index) => (
                        <Grid2 size={4} sx={{ p: paddingLstSec(index), borderRight: index == 2 ? "none" : BORDER_STYLE }} key={index}>
                            <HeroSecCard img={item.img} heading={item.heading} subheading={item.suhead} para={item.para} />
                        </Grid2>
                    ))
                }
            </Grid2>
        </Box>
    )
}

export default HeroSection
