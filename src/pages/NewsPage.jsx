import { useSelector, useDispatch } from "react-redux";
import { Grid, Button, CircularProgress, Box, Alert } from "@mui/material";
import '../style/news.css'
import SingleNewsPage from "../components/NewsPage";
import {  addNews } from "../reducer/newsSliсe";




function NewsPage() {
    const disppatch = useDispatch()

    const numberСards = useSelector(
      state => state.news.numberСards)
    
    const news = useSelector(
        state => state.news.news.slice(0, numberСards)
    )
   
    const {status, error} = useSelector(state => state.news)
    
    return ( 
      <>
        {status ==='resolved' && <Box >

        <Grid className="containerNews"   container spacing={{ xs: 2, md: 2,t: '23rem'}} columns={{ xs: 4, sm: 8, md: 12 }} >
            
            {news.map((newsCard) => (
              <SingleNewsPage newsCard={newsCard} />
            ))}
            
          </Grid>
          
          <Box m={4} display="flex" justifyContent="center">
              <Button   className="add_btn" variant="contained" onClick={()=>disppatch(addNews(numberСards))}>ADD newS</Button>
          </Box>
          
        </Box>}  
        
        {status === 'loading' && 
        <Box m={10} pt={10} display="flex" justifyContent="center"> 
          <CircularProgress color="success" /> 
        </Box>}
        
        {error &&
          <Box m={6} pt={6} display="flex" justifyContent="center"> 
            <Alert severity="error">This is an error alert — {error}!</Alert>
          </Box> }
        
      </>
       
     );
}

export default NewsPage;