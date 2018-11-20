// Navigation/Navigation.js

import React from 'react' // N'oubliez pas l'import de React ici. On en a besoin pour rendre nos components React Native Image ! 
import { StyleSheet, Image } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation'
import Camera from '../components/Camera'
import Clothes from '../components/Clothes'
import Lookbook from '../components/Lookbook'
import CustomHeader from '../components/CustomHeader'

const CameraStackNavigator = createStackNavigator({
    Camera: {
        screen: Camera,
        navigationOptions: {
            header: props => <CustomHeader {...props} title="Add clothes"/>,
            animationEnabled: true
        }
    }
})

const ClothesStackNavigator = createStackNavigator({
    Clothes: {
        screen: Clothes,
        navigationOptions: {
            header: props => <CustomHeader {...props} title="My clothes"/>,
            animationEnabled: true
        }
    }
})

const LookbookStackNavigator = createStackNavigator({
    Lookbook: {
        screen: Lookbook,
        navigationOptions: {
            header: props => <CustomHeader {...props} title="Lookbook"/>,
            animationEnabled: true
        }
    }
})

const MoviesTabNavigator = createBottomTabNavigator(
    {
        Clothes: {
            screen: ClothesStackNavigator,
            navigationOptions: {
                tabBarIcon: ({ focused }) => (focused ?
                    <Image
                        source={require('../assets/images/hanger.png')}
                        style={[styles.icon, { tintColor: 'black' }]}
                    />
                    :
                    <Image
                        source={require('../assets/images/hanger.png')}
                        style={[styles.icon, { tintColor: 'grey' }]}
                    />
                ),
            }
        },
        Camera: {
            screen: CameraStackNavigator,
            navigationOptions: {
                tabBarIcon: ({ focused }) => (focused ?
                    <Image
                        source={require('../assets/images/camera.png')}
                        style={[styles.icon, { tintColor: 'black' }]}
                    />
                    :
                    <Image
                        source={require('../assets/images/camera.png')}
                        style={[styles.icon, { tintColor: 'grey' }]}
                    />
                ),
            }
        },
        Lookbook: {
            screen: LookbookStackNavigator,
            navigationOptions: {
                tabBarOnPress: ({navigation}) => {
                    if (navigation.isFocused()) {
                        navigation.state.routes[0].params.scrollToTop()
                    } else {
                        navigation.navigate('Lookbook');
                    }
                },
                tabBarIcon: ({ focused }) => (focused ?
                    <Image
                        source={require('../assets/images/insta.png')}
                        style={[styles.icon, { tintColor: 'black' }]}
                    />
                    :
                    <Image
                        source={require('../assets/images/insta.png')}
                        style={[styles.icon, { tintColor: 'grey' }]}
                    />
                ),
            }
        }
    },
    {
        initialRouteName: 'Lookbook',
        tabBarOptions: {
            inactiveBackgroundColor: '#FFFFFF',
            showLabel: false,
            showIcon: true,
            activeTintColor: '#292929',
            inactiveTintColor: '#494949',
        }
    }
)

const styles = StyleSheet.create({
    icon: {
        width: 20,
        height: 20,
        marginTop: 5
    }
})
export default MoviesTabNavigator