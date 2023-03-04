import {  styled, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";
import homeIllustration from "../media/illustration.png";
import CustomButton from "./CustomButton";
import { useTranslation } from "react-i18next";

const GetStarted = () => {
  const { t } = useTranslation();
  const CustomContainer = styled(Container)(({ theme }) => ({
    backgroundColor: "#17275F",
    height: "416px",
    borderRadius: "15px",
    display: 'flex',
    justifyContent: "space-between",
    alignItems: "center",
    [theme.breakpoints.down("md")]:{
      height: "auto",
      flexDirection: "column",
      alignItems: "center",
      padding: theme.spacing(3, 3, 0, 3),
      width: "90%"
    }
  }));

  const CustomBox = styled(Box)(({ theme }) => ({
    padding: theme.spacing(10, 0, 10, 0),
    margin: theme.spacing(0, 2, 0, 2),
    [theme.breakpoints.down("md")]:{
     padding: "0"
    }
  }));

  return <CustomBox>
    <CustomContainer>
      <Box>
        <Typography sx={{fontSize: "35px", color: "white", fontWeight: "700"}}>
          {t("Home.GetStarted.title")}
        </Typography>
        <Typography sx={{fontSize: "16px", marginBottom:"15px", color: "white", fontWeight: "500"}}>
          {t("Home.GetStarted.text")}
        </Typography>
        <CustomButton 
          backgroundColor="#fff" 
          color="#17275F" 
          buttonText={t("Home.GetStarted.btn")} 
          getStartedBtn={true}
          />
      </Box>
      <img 
        src={homeIllustration} 
        alt="Illustration" 
        style={{maxWidth: "100%"}}
        />
    </CustomContainer>
  </CustomBox>
};

export default GetStarted;
