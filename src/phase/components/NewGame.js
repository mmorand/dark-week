import React from 'react'
import { connect } from 'react-redux'
import { changePhase } from 'phase/state/actions'
import { getPhase } from 'phase/state/selectors'
import { getNextPhase } from 'phase/utils'
import { colors, css, StyleSheet } from 'theme'
import { Button } from '@material-ui/core'

export function UnconnectedNewGame({ changePhase, phase }) {

  function startGame() {
    const newPhase = getNextPhase(phase)
    changePhase(newPhase)
  }

  return (
    <div className={css(styles.board)}>
      <Button onClick={startGame} color="primary" variant="contained">New Game</Button>
    </div>
  )
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
  }
})

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

export const NewGame = connect(mapStateToProps, mapDispatchToProps)(UnconnectedNewGame)
