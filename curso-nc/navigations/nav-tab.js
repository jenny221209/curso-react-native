
import React, { Fragment } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon } from 'react-native-elements'

// Sections
import Section1 from '../screens/sections/Section1'
import Section2 from '../screens/sections/Section2'

const Tab = createBottomTabNavigator();

const NavTab = () => {

    const screenOptions = (route, color) => {
        let iconName

        switch (route.name) {
            case 'section1':
                iconName = 'home'
                break;

            case 'section2':
                iconName = 'cards-heart'
                break;
        }

        return(
            <Icon
                type='material-community'
                name={iconName}
                size={22}
                color={color}
            />
        )
    }

    return (
        <Fragment>
            <NavigationContainer>
                <Tab.Navigator
                    initialRouteName='section1'
                    tabBarOptions={{
                        inactiveTintColor:'#EF9A9A',
                        activeTintColor:'#C62828'
                    }}
                    screenOptions={ ({ route }) => ({
                        tabBarIcon: ({ color }) => screenOptions( route, color)
                    })}
                >
                    <Tab.Screen name="section1" component={Section1} />
                    <Tab.Screen name="section2" component={Section2} />
                </Tab.Navigator>
            </NavigationContainer>
        </Fragment>
    )
}

export default NavTab

const styles = StyleSheet.create({})
