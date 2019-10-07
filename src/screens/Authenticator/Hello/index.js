import React, { useEffect, useState } from 'react'
import { Auth } from 'aws-amplify'
import * as Keychain from 'react-native-keychain'
import { I18n } from '@aws-amplify/core'
import { AppContainer, Button, Space } from '../../../components'
import { onScreen } from '../../../constants'

const Hello = ({ navigation }) => {
  const [error, setError] = useState('')
  useEffect(() => {
    Auth.federatedSignIn({ provider: 'Facebook' })
    const key = async () => {
      try {
        const credentials = await Keychain.getGenericPassword()
        if (credentials) {
          onScreen('USER', navigation)()
        }
      } catch (err) {
        setError(err)
      }
    }
    key()
  })
  return (
    <AppContainer message={error}>
      <Space height={200} />
      <Button title={I18n.get('Sign In')} onPress={onScreen('SIGN_IN', navigation)} />
      <Button title={I18n.get('Sign Up')} onPress={onScreen('SIGN_UP', navigation)} />
    </AppContainer>
  )
}

export { Hello }
