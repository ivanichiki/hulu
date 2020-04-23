import React, { useState } from 'react'
import styled, { css } from 'styled-components/macro'
import { SwitchNight } from './SwitchNight'


export const HiddenProfile = (props) => {

  
  return (
    <StyledProfile show={props.toggle}>
      <div style={{display:props.toggle?'block':'none'}}>

    
      <SecondAc >
        <div className='secAccBtn'><span>j</span></div>
        <Label >james</Label>
      </SecondAc>
      <NightModeBlock>
        <SwitchNight/>
          <Label >Night Mode: {props.nightTheme?'On':'Off'} </Label>
        <div onClick={()=> props.setnightTheme(!props.nightTheme)}      className='hub'>
          <HubBtn  on={props.nightTheme}/>
        </div>
      </NightModeBlock>
      <ProfileSettings>
        <div className='settingsWrapper'>
        <div className='setting_labels'>Manage Profiles</div>
        <div className='setting_labels'>Account</div>
        <div className='setting_labels'>Help Center</div>
        <div className='setting_labels'>Log Out</div>
        </div>
       
      </ProfileSettings>

      </div>
    </StyledProfile>
  )
}






const StyledProfile = styled.div`

  position: absolute;
  top: 72px;
  right: 20px;
  background: var(--background--nav-dropdown);
  box-shadow: 0 24px 88px -8px var(--shadow--light);
  max-width:365px;
  max-height:80vh;
  transition:background 500ms ease;
  opacity: 0;
  transition:opacity 300ms ease;
  ${props=>props.show===true&&css`
  opacity: 1;

  `}
  /* opacity: ${props=>props.show===true?1:0}; */


`
const Label = styled.div`

    color: var(--text--alternate);
    margin-left:10px;
    width:130px;
 
` 

const SecondAc = styled.div`
    width:100%;
    display:flex;
    height: 80px;
    margin: 0 20px;
    cursor: pointer;
    align-items:center;
 
    .secAccBtn{
      border-radius:50%;
      height: 48px;
      width: 48px;
      line-height: 48px;
      background-color: var(--accent--light);
      color: var(--text--primary);
      display:flex;
      justify-content:center;
    }
    span{
     font-weight:600;
     font-size:20px;
    }
  }
  &:hover .secAccBtn{
    background-color: var(--text--primary);
    color: var(--background--icon);
  }
  &:hover div${Label}{

    color: var(--text--primary);
  }

`


const HubBtn = styled.div`

        position:absolute;
      left:${props=>props.on==true?'20px':'0px'};
      border-radius: 50%;
      box-shadow: 0 2px 2px 0 rgba(4, 4, 5, 0.4);
      height: 30px;
      width: 30px;
      background-color: var(--white);
      transition: left 500ms;
 
`
const NightModeBlock = styled.div`
    width:100%;
    display:flex;
    height: 80px;
    align-items:center;
    border-top: 1px solid var(--accent--dark);
    margin-right:30px;
    .hub{
      cursor: pointer;
      border-radius: 18px;
      position:relative;
      margin: 0 10px;
      height: 31px;
      width: 51px;
      background-color: var(--accent--light);

    }
  
`

const ProfileSettings = styled.div`
width:100%;
border-top: 1px solid var(--accent--dark);


.settingsWrapper{
  padding: 30px 30px 30px 20px;
  
}
.setting_labels{
  color: var(--text--alternate);
  font-size:15px;
  padding: 5px;
  cursor: pointer;
  &:hover{
    opacity: 0.8;
  }
}
`