import { Box,styled } from "@mui/material"
import {Link} from "react-scroll"

const Component=styled(Box)`
  display:flex;
  width:80%;
  margin:auto;
  margin-top:20px;
`
const Container=styled(Box)`
    margin-left:30px;
    width:50%;
    display: flex;
    justify-content:space-between;
`
const Navbar=()=>{

    return (
        <Component>
            <Container className="navbar">
                <Link offset={-100} spy={true} activeClass="active"  duration={1000}  smooth={true}  to="home" style={{fontSize:"30px",cursor:"pointer"}}>About</Link>
                <Link offset={-100} spy={true} activeClass="active"  duration={1000}  smooth={true}  to="instructor" style={{fontSize:"30px",cursor:"pointer"}}>Instructor</Link>
                <Link offset={-100} spy={true} activeClass="active"  duration={1000}  smooth={true}  to="reviews" style={{fontSize:"30px",cursor:"pointer"}}>Reviews</Link>
            </Container>
        </Component>
    )
}

export default Navbar;