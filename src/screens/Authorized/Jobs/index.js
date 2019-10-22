import React from 'react'
import { Dimensions, TouchableOpacity, View, Text, StyleSheet } from 'react-native'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { Header, CardJob, AppContainer } from '../../../components'

const { height } = Dimensions.get('window')


// import Fontisto from 'react-native-vector-icons/Fontisto'

// import { BLUE } from '../../../constants'
const card = {
  title: 'React Native Developer',
  content: '234sdfsdfsdfsdfsdfsdfsdfsdfsdfsdfdsdsfsdfdsfdsfdfsdfsdfsdfsdfsdfsdfs',
  user: 'sergey',
  salary: '2340$'
}
// const card2 = {
//   title: 'React Native Developer232',
//   content: '234sdfsdfsdfsdsdffsdfsdfsdfsdfsdfsdfdsdsfsdfdsfdsfdfsdfsdfsdfsdfsdfsdfs',
//   user: 'serdgey',
//   salary: '2340$'
// }


// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    backgroundColor: 'transparent',
    height: height - 50,
    justifyContent: 'center',
    paddingHorizontal: 20


  },
  btn: {
    padding: 20,
    backgroundColor: 'green'
  },
  sub: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
    borderRadius: 15,
    borderWidth: 1,
    zIndex: 1000000000,
    borderColor: 'rgba(80, 227,194, 0.38)'
  }
})


const Home = ({ navigation: nav }) => {
  return (
    <>

      <AppContainer navigation={nav} costumHeader={<Header iconRight="plus" colorRight="#2e7767" />}>

        <CardJob {...card} onPress={() => { nav.navigate('PopUp') }} />
        <CardJob {...card} onPress={() => { nav.navigate('PopUp') }} />
        <CardJob {...card} onPress={() => { nav.navigate('PopUp') }} />
        <CardJob {...card} onPress={() => { nav.navigate('PopUp') }} />
        <CardJob {...card} onPress={() => { nav.navigate('PopUp') }} />
        <CardJob {...card} onPress={() => { nav.navigate('PopUp') }} />
        <CardJob {...card} onPress={() => { nav.navigate('PopUp') }} />
        <CardJob {...card} onPress={() => { nav.navigate('PopUp') }} />

      </AppContainer>

    </>
  )
}
const PopUp = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.sub}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.btn} ><Text>close</Text></TouchableOpacity>
      </View>

    </View>

  )
}

const JobsNav = createStackNavigator(
  {
    Main: {
      screen: Home
    },
    PopUp: {
      screen: PopUp
    }

  },
  {
    mode: 'modal',
    headerMode: 'none'
  }
)


const Jobs = createAppContainer(JobsNav)


export { Jobs }
