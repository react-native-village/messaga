import React from 'react'
import { Text } from 'react-native'
// import Fontisto from 'react-native-vector-icons/Fontisto'
import { Navigator } from 'react-native-popup-navigation'
import { Header, CardJob, AppContainer } from '../../../components'
import { Dimensions, TouchableOpacity ,View} from 'react-native'
const { width, height } = Dimensions.get('window')

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

// const Home = ({navigation, present}) => {
//   return (
//     <>
//       <AppContainer navigation={navigation} costumHeader={<Header iconRight="plus" colorRight="#2e7767" />}>
//       <TouchableOpacity onPress={() => { present('popup') }}>
//           <CardJob {...card}/>
//       </TouchableOpacity>  
//       </AppContainer>
//     </>
//   )
// }

const Home = ({navigation, present}) => {
  return (
    <>
      <AppContainer navigation={navigation} costumHeader={<Header iconRight="plus" colorRight="#2e7767" />}>
    
        <CardJob {...card} onPress= {() => { present('popup')}} />
 
      </AppContainer>
    </>
  )
}
const PopUp = (props) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => { props.dismiss() }} style={styles.btn} >
        <Text>Present</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = {
  container: {
    flex: 1,
    alignItems: 'center', 
    justifyContent: 'center',
    backgroundColor: '#fff',
    zIndex:12
  },
  btn: {
    padding: 20,
    backgroundColor: 'green'
  }
}
const Jobs = () =>{
  return (
    <Navigator pages={[ 
      { screen: Home, props: {}, name: 'home', init: true },
      { screen: PopUp, props: {}, name: 'popup', snapPoints: [50, height] }
    ]} />
  )
}

// const Jobs = ({ navigation }) => {
//   // const [loading, setLoading] = useState(false)
//   // const [error, setError] = useState('')
//   return (
//     <>
//       <AppContainer navigation={navigation} costumHeader={<Header iconRight="plus" colorRight="#2e7767" />}>

//         <PopupContainer></PopupContainer>
//       </AppContainer>
//     </>
//   )
// }

export { Jobs }
