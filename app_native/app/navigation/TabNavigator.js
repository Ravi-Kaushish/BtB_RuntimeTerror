import { createBottomTabNavigator } from 'react-navigation';

class HomeScreen extends React.Component {
    render() {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>Home!</Text>
          <Button
            title="Go to Home"
            onPress={() => this.props.navigation.navigate('Home')}
          />
        </View>
      );
    }
  }
  class ProfileScreen extends React.Component {
    render() {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>Profile!</Text>
          <Button
            title="Go to Profile"
            onPress={() => this.props.navigation.navigate('Profile')}
          />
        </View>
      );
    }
  }
  class SettingsScreen extends React.Component {
    render() {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>Settings!</Text>
          <Button
            title="Go to Settings"
            onPress={() => this.props.navigation.navigate('Setting')}
          />
        </View>
      );
    }
  }
  
export default createBottomTabNavigator({
    Home: HomeScreen,
    Profile: ProfileScreen,
    Setting : SettingsScreen
})