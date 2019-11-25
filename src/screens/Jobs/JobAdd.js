import React, { useRef, useReducer, useEffect, useState } from 'react'
import t from 'tcomb-form-native'
import { API, graphqlOperation } from 'aws-amplify'
import { AppContainer, Card, Button, Space, TextLink } from '../../components'
import { structJob, options } from '../Authenticator/Form'
import { goBack, PINK } from '../../constants'
import { initialState, reducer } from './helper'
import { createJob, updateJob, deleteJob } from '../../graphql/mutations'

const Form = t.form.Form // eslint-disable-line

const JobAdd = ({ navigation }) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const { input, error, loading } = state
  const [check, setOwner] = useState(false)

  useEffect(() => {
    const obj = navigation.state.params
    typeof obj === 'undefined' && setOwner(true)
    dispatch({ type: 'CREATE', obj })
  }, [])

  const crud = async (mutate, del = true) => {
    dispatch({ type: 'LOADING', loading: true })
    try {
      const { id } = input
      await API.graphql(graphqlOperation(mutate, { input: del ? input : { id } })) // when deleting, forward the second argument - false
      dispatch({ type: 'CLEAR_INPUT' })
      dispatch({ type: 'LOADING', loading: false })
      goBack(navigation)()
    } catch (err) {
      dispatch({ type: 'ERROR', error: err.errors[0].message })
    }
  }

  const onChange = obj => dispatch({ type: 'SET_INPUT', obj })

  const registerForm = useRef('')
  return (
    <AppContainer message={error} loading={loading} title="Add" onPress={goBack(navigation)}>
      <Card>
        <Form ref={registerForm} type={structJob} options={options} value={input} onChange={text => onChange(text)} />
        <Space height={40} />
        <Button title="DONE" onPress={() => crud(check ? createJob : updateJob)} />
        <TextLink title="or" />
        <Space height={10} />
        <Button title="DELETE" color={PINK} onPress={() => crud(deleteJob, false)} />
        <Space />
      </Card>
    </AppContainer>
  )
}

export { JobAdd }
