import { createAppContainer } from 'react-navigation';

// needed for stack navigator - npm install --save react-navigation-stack
import { createStackNavigator} from 'react-navigation-stack';

// import all the screens for the navigator fucntion
import CatergoriesScreen from '../screens/CategoriesScreen';
import CatergoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';

// function from the create stack import to tell App that these are the screens we are able to move between
const MealsNavigator = createStackNavigator({
    Categories: CatergoriesScreen,
    CategoryMeals: {
        screen: CatergoryMealsScreen
    },
    MealDetail: MealDetailScreen
});

export default createAppContainer(MealsNavigator)