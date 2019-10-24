import React, { memo } from 'react'
import { StyleSheet, View, ImageBackground } from 'react-native'
import StatusBarAlert from 'react-native-statusbar-alert'
import { Loading } from '..'
import { RED } from '../../constants'

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%'
  },
  sub: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10
  }
})

const JobsContainer = memo(({ children, header, message = '', loading = false }) => {
  const { container, sub } = styles
  return (
    <ImageBackground source={require('./bg.png')} style={container}>
      <StatusBarAlert visible={message !== ''} message={message} backgroundColor={RED} color="white" />
      {header || null}
      <>{loading ? <Loading /> : <View style={sub}>{children}</View>}</>
    </ImageBackground>
  )
})

export { JobsContainer }
