import { Box, styled, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import { useTranslation } from "react-i18next";
import heroImg from "../media/hero_illustration.png";
import CustomButton from "./CustomButton";
import Navigation from "./Navigation";
import i18next from "i18next";

const Hero = () => {
  const { t } = useTranslation();

  const CustomBox = styled(Box)(({ theme }) => ({
    display:"flex",
    justifyContent: "center",
    gap: theme.spacing(5),
    marginTop: theme.spacing(3),
    [theme.breakpoints.down("sm")]:{
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
    }
  }));
    
  const Title = styled(Typography)(({ theme }) => ({
    fontSize: '64px',
    color: "#000336",
    fontWeight: "bold",
    margin: theme.spacing(4, 0, 4, 0),
    [theme.breakpoints.down("sm")]:{
      fontSize: '40px',
    }
  }));

  return <Box sx={{backgroundColor: '#E6F0FF', minHeight: "80vh"}}>
    <Container> 
      <Navigation />
      <CustomBox sx={{ mt: 9 }}>
        <Box sx={{flex: "1"}}>
          <Typography variant= "body2" sx={{fontSize: "18", color: "#687690", fontWeight: "500", mt: 10, mb: 4}}>
            {t("Home.Hero.agency")}
          </Typography>
          <Title variant="h1" >
          {t("Home.Hero.slogan")}
          </Title>
          <Typography variant="body2" sx={{fontSize: "18px", coolor: '#5A6473', my: 4}}>
          {t("Home.Hero.description")}
          </Typography>
          <CustomButton backgroundColor="#0F1B4C" color="#fff" buttonText= {t("Home.Hero.btn")} heroBtn={true}/>
        </Box>
        <Box sx={{flex: "1.25"}}>
          <img src={heroImg} 
          alt="heroImg" 
          style={{maxWidth: "100%", marginBottom: "2rem"}}
          />

        </Box>
      </CustomBox>
    </Container>
  </Box>;
};

export default Hero;
