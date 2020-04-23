import React from 'react'
import styled from 'styled-components/macro'

export const SwitchNight = (props) => {
  return (
    <Moon  width="22" height="22" class="NightModeSwitch__icon"><path d="M22 14.843C20.314 19.038 16.208 22 11.41 22 5.107 22 0 16.892 0 10.59 0 5.793 2.962 1.687 7.157 0a11.378 11.378 0 0 0-.818 4.252c0 6.301 5.108 11.41 11.409 11.41a11.36 11.36 0 0 0 4.252-.82z"   fill-rule="evenodd"></path></Moon>
  )
}

const Moon = styled.svg`
fill: var(--text--primary);
padding: 0 10px 0 30px;;
`