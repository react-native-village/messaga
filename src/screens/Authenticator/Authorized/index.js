import React, { useEffect } from 'react'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import Fontisto from 'react-native-vector-icons/Fontisto'
import { Auth } from 'aws-amplify'

import { User } from '../User'
import { Jobs } from '../Jobs'
import { PINK } from '../../../constants'


const TabNavigator = createBottomTabNavigator(
  {
    User,
    Jobs
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ tintColor }) => {
        const { routeName } = navigation.state
        const IconComponent = Fontisto
        let iconName
        if (routeName === 'User') {
          iconName = 'user-secret'
        } else if (routeName === 'Jobs') {
          iconName = 'home'
        }
        return <IconComponent name={iconName} size={25} color={tintColor} />
      }
    }),
    tabBarOptions: {
      activeTintColor: PINK,
      inactiveTintColor: '#390032',
      showLabel: false,
      style: {
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