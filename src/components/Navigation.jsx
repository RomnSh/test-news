import { AppBar, Container, Toolbar, Typography, Box, Button, Tooltip, IconButton } from "@mui/material";
import AccountCircle from '@mui/icons-material/AccountCircle';
import PersonPinIcon from '@mui/icons-material/PersonPin';
import { useTranslation } from "react-i18next";
import { useAuth0 } from "@auth0/auth0-react";
import LogoutIcon from '@mui/icons-material/Logout';
import "../i18next";

function Navigation() {
    const {loginWithRedirect, logout, isAuthenticated} = useAuth0()
    const { t, i18n } = useTranslation();
    const changeLanguage = (lang) => {
        i18n.changeLanguage(lang)
    }


    return ( 
       <AppBar position="fixed" sx={{backgroundColor: '#5A6473'}} >
            <Container maxWidth="lg" sx={{display: "flex", justifyContent: "space-between"}} >
                <Toolbar >
                <PersonPinIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        color={"whitesmoke"}
                        href="/"
                        sx={{
                        mr: 2,
                        display: { xs: 'none', md: 'flex' },
                        }}
                    >
                        {t("Navigation.logo")}
                        
                    </Typography>
                    <Box display={"flex"}>
                        <Button href="/" sx={{ my: 2, color: 'white', display: 'block' }}> {t("Navigation.home")} </Button>
                        <Button href="/news" sx={{ my: 2, color: 'white', display: 'block' }}> {t("Navigation.news")} </Button>
                        <Button href="/profile" sx={{ my: 2, color: 'white', display: 'block' }}> {t("Navigation.profile")} </Button>
                    </Box>
                    
 
                </Toolbar>
                <Box sx={{ flexGrow: 0, display:"flex", flexDirection: "row" }}>
                    <Tooltip title="Language" >
                        <Box  sx={{'& button': { mx: 1, my: 1 }, display:"flex", flexDirection: "column" }}>
                                <Button sx={{fontSize: "12px", minWidth: "22px", lineHeight: "1.50", p: 0, backgroundColor:"#0F1B4C"}} variant="contained" size="small" onClick={()=> changeLanguage("en")}>En</Button>
                                <Button sx={{fontSize: "12px", minWidth: "22px", lineHeight: "1.50", p: 0, backgroundColor:"#0F1B4C"}} variant="contained" size="small"onClick={()=> changeLanguage("ua")}>Ua</Button>
                        </Box>
                    </Tooltip>
                {!isAuthenticated &&<IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={()=> loginWithRedirect()}
                    color="inherit"
                     >
                    <Tooltip title="log: admin,   pas:  12345" >
                        <AccountCircle  />
                    </Tooltip>  
                </IconButton>}
                {isAuthenticated &&<IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={()=> logout()}
                    color="inherit"
                     >
                     <LogoutIcon  />
                </IconButton>}
                    
                </Box>
            </Container>
       </AppBar>
     );
}

export default Navigation;