import React, { useEffect, useReducer } from 'react'
import { FlatList } from 'react-native'
import { Auth, API, graphqlOperation } from 'aws-amplify'
import { listJobs } from '../../graphql/queries'
import { onCreateJob, onUpdateJob, onDeleteJob } from '../../graphql/subscriptions'
import { AppContainer, CardJob } from '../../components'
import { onScreen, BG } from '../../constants'
import { initialState, reducer } from './helper'

const JobsMain = ({ navigation }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const read = async () => {
    dispatch({ type: 'LOADING', loading: true })
    try {
      const jobsData = await API.graphql(graphqlOperation(listJobs, { limit: 5 }))
      const { items, nextToken } = jobsData.data.listJobs
      dispatch({ type: 'READ', data: items, nextToken })
    } catch (error) {
      dispatch({ type: 'ERROR', error: error.message })
    }
  }

  const owner = Auth.user.attributes.sub

  useEffect(() => {
    read()
    const error = ({ errors }) => dispatch({ type: 'ERROR', error: errors[0].message })
    const subscriptionCreate = API.graphql(graphqlOperation(onCreateJob, { owner })).subscribe({
      next: e => dispatch({ type: 'CREATEUPDATE', obj: e.value.data.onCreateJob }),
      error
    })
    const subscriptionUpdate = API.graphql(graphqlOperation(onUpdateJob, { owner })).subscribe({
      next: e => dispatch({ type: 'CREATEUPDATE', obj: e.value.data.onUpdateJob }),
      error
    })
    const subscriptionDelete = API.graphql(graphqlOperation(onDeleteJob, { owner })).subscribe({
      next: e => dispatch({ type: 'DELETE', obj: e.value.data.onDeleteJob }),
      error
    })
    return () =>
      subscriptionUpdate.unsubscribe() && subscriptionCreate.unsubscribe() && subscriptionDelete.unsubscribe()
  }, [])

  const _renderItem = ({ item }) => {
    const check = owner === item.owner
    return <CardJob item={item} onPress={onScreen(check ? 'JOB_ADD' : 'JOB', navigation, item)} />
  }

  const _keyExtractor = obj => obj.id.toString()

  const { data, error, loading, nextToken } = state

  const fetchMore = async () => {
    try {
      const jobsData = await API.graphql(graphqlOperation(listJobs, { limit: 5, nextToken }))
      nextToken !== null &&
        dispatch({
          type: 'READ',
          data: jobsData.data.listJobs.items,
          nextToken: jobsData.data.listJobs.nextToken
        })
    } catch (err) {
      dispatch({ type: 'ERROR', error: err.message })
    }
  }

  return (
    <AppContainer
      flatlist
      message={error}
      loading={loading}
      iconRight="plus-a"
      colorLeft={BG}
      title=" "
      onPressRight={onScreen('JOB_ADD', navigation)}
    >
      <FlatList
        scrollEventThrottle={16}
        data={data}
        renderItem={_renderItem}
        keyExtractor={_keyExtractor}
        onEndReachedThreshold={0.5}
        onEndReached={fetchMore}
      />
    </AppContainer>
  )
}

export { JobsMain }
