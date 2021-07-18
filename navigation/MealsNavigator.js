import React from 'react';

// createAppContainer is used for switching between screens
import { createAppContainer } from 'react-navigation';

// createBottomTabNavigator is needed for the bottom tabs using npm install react-navigation-tabs
import { createBottomTabNavigator } from 'react-navigation-tabs'

// needed for stack navigator - npm install --save react-navigation-stack
import { createStackNavigator } from 'react-navigation-stack';

import { Ionicons } from '@expo/vector-icons';

// import all the screens for the navigator fucntion
import CatergoriesScreen from '../screens/CategoriesScreen';
import CatergoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import Colors from '../constants/Colors';
import FavoritesScreen from '../screens/FavoritesScreen'
import Meal from '../models/meal';

// function from the create stack import to tell App that these are the screens we are able to move between along with the navigation options which gives the header styling
const MealsNavigator = createStackNavigator({
    Categories: {
        screen: CatergoriesScreen,
        navigationOptions: {
            headerStyle: {
                backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : 'white'
            },
            headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor
        }
    },
    CategoryMeals: {
        screen: CatergoryMealsScreen,
        navigationOptions: {
            headerStyle: {
                backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : 'white'
            },
            headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor
        }
    },
    MealDetail: {
        screen: MealDetailScreen,
        navigationOptions: {
            headerStyle: {
                backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : 'white'
            },
            headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor
        }
    }
},
    // you can use defaultNavigationOptions to apply the same style for every single page
    // initalRouteName will tell the app what screen to start out on

    // {
    //    initialRouteName: 'Categories',
    //     defaultNavigationOptions: {
    //         headerStyle: {
    //             backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : 'white'
    //         },
    //         headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor
    //     }
    // }
);


// stack for the favorites page
const FavNavigator = createStackNavigator({
    Favorites: FavoritesScreen,
    MealDetail: MealDetailScreen
}, {
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : 'white'
        },
        headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor
    }
});



// const for adding the tabs to the bottom of the app in the first obj, the second arg object is for styling the tabs
const MealsFavTabNavigator = createBottomTabNavigator({
    Meals: {
        screen: MealsNavigator,
        navigationOptions: {
            tabBarIcon: (tabInfo) => {
                return <Ionicons name='ios-restaurant' size={25} color={tabInfo.tintColor} />
            }
        }
    },
    Favorites: {
        screen: FavNavigator,
        navigationOptions: {
            tabBarIcon: (tabInfo) => {
                return <Ionicons name='ios-star' size={25} color={tabInfo.tintColor} />
            }
        }
    }
}, {
    tabBarOptions: {
        activeTintColor: 'orange'
    }
});

// exporting the MealsFavTabNavigator because the MealsNavigator const is nested within it
export default createAppContainer(MealsFavTabNavigator)