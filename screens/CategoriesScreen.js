import React from 'react'
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Platform } from 'react-native'

import { CATEGORIES } from '../data/dummy-data'
import Colors from '../constants/Colors'
import CategoryGridTile from '../components/CategoryGridTile'

const CategoriesScreen = (props) => {

    const renderGridItem = (itemData) => {
        return (

            // to send data from one page to the next use params within the .natigate({})
            <CategoryGridTile
                title={itemData.item.title}
                color={itemData.item.color}
                onSelect={() => {
                    props.navigation.navigate({
                        routeName: 'CategoryMeals',
                        params: {
                            categoryId: itemData.item.id
                        }
                    })
                }} />
        )
    }


    return (
        // <View style={styles.screen}>
        //     <Text>Categories Screen</Text>

        // in order to go to another screen create this button with the inline function within the onPress
        // <Button title='Go to Meals'
        //     onPress={() => {
        //         props.navigation.navigate({ routeName: 'CategoryMeals' })

        // .push() is another way to do this
        // props.navigation.push('CategoryMeals')

        // .replace() will not add a new screen to the stack allowing you to go back but change the stack to a new starting page completely- ex a login screen should be .replace() by the home screen after user logs in
        // props.navigation.repalce('CategoryMeals')
        //         }} />
        // </View>

        <FlatList
            keyExtractor={(item, index) => item.id}
            data={CATEGORIES}
            renderItem={renderGridItem}
            numColumns={2}
        />
    )
}

// changes the header title
CategoriesScreen.navigationOptions = {
    headerTitle: 'Meal Categories'
}

export default CategoriesScreen

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
})
