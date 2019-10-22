import React, { memo } from 'react'
import { TouchableOpacity, View, StyleSheet } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { ifIphoneX } from 'react-native-iphone-x-helper'
import Fontisto from 'react-native-vector-icons/Fontisto'

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
    paddingHorizontal: 20,
    backgroundColor: 'transparent',
    position: 'relative',
    ...ifIphoneX(
      {
        height: 122
      },
      {
        height: 90
      }
    )
  },
  iconLeftStyle: {
    ...ifIphoneX(
      {
        paddingTop: 75
      },
      {
        paddingTop: 40
      }
    ),
    fontSize: 35
  },
  rightIconStyle: {
    ...ifIphoneX(
      {
        paddingTop: 75
      },
      {
        paddingTop: 44
      }
    ),
    fontSize: 35,
    marginRight: 3
  }
})

const Header = memo(({ iconLeft, iconRight, colorLeft, colorRight, onPress, onPressRight }) => {
  const { container, iconLeftStyle, rightIconStyle } = styles

  return (
    <View style={[container, { flexDirection: (iconLeft) ? 'row' : 'row-reverse' }]}>
      {iconLeft && (
        <TouchableOpacity onPress={onPress}>
          <Fontisto name={iconLeft} style={iconLeftStyle} color={colorLeft} />
        </TouchableOpacity>
      )}
      {iconRight && (
        <TouchableOpacity onPress={onPressRight}>
          { <MaterialCommunityIcons color={colorRight} name={iconRight} style={[rightIconStyle]} />}
        </TouchableOpacity>
      )}
    </View>
  )
})

export { Header }
