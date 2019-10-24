import React, { useState, useEffect, useContext } from 'react'
import { Dimensions, TouchableOpacity, View, Text, StyleSheet } from 'react-native'
import { createAppContainer } from 'react-navigation'
import Amplify, { Auth, API, graphqlOperation } from 'aws-amplify'

import * as mutations from '../../../graphql/mutations'
import { listJobs } from '../../../graphql/queries'
import { createStackNavigator } from 'react-navigation-stack'
// import Amplify, { API, graphqlOperation } from "aws-amplify";
import { Header, CardJob, JobsContainer } from '../../../components'
import { FlatList } from 'react-native'
import { UserContext } from '../../../constants'
import { AddJob } from '../AddJob'




const { height } = Dimensions.get('window')

// import Fontisto from 'react-native-vector-icons/Fontisto'

// import { BLUE } from '../../../constants'
const card = {
  title: 'React Native Developer',
  content: '234sdfsdfsdfsdfsdfsdfsdfsdfsdfsdfdsdsfsdfdsfdsfdfsdfsdfsdfsdfsdfsdfs',
  user: 'sergey',
  salary: '2340$'
}
// const card2 = {
//   title: 'React Native Developer232',
//   content: '234sdfsdfsdfsdsdffsdfsdfsdfsdfsdfsdfdsdsfsdfdsfdsfdfsdfsdfsdfsdfsdfsdfs',
//   user: 'serdgey',
//   salary: '2340$'
// }

// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    backgroundColor: 'transparent',
    height: height - 50,
    justifyContent: 'center',
    paddingHorizontal: 20
  },
  btn: {
    padding: 20,
    backgroundColor: 'green'
  },
  sub: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
    borderRadius: 15,
    borderWidth: 1,
    zIndex: 1000000000,
    borderColor: 'rgba(80, 227,194, 0.38)'
  }
})

const Home = ({ navigation }) => {
  const user = useContext(UserContext)
  const [jobs, setJobs] = useState([])
  const [nextToken, setToken] = useState('')
  const [error, SetError] = useState('')
  const [loading, setLoading] = useState(false)
  console.log(user && user.attributes.email)
  useEffect(() => {
    async function fetchJobs() {
      try {
        setLoading(true)
        const {
          data: {
            listJobs: { items, nextToken: nextTok }
          }
        } = await API.graphql(graphqlOperation(listJobs, { limit: 3 }))
        // console.log(items)
        setJobs(items)
        setToken(nextTok)
        setLoading(false)
      } catch (err) {
        // console.log('error: ', err);
      }
    }
    fetchJobs()
  }, [])
  const addJob = () => {
    navigation.navigate('AddJob')
  }

  return (
    <JobsContainer on loading={loading} header={<Header iconRight="plus" colorRight="#2e7767" onPressRight={() => addJob()} />}>
      <FlatList
        style={{ flex: 1 }}
        data={jobs}
        renderItem={({ item: { title, content, owner: user, rate } }) => <CardJob title={title} content={content} user={user} rate={rate} />}
        keyExtractor={item => item.id}
      />
      </JobsContainer> 
  )
}
const PopUp = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.sub}>
        <TouchableOpacity
          style={styles.btn}
          onPress={async () => {
            const test123 = {
              title: 'React Native Developer2',
              content: 'dssdfsdfsdfsdsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfdsfsdfsdfsdsdf',
              rate: 2340
            }
            // const newPost = await graphqlOperation(mutations.createJob, {
            //   input:  test123
            // })
            // console.log("next", newPost)
            // const { data } = await API.graphql(graphqlOperation(listJobs));
            const { data } = await API.graphql({
              query: mutations.createJob,
              variables: { input: test123 },
              authMode: 'AMAZON_COGNITO_USER_POOLS'
            })
            console.log(data)
          }}
        >
          <Text>close2</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.btn}>
          <Text>close</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const JobsNav = createStackNavigator(
  {
    Main: {
      screen: Home
    },
    AddJob: {
      screen: AddJob
    }
  },
  {
    mode: 'modal',
    headerMode: 'none'
  }
)

const Jobs = createAppContainer(JobsNav)

export { Jobs }
