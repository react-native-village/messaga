import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
// import { createBottomTabNavigator } from 'react-navigation-tabs'


import { ConfirmSignUp, Hello, SignIn, SignUp, Forgot, ForgotPassSubmit } from './screens'
import { Authorized } from './UserNavigator'


const AppNavigator = createStackNavigator(
  {
    HELLO: { screen: Hello },
    SIGN_IN: { screen: SignIn },
    SIGN_UP: { screen: SignUp },
    FORGOT: { screen: Forgot },
    CONFIRM_SIGN_UP: { screen: ConfirmSignUp },
    AUTHORISED: { screen: Authorized },
    FORGOT_PASSWORD_SUBMIT: { screen: ForgotPassSubmit }
  },
  {
    initialRouteName: 'HELLO',
    headerMode: 'none'
  }
)

export default createAppContainer(AppNavigator)
