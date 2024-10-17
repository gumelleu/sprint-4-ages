import { AppBar ,MenuItem} from "@mui/material"
const NavBar = () =>{
  
    return (
      <>
   
        <AppBar position="absolute">
            <MenuItem>About</MenuItem>
            <MenuItem>Skills</MenuItem>
            <MenuItem>Projects</MenuItem>
        </AppBar>
      </>
    )
  }
  
  export default NavBar
  