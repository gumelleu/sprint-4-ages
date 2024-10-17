import {styled} from '@mui/material'
import {ReactNode} from 'react'

interface StyledButtonProps{
    children : ReactNode
}

const StyledButton :React.FC<StyledButtonProps>= ({children}) =>{
  

    const StyledButton = styled("button")(()=>({
     backgroundColor:"transparent",
     borderRadius: "15px",
     padding :"5px 15px",
     width: "100%",
     border:"1px solid white",
     color:"white",
     display :"inline-flex",
     alignItems:"center",
     justifyContent:"center",
     gap :"10px",
     '&:hover': {
        backgroundColor:"red",
     }
 
     }))
    return (
      <>
  
        <StyledButton>{children}</StyledButton>
    
      </>
    )
  }
  
  export default StyledButton
  