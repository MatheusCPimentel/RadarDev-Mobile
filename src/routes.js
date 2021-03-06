import { createAppContainer } from 'react-navigation';

import { createStackNavigator } from 'react-navigation-stack';

import Main from './pages/Main';
import Profile from './pages/Profile';
import { Dimensions } from 'react-native';

const Routes = createAppContainer (
    createStackNavigator({
        Main: {
            screen: Main,
            navigationOptions: {
                title: 'DevRadar'
            }
        },
        Profile: {
            screen: Profile,
            navigationOptions: {
                title: 'Perfil no Github'
            }
        }
    }, {
        defaultNavigationOptions: {
            headerBackTitleVisible: false,
            headerTintColor: '#FFF',
            headerStyle: {
                backgroundColor: '#7d40e7', 
            },
            headerTitleStyle: {
                width: Dimensions.get('window').width,
            }
        },
    })
);

export default Routes;