import React, { useEffect } from 'react'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import Fontisto from 'react-native-vector-icons/Fontisto'
import { Auth } from 'aws-amplify'

import { User, Jobs } from './screens'
import { PINK } from './constants'


const TabNavigator = createBottomTabNavigator(
  {
    USER: { screen: User },
    JOBS: { screen: Jobs }
  },
  {
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
  useEffect(() => {
    const checkUser = async () => {
      await Auth.currentAuthenticatedUser()
    }
    checkUser()
  })

  return (<TabNavigator navigation={navigation} />)
}
Authorized.router = TabNavigator.router

export { Authorized }