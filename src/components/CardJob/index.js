import React, { memo } from 'react'
import { StyleSheet, TouchableWithoutFeedback, Text, View } from 'react-native'
// import { BLUE, PINK, } from '../../constants'

const styles = StyleSheet.create({
  card: {
    borderRadius: 17,
    borderWidth: 1,
    borderColor: 'rgba(80, 227,194, 0.38)',
    // opacity: 0.38,
    padding: 25,
    height: 246,
    marginBottom: 20
  },
  title: {
    fontFamily: '3270Narrow',
    color: '#dbdbdb',
    fontSize: 21
  },
  content: {
    fontFamily: '3270Narrow',
    color: '#6a676a',
    marginVertical: 25,
    fontSize: 18,
    letterSpacing: 0.92,
    flexGrow: 1
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between'

  },
  footerItem: {
    color: '#cfcfcf',
    fontFamily: '3270Narrow',
    textTransform: 'uppercase',
    fontSize: 19,
    letterSpacing: 0.97

  }

})

const CardJob = memo(({ title, content, user, rate, onPress }) => {
//   const [bg, setBg] = useState(BLUE)
//   const { img } = styles
  const userSlice = user.slice(0, 10)
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.card}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.content}>{content}</Text>
        <View style={styles.footer}>
          <Text style={styles.footerItem}>{userSlice}</Text>
          <Text style={[styles.footerItem, { fontSize: 23, letterSpacing: 1.17 }]}>{rate}$</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  )
})

export { CardJob }
