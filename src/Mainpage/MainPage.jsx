import React from 'react'
import Details from '../Componenents/Details/Details';
import Main from '../Componenents/Main/Main';
import Header from '../Componenents/Main/Header';
import {PushToTalkButton, PushToTalkButtonContainer} from "@speechly/react-ui"
import {Grid} from '@mui/material'

function MainPage() {
  return (
    <div>
      <Header/>
      <Grid  container spacing={2}
      sx={{height: '100%',  padding: '1%', boxSizing: 'border-box', placeItems:'center'}}
      >
        <Grid sx={{height:'40%'}} item xs={12} sm={4}>
        <Details color='green' title='Income'/>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Main/>
        </Grid>
        <Grid item xs={12} sm={4}>
        <Details color='red' title='Expense'/>
        </Grid>
      </Grid>
      <PushToTalkButtonContainer>
        <PushToTalkButton/>
      </PushToTalkButtonContainer>
    </div>
  )
}

export default MainPage