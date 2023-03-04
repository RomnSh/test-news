import { useDispatch } from 'react-redux';
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import { removeNews } from "../reducer/newsSliсe";
import Navigation from './Navigation';
import { useTranslation } from "react-i18next";



export default function SingleNewsPage({newsCard}) {
    const disppatch = useDispatch()
    const { t } = useTranslation();

  return (
    <>
    <Navigation/>
    <Grid display="flex" justifyContent="center" item xs={2} sm={3} md={3}>
        <Card m={15} className='newsCard' sx={{ maxWidth: 345, display:"flex", flexDirection:"column", justifyContent:"space-between" }} key={newsCard.publishedAt}>
            <CardMedia
                component="img"
                alt="green iguana"
                height="160"
                image= {newsCard.urlToImage}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                {newsCard.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                {newsCard.content}
                </Typography>
            </CardContent>
            <CardActions style={{display: "flex", justifyContent:"space-between"}}>
                <Button size="small" style={{color: "red"}} onClick={()=>disppatch(removeNews(newsCard.publishedAt))}>{t("NewsPage.removeBtn")}</Button>
                <Button size="small" href={newsCard.url} >{t("NewsPage.moreBtn")}</Button>
            </CardActions>
        </Card>
    </Grid>
    </>
    
  );
}