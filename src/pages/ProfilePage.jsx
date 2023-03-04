import Navigation from "../components/Navigation";
import { Box, Avatar } from "@mui/material";
import * as React from 'react';
import Skeleton from '@mui/material/Skeleton';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import { useAuth0 } from "@auth0/auth0-react";
import CircularProgress from '@mui/material/CircularProgress';

function ProfilePage() {
    const {user, isLoading, isAuthenticated} = useAuth0()
    
    return ( 
        
        <>
            <Navigation/>
            {!isLoading && <Box sx={{ flexGrow: 2, display:"flex", flexDirection: "row" }}>
            {isAuthenticated && 
            <Stack spacing={1} sx={{ mt: 9, mx: 5 }}>
               
                {user?.name&&
                <Skeleton variant="text" sx={{ fontSize: '2.5rem' }} >{user.name}</Skeleton>}
                
                {user?.picture && <Avatar alt="avatar" src="https://ichef.bbci.co.uk/news/549/cpsprodpb/1738F/production/_107891159_tv012402748.jpg" variant="circular" width={40} height={40}/>} 
                
                {user?.nickname && <Skeleton variant="rectangular" width={210} height={20}>Name: {user.nickname}</Skeleton>}
                {user?.email && <Skeleton variant="rounded" width={210} height={20}>Email: {user.email}</Skeleton>}
                {user?.updated_at && <Skeleton variant="rounded" width={210} height={40}>Date: {user.updated_at}</Skeleton>}
            </Stack>}
            {!isAuthenticated &&
             <Alert sx={{ mt: 9 }} severity="warning">LogIn please!</Alert>
            }
            </Box>}
            {isLoading && <CircularProgress sx={{ mt: 15, mx: 10 }} color="secondary" />}
        </>
        
     );
}

export default ProfilePage;