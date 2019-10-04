import React, { memo } from 'react'
import { View, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#212121'
  }
})

const Space = memo(({ height }) => {
  const { container } = styles
  return <View style={[container, { height: height || 30 }]} />
})

export { Space }
