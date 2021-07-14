import React from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import { CATEGORIES, MEALS } from '../data/dummy-data'
import MealItem from '../components/MealItem'

const CategoryMealsScreen = (props) => {

    const renderMealItem = (itemData) => {
        return (
            <MealItem 
                title={itemData.item.title}
                image={itemData.item.imageUrl}
                onSelectMeal={() => {}}
                duration={itemData.item.duration}
                complexity={itemData.item.complexity}
                affordability={itemData.item.affordability}
            />
        )
    }

    // to get the data from the naviagte({}) use getParam
    const catId = props.navigation.getParam('categoryId')
    // const selectedCategory = CATEGORIES.find(cat => cat.id === catId)

    const displayedMeals = MEALS.filter(meal => meal.categoryIds.indexOf(catId) >= 0)

    return (
        <View style={styles.screen}>
            <FlatList 
                data={displayedMeals} 
                keyExtractor={(item, index) => item.id} 
                renderItem={renderMealItem} 
                style={{width:'100%'}}
            />
        </View>
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

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
