import React, { useState, useRef } from 'react'
import { Auth } from 'aws-amplify'
import t from 'tcomb-form-native'
import { AppContainer, Button, Space } from '../../../components'
import { structForgotPass, options } from '../Form'
import { onScreen } from '../../../constants'

// Fixme
const Form = t.form.Form // eslint-disable-line

const ForgotPassSubmit = ({ navigation }) => {
  const [userInfo, setUserInfo] = useState({
    email: navigation.state.params,
    code: '',
    password: '',
    passwordConfirmation: ''
  })

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const registerForm = useRef('')

  const _onPress = async () => {
    setLoading(true)
    const validate = registerForm.current.getValue()
    if (validate) {
      try {
        const { email, code, password } = userInfo
        await Auth.forgotPasswordSubmit(email, code, password)
        onScreen('AUTHORISED', navigation)()
        setLoading(false)
      } catch (err) {
        setLoading(false)
        setError(err.message)
      }
    }
  }

  return (
    <>
      <AppContainer title="Confirmation" navigation={navigation} message={error} loading={loading}>
        <Space height={20} />
        <Form
          ref={registerForm}
          type={structForgotPass}
          options={options}
          value={userInfo}
          onChange={text => setUserInfo(text)}
        />
        <Space height={50} />
        <Button title="Sign In" onPress={_onPress} />
      </AppContainer>
    </>
  )
}

export { ForgotPassSubmit }
