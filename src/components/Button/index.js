import React, { memo } from 'react'
import { StyleSheet, TouchableHighlight, Text } from 'react-native'
import { BLUE, PINK } from '../../constants'

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: BLUE,
    borderWidth: 2,
    borderRadius: 5,
    height: 50,
    margin: 5
  },
  h1: {
    color: BLUE,
    fontWeight: 'bold',
    fontSize: 15
  }
})

const Button = memo(({ title, onPress }) => {
  const { button, h1 } = styles
  return (
    <TouchableHighlight style={button} onPress={onPress} underlayColor={PINK}>
      <Text style={h1}>{title}</Text>
    </TouchableHighlight>
  )
})

export { Button }
