import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'

const CategoryMealsScreen = (props) => {
    return (
        <View style={styles.screen}>
            <Text>Category Meal Screen</Text>

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

export default CategoryMealsScreen

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
