import React from 'react'
import { CATEGORIES, MEALS } from '../data/dummy-data'
import MealList from '../components/MealList'
const CategoryMealsScreen = (props) => {

    

    // to get the data from the naviagte({}) use getParam
    const catId = props.navigation.getParam('categoryId')
    // const selectedCategory = CATEGORIES.find(cat => cat.id === catId)

    const displayedMeals = MEALS.filter(meal => meal.categoryIds.indexOf(catId) >= 0)

    return (
        <MealList listData={displayedMeals} navigation={props.navigation} />
    )
}

// this function is dynamically setting the title of the page to be the params title that is being clicked on in the previous screen
CategoryMealsScreen.navigationOptions = (navigationData) => {

    navigationData.navigation.getParam('categoryId')
    const catId = navigationData.navigation.getParam('categoryId')
    const selectedCategory = CATEGORIES.find(cat => cat.id === catId)

    return {
        headerTitle: selectedCategory.title,

    }
}

export default CategoryMealsScreen
