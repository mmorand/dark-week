import React from 'react'
import { connect } from 'react-redux'
import { changePhase } from 'board/state/actions'
import { getNextPhase } from 'phase/utils'
import { DUSK, NO_GAME } from "config/constants"
import { getPhase } from 'board/state/selectors'
import { colors, css, StyleSheet } from 'theme'
import { Button } from '@material-ui/core'
import village from 'images/village.jpg'

export function UnconnectedBoard({ changePhase, phase }) {

  function startGame() {
    const newPhase = getNextPhase(phase)
    changePhase(newPhase)
  }

  return (
    <div className={css(
      styles.board,
      phase !== NO_GAME && styles.background,
      phase === DUSK && styles.dusk
    )}>
      <Button onClick={startGame}
              color="primary"
              variant="contained">
        Next
      </Button>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    phase: getPhase(state)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    changePhase: (newPhase) => dispatch(changePhase(newPhase) )
  }
}

const styles = StyleSheet.create({
  board: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 auto',
    width: 800,
    height: 400,
    background: colors.darkGrey
  },
  background: {
    backgroundImage: 'url(' + village + ')',
    backgroundSize: 'cover'
  },
  dusk: {
    filter: 'brightness(70%)'
  }
})

export const Board = connect(mapStateToProps, mapDispatchToProps)(UnconnectedBoard)
