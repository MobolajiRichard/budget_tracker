import React, {useState} from 'react'
import styled from '@emotion/styled'
import { useDispatch } from 'react-redux/es/exports'
import {useNavigate} from 'react-router-dom'
import { addUser } from '../redux/userSlice'
import {
  GitHub,
  Twitter,
  LinkedIn,
} from "@mui/icons-material";
import { IconButton } from "@mui/material";



const Container = styled.div`
background-color:white;
height:97.6vh;
margin-top:0;
display:flex;
align-items:center;
`
const Wrapper = styled.div`
display:flex;
flex-direction:column;
align-items:center;
justify-content:space-around;
flex:0.3;
height:100%;
width:100%;
padding:0 2%;
@media (max-width: 920px) {
  flex:1;
}
`
const ImageCont = styled.div`
display:flex;
align-items:center;
flex:0.7;
@media (max-width: 920px) {
  display: none;
  flex:0;
}

`
const Image = styled.img`
height:90vh;
width:90%
`
const Input = styled.input`
border:1px solid brown;
outline:none;
text-indent:5px;
width:15em;
height:2em;
`
const Button = styled.button`
background-color:brown;
color:white;
height:2.4em;
width:4em;
border:none;
cursor:pointer;
 :hover:{
  background-color:white;
}
`
const Login = styled.div`
display:flex;
flex-direction:column;
align-items:center;
`
const Footer = styled.footer``

const Logo = styled.span`
font-family:cursive;
color:brown;
font-weight:800;
`
const Usage = styled.div`
display:flex;
flex-direction:column;
align-items:center;
font-family:cursive;
border:1px solid brown;
padding:0 2%;
`

function Homepage() {
  const [user, setUser] = useState('')
  const [error, setError] = useState(false)
  const dispatch = useDispatch()

  const navigate = useNavigate()

  const login = (e)=>{
    e.preventDefault()
    if(user){
      dispatch(addUser(user))
      setUser('')
      navigate('/')
    }else{
      setError(true)
    }
    
  }

  const onChanged = (e) => {
    setError(false)
    setUser(e.target.value)
  }
  return (
    <Container>
      <Wrapper>
      <p>Welcome to <Logo>Mobolaji</Logo> voiced budget tracker</p>
      <Login>
      <p>
        Please enter a name to continue
      </p>
      <form onSubmit={login}>
        <Input placeholder='name' value={user} onChange={onChanged} type='text'/>
        <Button type='submit'>Login</Button>
      </form>
      {error && <p style={{color:'red'}}>please enter a valid name</p>}
      </Login>
      <Usage>
        <p style={{color:'brown' , fontWeight:'800'}}>How to use</p>
        <ul>
          <li>There are two main categories Income and Expense</li>
          <li><Logo>Income</Logo>:  Business,
    Investments,
    Extra income,
    Deposits,
    Lottery,
    Gifts,
    Salary,
    Savings,
    Rental income</li>
    <li><Logo>Expense</Logo>:  Bills,
    Car,
    Clothes,
    Travel,
    Food,
    Shopping,
    House,
    Entertainment,
    Phone,
    Pets,
    Other</li>
    <li><Logo>Hold the microphone and speak</Logo>: <Logo>'Add'</Logo> <Logo>'Income or Expenses'</Logo> for <Logo>'Amount(Naira)'</Logo> in '<Logo>Category</Logo> (any of the categories above based on either income or expenses )' for <Logo>'Date'</Logo> then release the microphone</li>
        <li>E.g, Add Income for 1000Naira in category Salary for tomorrow</li>
        <li>Or Add Expense for 2000Naira in category pets for today</li>
        </ul>
      </Usage>
      <Footer>
      <a href='https://github.com/MobolajiRichard'>
        <IconButton sx={{color:'brown'}}>
            <GitHub />
          </IconButton>
        </a>
  
        <a href="https://www.twitter.com/RichardMBJ23">
          <IconButton sx={{color:'brown'}}>
            <Twitter />
          </IconButton>
        </a>
  
        <a href='https://www.linkedin.com/in/mobolaji-richard-oginni-7314b2230/'>
        <IconButton sx={{color:'brown'}}>
          <LinkedIn />
        </IconButton>
        </a>
      </Footer>   
      </Wrapper>
      <ImageCont>
          <Image loading='lazy' src='./6573.jpg'/>
      </ImageCont> 
      
    </Container>
  )
}

export default Homepage