import { Box, styled, Typography } from "@mui/material";
import React from "react";
import buyIcon from "../media/buy_icon.png";
import sellIcon from "../media/sell_icon.png";
import rentIcon from "../media/rent_icon.png";
import { useTranslation } from "react-i18next";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import CustomButton from "./CustomButton";

const Guide = () => {
  const { t } = useTranslation();
  const CustomBox = styled(Box)(({ theme }) => ({
    width: "30%",
     [theme.breakpoints.down("md")]:{
      width: "85%"
     }
  }));

  const GuidesBox = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "space-around",
    width: "70%",
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5),
    [theme.breakpoints.down("md")]:{
      width: "100%"
     },
     [theme.breakpoints.down("sm")]:{
      marginBottom: "0",
      flexDirection: 'column',
     } 
  }));

  const GuideBox = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    alignItems: 'center',
    maginTop: theme.spacing(2, 0, 2, 0),
  }));

  return <Box 
    sx={{
      display: "flex", 
      flexDirection: "column", 
      justifyContent: "center", 
      alignItems: "center"
      }}
      >
        <div style={{
          width: "5%",
          height: "5px",
          backgroundColor: "#000339",
          margin:"0 auto",

        }}>

        </div>
        <Typography variant="h3" sx= {{fontSize: "35px", fontWeight: 'bold', color: "#000339", my: 3}}>
          {t("Home.Guide.HowWorks")}
        </Typography>
        <CustomBox>
          <Typography variant="body2" sx={{fontSize: "16px", fontWeight: "500", color: "#5A6473", textAlign:"center",}}>
            {t("Home.Guide.Everything")}
          </Typography>
        </CustomBox>
    <GuidesBox>
      <GuideBox>
        <img src={buyIcon} alt='buyIcon' />
        <Typography variant="body2" sx={{fontWeight: "500", fontSize: '20px', color: "#3B3c45", my: 1}}>
          {t("Home.Guide.BuyingBtn")}
        </Typography>
        <Box sx={{cursor: "pointer", display: 'flex', justifyContent: 'center', alignItems: "center"}}>
          <Typography variant="body2" sx={{fontWeight: "bold", fontSize: "14px", color: '#0689FF'}}>
            {t("Home.Guide.HowBuy")}
          </Typography>
          <ArrowRightAltIcon style={{color: '#0689FF'}}/>
        </Box>
      </GuideBox>

      <GuideBox>
        <img src={rentIcon} alt='buyIcon' />
        <Typography variant="body2" sx={{fontWeight: "500", fontSize: '20px', color: "#3B3c45", my: 1}}>
          {t("Home.Guide.RentingBtn")}
        </Typography>
        <Box sx={{cursor: "pointer", display: 'flex', justifyContent: 'center', alignItems: "center"}}>
          <Typography variant="body2" sx={{fontWeight: "bold", fontSize: "14px", color: '#0689FF'}}>
            {t("Home.Guide.HowRent")}
          </Typography>
          <ArrowRightAltIcon style={{color: '#0689FF'}}/>
        </Box>
      </GuideBox>

      <GuideBox>
        <img src={sellIcon} alt='buyIcon' />
        <Typography variant="body2" sx={{fontWeight: "500", fontSize: '20px', color: "#3B3c45", my: 1}}>
          {t("Home.Guide.SellingBtn")}
        </Typography>
        <Box sx={{cursor: "pointer", display: 'flex', justifyContent: 'center', alignItems: "center"}}>
          <Typography variant="body2" sx={{fontWeight: "bold", fontSize: "14px", color: '#0689FF'}}>
            {t("Home.Guide.HowSell")}
          </Typography>
          <ArrowRightAltIcon style={{color: '#0689FF'}}/>
        </Box>
      </GuideBox>
    </GuidesBox>
    <CustomButton
    backgroundColor="#0F1B4C"
    color="#fff"
    buttonText= {t("Home.Guide.SeeFullGuides")}
    guideBtn={true}
    />
  </Box>;
};

export default Guide;