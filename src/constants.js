import { Dimensions } from 'react-native'
import { createContext } from 'react'

export const PINK = '#F20AF5'
export const BLUE = '#00FFFF'
export const RED = '#FC2847'
export const LABEL_COLOR = BLUE
export const INPUT_COLOR = PINK
export const ERROR_COLOR = RED
export const HELP_COLOR = '#999999'
export const BORDER_COLOR = BLUE
export const DISABLED_COLOR = '#777777'
export const DISABLED_BACKGROUND_COLOR = '#eeeeee'

export const UserContext = createContext()

export const win = Dimensions.get('window')
export const W = win.width
export const H = win.height
export const responsive = {
  mobile5: W > 315 && W < 341,
  mobile8: W > 342 && W < 375,
  mobile8plus: W > 375 && W < 415,
  tablet: W < 990 && W > 415
}


export const goBack = navigation => () => navigation.goBack()

export const onScreen = (screen, navigation, obj) => () => {
  navigation.navigate(screen, obj)
}

export const goHome = navigation => () => navigation.pop(3)
