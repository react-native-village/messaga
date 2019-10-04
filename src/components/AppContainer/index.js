import React, { memo } from 'react'
import { StyleSheet, View, ScrollView } from 'react-native'
import StatusBarAlert from 'react-native-statusbar-alert'
import { Header, Space, Loading } from '..'
import { RED, goBack } from '../../constants'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10,
    backgroundColor: '#212121'
  }
})

const AppContainer = memo(({ navigation, children, message = '', title, loading = false }) => {
  const { container } = styles
  return (
    <>
      <StatusBarAlert visible={message !== ''} message={message} backgroundColor={RED} color="white" />
      {title && <Header title={title} onPress={goBack(navigation)} iconLeft="ios-arrow-back" colorLeft="#FFF" />}
      <>
        {loading ? (
          <Loading />
        ) : (
          <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
            <View style={container}>{children}</View>
            <Space height={200} />
          </ScrollView>
        )}
      </>
    </>
  )
})

export { AppContainer }
