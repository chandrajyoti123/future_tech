
import { Box, Button, Card, CardContent, Grid2, Typography } from '@mui/material'
import React from 'react'
import { Constants } from '../../shared/constants';
import CallMadeIcon from '@mui/icons-material/CallMade';
import { BORDER_STYLE } from '../../shared/constants';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';

const CardContainer = ({ children, full }) => {
    return (
        <Card sx={{ p: "30px", border: BORDER_STYLE, borderRadius: "13px", bgcolor: "secondary.main", width: full }}>
            <CardContent>
                {children}
            </CardContent>
        </Card>
    )
}

const TechResources = () => {
    const data = [
        {
            icon: Constants.customImages.ResourceIcon1,
            name: "Ebooks",
            text: "Explore our collection of ebooks covering a wide spectrum of future technology topics.",
            useravatars: [Constants.customImages.Img1, Constants.customImages.Img2, Constants.customImages.Img3, Constants.customImages.Img4],
            heading: "Variety of Topics",
            para: "Topics include AI in education (25%), renewable energy (20%), healthcare (15%), space exploration (25%), and biotechnology (15%).",
            picture: Constants.customImages.ResourcePicture1,
            count: 100,
            authorexpirties: "Ebooks are authored by renowned experts with an average of 15 years of experience"

        },
        {
            icon: Constants.customImages.ResourceIcon2,
            name: "Whitepapers",
            text: "Dive into comprehensive reports and analyses with our collection of whitepapers.",
            useravatars: [Constants.customImages.Img4, Constants.customImages.Img5, Constants.customImages.Img6, Constants.customImages.Img1],
            heading: "Topics Coverage",
            para: "Whitepapers cover quantum computing (20%), AI ethics (15%), space mining prospects (20%), AI in healthcare (15%), and renewable energy strategies (30%).",
            picture: Constants.customImages.ResourcePicture2,
            count: 50,
            authorexpirties: "Whitepapers are authored by subject matter experts with an average of 20 years of experience."

        },
    ]
    return (
        <Box sx={{ bgcolor: 'primary.main' }}>
            {
                data.map((item, index) => (
                    <Grid2 container sx={{ px: "162px", borderBottom: index == 0 ? BORDER_STYLE : "none" }} key={index} >
                        <Grid2 size={4} sx={{ display: "flex", justifyContent: "center", alignItems: "start", flexDirection: "column", pr: '80px', }}>
                            <img src={item.icon} width={"80px"} />
                            <Typography variant='h3' mt={"30px"}>{item.name}</Typography>
                            <Typography variant='h6' color='text.secondary'>{item.text}</Typography>
                            <Box sx={{ my: "30px", width: "100%" }}>
                                <Button variant='contained' endIcon={<CallMadeIcon sx={{ color: "warning.main" }} />}> DownLoad {name} Now</Button>
                            </Box>
                            <CardContainer>
                                <Box sx={{ display: "flex", gap: "20px" }}>
                                    <Box>
                                        <Typography variant='body2' color='text.secondary'>Downloaded By</Typography>
                                        <Typography variant='h5'>10+ User</Typography>
                                    </Box>
                                    <Box
                                        sx={{
                                            p: "10px",
                                            bgcolor: "primary.main",
                                            // border: BORDER_STYLE,
                                            borderRadius: "12px",
                                            display: "inline-flex",
                                            position: "relative",
                                        }}
                                    >
                                        {item.useravatars.map((item, index) => (
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
                                </Box>
                            </CardContainer>

                        </Grid2>
                        <Grid2 size={8} sx={{ pl: '80px', py: "80px", borderLeft: BORDER_STYLE }}>
                            <Box sx={{ display: "flex", justifyContent: "space-between", mb: "20px" }}>
                                <Typography variant='h4' minWidth={"30%"}>{item.heading}</Typography>
                                <Typography variant='body2' color='text.secondary'>{item.para}</Typography>
                            </Box>
                            <img src={item.picture} width={"100%"} height={"340px"} style={{ borderRadius: "12px" }} />
                            <Grid2 container spacing={"20px"} mt={"20px"}>
                                <Grid2 size={4} display={"flex"} alignItems={"stretch"}>
                                    <CardContainer full={"100%"}>
                                        <Typography variant='body2' color='text.secondary'>Total {item.name}</Typography>
                                        <Typography variant='h6'> over {item.count} {item.name}</Typography>
                                    </CardContainer>
                                </Grid2>
                                <Grid2 size={8} display={"flex"} alignItems={"stretch"}>
                                    <CardContainer full={"100%"}>
                                        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                            <Box>
                                                <Typography variant='body2' color='text.secondary'>Total {item.name}</Typography>
                                                <Typography variant='h6'> over {item.count} {item.name}</Typography>
                                            </Box>
                                            <Button variant='outlined' endIcon={<VisibilityOutlinedIcon sx={{ color: "warning.main" }} />}>Preview</Button>

                                        </Box>
                                    </CardContainer>

                                </Grid2>
                                <CardContainer full={"100%"}>
                                    <Typography variant='body2' color='text.secondary'>Average Author Expertise</Typography>
                                    <Typography variant='h6'> {item.authorexpirties}</Typography>
                                </CardContainer>

                            </Grid2>

                        </Grid2>
                    </Grid2>
                ))
            }

        </Box>
    )
}

export default TechResources
