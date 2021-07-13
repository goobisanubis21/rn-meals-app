import React from 'react'
import { Button, StyleSheet, Text, View, Platform } from 'react-native'
import { CATEGORIES } from '../data/dummy-data'
import CategoriesScreen from './CategoriesScreen'
import Colors from '../constants/Colors'

const CategoryMealsScreen = (props) => {

    // to get the data from the naviagte({}) use getParam
    const catId = props.navigation.getParam('categoryId')
    const selectedCategory = CATEGORIES.find(cat => cat.id === catId)

    return (
        <View style={styles.screen}>
            <Text>Category Meal Screen</Text>
            <Text>{selectedCategory.title}</Text>

            <Button title='Go to Details'
                onPress={() => {
                    props.navigation.navigate({ routeName: 'MealDetail' })
                }} />

            {/* custom button to go back to previous page */}
            <Button title='Go Back' onPress={() => {
                props.navigation.goBack()
            }} />
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
