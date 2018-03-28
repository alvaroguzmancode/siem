import { StackNavigator } from 'react-navigation'
import RevisionesScreen from '../Containers/RevisionesScreen'
import DashboardScreen from '../Containers/DashboardScreen'
import LoginScreen from '../Containers/LoginScreen'
import LaunchScreen from '../Containers/LaunchScreen'

import styles from './Styles/NavigationStyles'

// Manifest of possible screens
const PrimaryNav = StackNavigator({
  /*RevisionesScreen: { screen: RevisionesScreen },
  DashboardScreen: { screen: DashboardScreen },*/
  LoginScreen: { screen: LoginScreen },
  /*LaunchScreen: { screen: LaunchScreen }*/
}, {
  // Default config for all screens
  headerMode: 'none',
  initialRouteName: 'LoginScreen',
  navigationOptions: {
    headerStyle: styles.header
  }
})

export default PrimaryNav
