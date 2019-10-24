import React, { useState, useEffect } from 'react'
import { Dimensions, TouchableOpacity, View, Text, StyleSheet, TextInput } from 'react-native'
import { JobsContainer, Input } from '../../../components'
import t from 'tcomb-form-native'

import { structAddOrEdit, options} from '../../Authenticator/Form'

const Form = t.form.Form

const AddJob = React.memo(({ navigator }) => {
  return (
    <JobsContainer>
      <Form
        // ref={registerForm}
        type={structAddOrEdit}
        options={options}
        // value={userInfo}
        // onChange={text => setUserInfo(text)}
      />
    </JobsContainer>
  )
})

export { AddJob }