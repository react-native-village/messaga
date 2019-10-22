import React, { memo } from 'react'
import { StyleSheet, View, ScrollView, ImageBackground } from 'react-native'
import StatusBarAlert from 'react-native-statusbar-alert'
import { Header, Space, Loading } from '..'
import { RED, goBack, BLUE } from '../../constants'

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

const AppContainer = memo(({ navigation, children, costumHeader, message = '', title, loading = false }) => {
  const { container, sub } = styles
  return (
    <ImageBackground source={require('./bg.png')} style={container}>
      <StatusBarAlert visible={message !== ''} message={message} backgroundColor={RED} color="white" />
      { costumHeader || null }
      {title && <Header title={title} onPress={goBack(navigation)} iconLeft="angle-dobule-left" colorLeft={BLUE} />}
      <>
        {loading ? (
          <Loading />
        ) : (
          <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
            <View style={sub}>{children}</View>
            <Space height={200} />
          </ScrollView>
        )}
      </>
    </ImageBackground>
  )
})

export { AppContainer }
