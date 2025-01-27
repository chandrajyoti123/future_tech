import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Box, Typography, } from '@mui/material';
import TechHubCom from '../../shared/components/TechHubCom';
import { BORDER_STYLE } from '../../shared/constants';
import { Constants } from '../../shared/constants';

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const TechHubs = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const data=[
    {
      img: Constants.customImages.Img2,
      name:"John Techson",
      address:"Quantum Computing",
      date:"October 15, 2023",
      blogname:"The Quantum Leap in Computing",
      blogtext:" Explore the revolution in quantum computing, its applications, and its potential impact on various industries.",
      islike:true,
      likecount:"24.5K",
      commentcount:50,
      sharecount:20
    },
    {
      img: Constants.customImages.Img3,
      name:"Sarah Ethicist",
      address:"AI Ethics",
      date:"November 5, 2023",
      blogname:"The Ethical Dilemmas of AI",
      blogtext:"A deep dive into ethical challenges posed by AI, including bias, privacy, and transparency.",
      islike:false,
      likecount:"32k",
      commentcount:72,
      sharecount:18
    },
    {
      img: Constants.customImages.Img4,
      name:"Astronomer X",
      address:"Space Exploration",
      date:"December 10, 2023",
      blogname:"The Mars Colonization Challenge",
      blogtext:"Exploring the technical and logistical challenges of human colonization on Mars.",
      islike:false,
      likecount:"20k",
      commentcount:31,
      sharecount:12
    },
  ]

  return (
    <Box sx={{bgcolor: 'primary.main'}}>
      <Box sx={{px: '162px',py:"50px" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="auto"
          sx={{
            display: 'flex',
            justifyContent: 'center',
            gap: '16px',
          }}
        >
          {["All","Quantum Computin" ,"AI Ethics" , "Space Exploration" , "Biotechnology" , "Renewable Energy"].map((item,index) => (
            <Tab
              key={index}
              {...a11yProps(index)}
              sx={{
                width: '16%',
                mr:"10px",
                border: BORDER_STYLE,
                py: '20px',
                px: '24px',
                bgcolor: value === index ? 'secondary.main' : 'primary.main',
                borderRadius: '10px',
              }}
              label={
                <Typography
                  variant="body2"
                  sx={{
                    color: value === index ? 'text.primary' : 'text.secondary',
                  }}
                >
                 {item}
                </Typography>
              }
            />
          ))}
        </Tabs>
      </Box>
      {[...Array(6)].map((_, index) => (
        <CustomTabPanel key={index} value={value} index={index}>
          {index === 0 ? (
           data.map((item,index)=>(
         <TechHubCom img={item.img} name={item.name} address={item.address} date={item.date} blogname={item.blogname} blogtext={item.blogtext} likecount={item.likecount} commentcount={item.commentcount} sharecount={item.sharecount} islike={item.islike} key={index}/>
           ))
          ) : (
            <Typography>{`Item ${index + 1} Content`}</Typography>
          )}
        </CustomTabPanel>
      ))}
    </Box>
  );
};

export default TechHubs;
