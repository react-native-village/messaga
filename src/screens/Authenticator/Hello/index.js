import React, { useEffect, useState } from 'react'
import * as Keychain from 'react-native-keychain'
import { AppContainer, Button, Space, TextLink } from '../../../components'
import { onScreen } from '../../../constants'

const Hello = ({ navigation }) => {
  const [error, setError] = useState('')
  useEffect(() => {
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
      <Button title="Sign In" onPress={onScreen('SIGN_IN', navigation)} />
      <TextLink title="or" />
      <Button title="Sign Up" onPress={onScreen('SIGN_UP', navigation)} />
    </AppContainer>
  )
}

export { Hello }
