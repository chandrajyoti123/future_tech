import { colors } from "@mui/material";
import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
	palette: {
		mode: "light",
		primary: {
			main: "rgba(20, 20, 20, 1)",
			contrastText: "rgba(126, 126, 129, 1)",
			light: "rgba(51, 51, 51, 1)",
		},
		secondary: {
			main: "rgba(26, 26, 26, 1)",
			contrastText: "#fff",
			light: "#CFF1DE",
			dark: "#000",
		},
		warning: {
			main: "rgba(255, 209, 26, 1)",
		},
		grey: {
			"100": "#d1d1d1",
			"200": "#c1c1c1",
			"300": "#979797",
			"400": "#7c828a",
			"500": "#7D8398",
		},
		text: {
			primary: "rgba(255, 255, 255, 1)",
			secondary: "rgba(102, 102, 102, 1)",
		    
			
		},
		background: {
			paper: "#fff",
			default: "#fafafa",
		},
		action: {
			active: "#979797",
			activatedOpacity: 0.1,
			selected: "#C0EDED",
		},
	},
	typography: {
		fontFamily: 'Inter, sans-serif',
		fontSize: 14,
		h1: {
			fontSize: "70px",
			fontWeight: "500",
			lineHeight: "84px",
			letterSpacing:"-3%",
	        fontFamily: "kumbh Sans"
		},
		h2: {
			fontSize: "58px",
			fontWeight: "500",
			lineHeight: "75px",
			letterSpacing:"-3%",
		    fontFamily: "kumbh Sans" 
		},
		h3: {
			fontSize: "40px",
			fontWeight: "600",
			lineHeight: "60px",
			letterSpacing:"-3%",
		    fontFamily: "kumbh Sans" 

		},
		h4: {
			fontSize: "26px",
			fontWeight: "600",
			lineHeight: "39px",
			letterSpacing:"-3%",
		    fontFamily: "kumbh Sans" 
		},
		h5: {
			fontSize: "22px",
			fontWeight: "600",
			lineHeight: "33px",
			letterSpacing:"-3%",
		    fontFamily: "kumbh Sans" 
		},
		h6: {
			fontSize: "20px",
			fontWeight: "500",
			lineHeight: "30px",
			letterSpacing:"-3%",
		    fontFamily: "kumbh Sans" 

		},
		body1: {
			fontSize: "20px",
			fontWeight: "500",
			lineHeight: "26px",
			letterSpacing:"-3%",
		    fontFamily: "Inter" 


		},
		body2: {
			fontSize: "18px",
			fontWeight: "400",
			lineHeight: "27px",
			letterSpacing:"-3%",
		    fontFamily: "kumbh Sans" 
		},
		button: {
			fontSize: "1.2rem",
			fontWeight: "500",
			lineHeight: "1.15rem",
			textTransform: "capitalize",
			letterspacing: "2rem",
		},
	},
	components: {
		MuiTypography: {
			defaultProps: {
				color: "text.primary",
				fontSize: "body1",
				textAlign: "start"
				// textTransform: "capitalize",
			},
		},
		MuiAppBar: {
			styleOverrides: {
				colorInherit: {
					// backgroundImage: "linear-gradient(180deg, #8CEEED, #FBFEFD)",
					backgroundColor: "rgba(102, 209, 209, 0.1)",
					borderBottom: "2px solid #eceefe;",
					color: "#fff",
				},
			},
			defaultProps: {
				elevation: 0,
				color: "inherit",
			},
		},
		MuiButton: {
			defaultProps: {
				sx: {
					
					"&.MuiButton-outlined": {
						px:"16px",
						py:"10px",
						backgroundColor: "rgba(20, 20, 20, 1)", // Update to your desired background color
						color: "text.secondary",
						borderRadius:"8px",
						letterSpacing: "0.2rem",
						borderColor:"rgba(38, 38, 38, 1)",
						borderWidth:"1px",
						borderStyle:"solid",
					
					
					},
					// contained variant
					"&.MuiButton-contained": {
						width:"100%",
						px:"18px",
						py:"24px",
						backgroundColor: "secondary.main", // Update to your desired background color
						color: "text.secondary",
						fontSize:"18px",
						lineHeight:"27px",
						fontWeight:400,
						borderRadius:"8px",
						letterSpacing: "0.2rem",
						borderColor:"rgba(38, 38, 38, 1)",
						borderWidth:"1px",
						borderStyle:"solid",
					},
					"&.MuiButton-text": {
						padding: "5px 0px",
					},
				},
			},
		},
		MuiTextField: {
			styleOverrides: {
				root: {
					'& .MuiOutlinedInput-root': {
						'& fieldset': {
							border: 'none',
						},
						'& input': {
							fontSize: '18px',
							color: "gray",
							textAlign: "center",
							fontWeight: 500
						},
					},
				},
			},
			defaultProps: {
				sx: {
					'& .MuiOutlinedInput-root': {
						'& fieldset': {
							border: 'none', // Additional styles for fieldset
							borderColor: 'transparent',
						},
					},
				},
			},
		},

		MuiButtonGroup: {
			defaultProps: {
				size: "small",
			},
		},
		MuiList: {
			defaultProps: {
				dense: true,
			},
		},
		MuiList: {
			defaultProps: {
				dense: true,
			},
		},
		MuiMenu: {
			defaultProps: {
				elevation: 0,
			},
			styleOverrides: {
				paper: {
					backgroundColor: "rgb(247, 247, 247)",
					borderRadius: "0px",
					padding: "20px 100px 20px 10px",
				},
			},
		},
		MuiMenuItem: {
			defaultProps: {
				dense: true,
			},
			styleOverrides: {
				root: {
					'&:first-of-type': {
						backgroundColor: "rgb(247, 247, 247)",  // Apply the background color to the first item
					},
					"&.Mui-selected": {
						backgroundColor: "transparent",
						color: "black",

					},
					"&:hover": {
						backgroundColor: "transparent", // Remove background color on hover
						color: "rgba(193, 229, 240, 0.5)", // Update text color on hover
					},
					fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
					fontWeight: 400,
					fontSize: '1rem',
					color: "black",
				},
			},
		},

		MuiListItemText: {
			defaultProps: {
				primaryTypographyProps: {
					// variant: "h6",
					fontSize: "0.8rem",
					fontWeight: "bold",
					color: "text.primary",
					textTransform: "capitalize",
					// lineHeight: 1,
				},
				secondaryTypographyProps: {
					// variant: "body2",
					color: "text.secondary",
					// lineHeight: 1,
				},
			},
		},
		MuiToggleButton: {
			defaultProps: {
				sx: {
					"&.Mui-selected": {
						color: "#3AB0C0",
						backgroundColor: "#D6F0F3",
					},
				},
			},
		},
	},
})