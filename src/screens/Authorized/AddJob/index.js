import React from 'react'

import t from 'tcomb-form-native'
import { JobsContainer } from '../../../components'

import { structAddOrEdit, options } from '../../Authenticator/Form'

const { Form } = t.form

const AddJob = React.memo(() => (
  <JobsContainer>
    <Form
        // ref={registerForm}
      type={structAddOrEdit}
      options={options}
    />
  </JobsContainer>
))

export { AddJob }