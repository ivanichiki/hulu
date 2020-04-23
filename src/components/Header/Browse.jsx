import React from 'react'

export const Browse = (props) => {
  return (

    <svg class="fill" width="28" height="20" viewBox="0 0 28 20">
      <path d="M2 18h24V8H2v10zm-2 2V6h28v14H0zM2 3h24v2H2V3zm2-3h20v2H4V0z" stroke="none" fill={`${props.nightTheme && '#ffffff'}`}
        stroke-width="1px"></path>
    </svg>

  )
}
