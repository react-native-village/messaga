import React, { useEffect, useState } from 'react'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import Fontisto from 'react-native-vector-icons/Fontisto'
import { Auth } from 'aws-amplify'
import { UserContext, PINK } from './constants'
import { User, Jobs } from './screens'


const TabNavigator = createBottomTabNavigator(
  {
    USER: { screen: User },
    JOBS: { screen: Jobs }
  },
  {
    initialRouteName: 'JOBS',
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ tintColor }) => {
        const { routeName } = navigation.state
        const IconComponent = Fontisto
        let iconName
        if (routeName === 'USER') {
          iconName = 'user-secret'
        } else if (routeName === 'JOBS') {
          iconName = 'home'
        }
        return <IconComponent name={iconName} size={35} color={tintColor} />
      }
    }),
    tabBarOptions: {
      activeTintColor: PINK,
      inactiveTintColor: '#390032',
      showLabel: false,
      style: {
        height: 80,
        backgroundColor: '#0F0F0F',
        borderTopColor: '#0F0F0F'

      }
    }
  }
)

const Authorized = ({ navigation }) => {
  const [user, setUser] = useState(null)
  useEffect(() => {
    const checkUser = async () => {
      try {
        const userDetails = await Auth.currentAuthenticatedUser()
        setUser(userDetails)
      } catch (e) {
        navigation.navigate('HELLO')
      }
    }
    checkUser()
  }, [])

  return (<UserContext.Provider value={user}><TabNavigator navigation={navigation} /></UserContext.Provider>)
}
Authorized.router = TabNavigator.router

export { Authorized }