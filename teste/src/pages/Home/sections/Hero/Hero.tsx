import { Box, styled } from "@mui/material"
import Avatar from "../../../../assets/images/avatar.jpg"
import Grid from "@mui/material/Grid"
import { Container } from "@mui/material"
import {Typography} from "@mui/material"
import {Button} from "@mui/material"
import DownloadIcon from '@mui/icons-material/Download';
import EmailIcon from '@mui/icons-material/Email';
import StyledButton from "../../../../components/StyledButton/StyledButton"
import { AnimatedBackground } from "../../../../components/AnimatedBackground/AnimatedBackground"



const Hero = () =>{
  
    const StyledHero = styled("div")(()=>({
        backgroundColor :"black",
        color:"white",
        height:"100vh",
        display:"flex",
        alignItems:"center",


    }))
    const StyledImg = styled("img")(()=>({
       width:"50%" ,
       borderRadius:"100% ",

    }))

    return (
      <>
    
  <StyledHero>
        <Container>
        <Grid container spacing={2}>
  <Grid item xs={12} md={4}>
    <Box position ="relative">
      <Box position="absolute" width={"180%"} top={-100} right ={0}>
       <AnimatedBackground/>

      </Box>
      <Box position="absolute" textAlign="center">

          <StyledImg src = {Avatar} />
      </Box>
    </Box>


   
   
  </Grid>
  <Grid item xs={12} md={8}>
    <Typography variant="h5" textAlign ="center">Gustavo Dmutti Melleu</Typography>
    <Typography variant="h1" textAlign ="center">Front-end dev</Typography>

       <Grid container display="flex" justifyContent="center" spacing ={3}>
        <Grid item xs={12} md = {4} display="flex" justifyContent="center" > 
        
        <StyledButton>
        <DownloadIcon/>
        download
        </StyledButton>
  

        </Grid>
         <Grid item xs = {12} md={4} display="flex" justifyContent="center" >
       
        <StyledButton>
        <EmailIcon/>
        email
        </StyledButton>

        </Grid>
    </Grid>
    

    
  </Grid>
        
</Grid>
        </Container>


 
  </StyledHero>
    
      </>
    )
  }
  
  export default Hero
  




