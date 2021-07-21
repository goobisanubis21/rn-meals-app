import React, {useEffect, useCallback} from 'react'
import { Button, StyleSheet, Text, View, ScrollView, Image } from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import HeaderButton from '../components/HeaderButton'
import { useSelector, useDispatch } from 'react-redux'
import { toggleFavorite } from '../store/actions/meals'

const MealDetailScreen = (props) => {

    const availableMeals = useSelector(state => state.meals.meals)

    const mealId = props.navigation.getParam('mealId')

    const selectedMeal = availableMeals.find(meal => meal.id === mealId)

    const dispatch = useDispatch()

    const toggleFavoriteHandler = useCallback(() => {
        dispatch(toggleFavorite(mealId))
    }, [dispatch, mealId])

    useEffect(() => {
        props.navigation.setParams({ mealTitle: selectedMeal.title })
    }, [selectedMeal])

    useEffect(() => {
        props.navigation.setParams({toggleFav: toggleFavoriteHandler})
    }, [toggleFavoriteHandler])


    return (
        <ScrollView>
            <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
            <View style={styles.details}>
                <Text>{selectedMeal.duration}m</Text>
                <Text>{selectedMeal.complexity.toUpperCase()}</Text>
                <Text>{selectedMeal.affordability.toUpperCase()}</Text>
            </View>
            <Text style={styles.title}>Ingredients</Text>
            <Text style={styles.listItem}>{selectedMeal.ingredients.map(ingredient => <Text key={ingredient}>{ingredient}</Text>)}</Text>
            <Text style={styles.title}>Steps</Text>
            <Text style={styles.listItem}>{selectedMeal.steps.map(step => <Text key={step}>{step}</Text>)}</Text>
        </ScrollView>
    )
}

MealDetailScreen.navigationOptions = (navigationData) => {
    // const mealId = navigationData.navigation.getParam('mealId')
    const mealTitle = navigationData.navigation.getParam('mealTitle')
    const toggleFavorite = navigationData.navigation.getParam('toggleFav')
    // const selectedMeal = MEALS.find(meal => meal.id === mealId)

    return {
        headerTitle: mealTitle,
        headerRight: <HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item title='Favorite' iconName='ios-star' onPress={toggleFavorite} />
        </HeaderButtons>
    }
}

export default MealDetailScreen

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 200
    },
    details: {
        flexDirection: 'row',
        padding: 15,
        justifyContent: 'space-around'
    },
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 22,
        textAlign: 'center'
    },
    listItem: {
        marginVertical: 10,
        marginHorizontal: 20,
        borderColor: '#ccc',
        borderWidth: 1,
        padding: 10
    }
})
