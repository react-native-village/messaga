import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { User } from './screens'
import { ConfirmSignUp, Hello, SignIn, SignUp, Forgot, ForgotPassSubmit } from './screens/Authenticator'

const AppNavigator = createStackNavigator(
  {
    HELLO: { screen: Hello },
    SIGN_IN: { screen: SignIn },
    SIGN_UP: { screen: SignUp },
    FORGOT: { screen: Forgot },
    FORGOT_PASSWORD_SUBMIT: { screen: ForgotPassSubmit },
    CONFIRM_SIGN_UP: { screen: ConfirmSignUp },
    USER: { screen: User }
  },
  {
    initialRouteName: 'HELLO',
    headerMode: 'none'
  }
)

export default createAppContainer(AppNavigator)
