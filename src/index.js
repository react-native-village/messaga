/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react'
import { StatusBar } from 'react-native'
import Amplify from '@aws-amplify/core'
import { Authenticator } from 'aws-amplify-react-native'
import { AmplifyTheme, Localei18n } from './components'
import awsconfig from '../aws-exports'

Amplify.configure({
  ...awsconfig,
  Analytics: {
    disabled: true
  }
})

const signUpConfig = {
  hideAllDefaults: true,
  signUpFields: [
    {
      label: 'Email',
      key: 'email',
      required: true,
      displayOrder: 1,
      type: 'string'
    },
    {
      label: 'Password',
      key: 'password',
      required: true,
      displayOrder: 2,
      type: 'password'
    }
  ]
}

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <Localei18n />
      <Authenticator usernameAttributes="email" signUpConfig={signUpConfig} theme={AmplifyTheme} />
    </>
  )
}

export default App
