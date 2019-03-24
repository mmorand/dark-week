import React from 'react'
import { connect } from 'react-redux'
import { DAWN, DUSK, NO_GAME } from "config/constants"
import { getPhase } from "phase/state/selectors"
import { Dawn, NewGame } from "phase"

export function UnconnectedPhase({ phase }) {

  let DisplayedPhase

  switch(phase) {
    case DAWN:
      DisplayedPhase = Dawn
      break;
    case NO_GAME:
    default:
      DisplayedPhase = NewGame
  }

  return (
    <DisplayedPhase/>
  )
}

const mapStateToProps = state => {
  return {
    phase: getPhase(state)
  }
}

export const Phase = connect(mapStateToProps)(UnconnectedPhase)