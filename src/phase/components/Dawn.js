import React from 'react'
import { css, StyleSheet } from 'theme'
import village from 'images/village.jpg'

export function Dawn() {
  return (
    <div className={css(styles.phase)} />
  )
}

const styles = StyleSheet.create({
  phase: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 auto',
    width: 800,
    height: 400,
    backgroundImage: 'url(' + village + ')',
    backgroundSize: 'cover'
  }
})
