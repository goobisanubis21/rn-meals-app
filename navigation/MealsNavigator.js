import { createAppContainer } from 'react-navigation';

// needed for stack navigator - npm install --save react-navigation-stack
import { createStackNavigator } from 'react-navigation-stack';

// import all the screens for the navigator fucntion
import CatergoriesScreen from '../screens/CategoriesScreen';
import CatergoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import Colors from '../constants/Colors';

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

export default createAppContainer(MealsNavigator)