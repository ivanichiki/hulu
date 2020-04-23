import React, { useState } from 'react'
import styled, { css } from 'styled-components/macro'
import { AiOutlineCheckSquare, RiSearchLine } from 'react-icons/all';
import { Logo } from './Logo';
import { Browse } from './Browse';
import { HiddenProfile } from './HiddenProfile';




export const Header = (props) => {

  const [toggle, settoggle] = useState(false)


  return (
    <Header_wrapper>

      <HeaderContent>

        <div style={{ display: 'flex' }}>
          <NavItem>
            <Logo nightTheme={props.nightTheme} />
          </NavItem>

          <NavItem>
            <Browse nightTheme={props.nightTheme} />
            <NavLabel> BROWSE </NavLabel>
          </NavItem>

          <NavItem>
            <AiOutlineCheckSquare size={28} />
            <NavLabel> MY STUFF </NavLabel>
          </NavItem>



        </div>

        <div style={{ display: 'flex' }}>


          <NavItem>
            <StyledRiSearchLine size={28} nightTheme={props.nightTheme} />
            <NavLabel> SEARCH </NavLabel>
          </NavItem>

          <NavItem onMouseLeave={() => settoggle(false)} onMouseEnter={() => settoggle(true)} last>
            <div style={{display:'flex', alignItems:'center', cursor:'pointer'}}  onClick={() => settoggle(!toggle)}>
              <Profile > <span>o</span></Profile>
              <NavLabel>OTHER PEOPLE </NavLabel>
              </div>
              <HiddenProfile toggle={toggle} nightTheme={props.nightTheme} setnightTheme={props.setnightTheme} />
           
          </NavItem>
        </div>


      </HeaderContent>

    </Header_wrapper>
  )
}






const Header_wrapper = styled.div`
background: var(--background--nav);
color: var(--text--primary);
display:flex;
width:100%;
height: 72px;
position:fixed;
top:0;
z-index: 1000;
align-items:center;
transition: background 500ms ease, color 300ms ease;
box-shadow: 0 1px 0 0 var(--accent--nav);


`
const NavItem = styled.div`
display:flex;
padding: 0 20px;
height:100%;
align-items:center;
cursor: pointer;
&:first-child{
  margin-left:-20px;

}
${props => props.last && css`
cursor: default;
`}
`

const Profile = styled.div`
border-radius:50%;
height: 32px;
width: 32px;
line-height: 32px;
color: var(--background--icon);
text-align:center;



background-color: var(--text--primary);
transition: color 300ms ease, background-color 300ms ease;
span {
  font-size:20px;
  position:relative;
  bottom:1px;
}
`
const NavLabel = styled.div`
margin-left: 12px;
&:hover{
opacity: 0.8;
}
`
const StyledRiSearchLine = styled(RiSearchLine)`
transform:rotate(-8deg)
`


const HeaderContent = styled.div`
width: calc(100% - 96px);
margin-left:auto;
margin-right:auto;
height:100%;
display:flex;
justify-content:space-between;


`
