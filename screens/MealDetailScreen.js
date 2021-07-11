import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'

const MealDetailScreen = (props) => {
    return (
        <View style={styles.screen}>
            <Text>Meal Detail</Text>

            {/* function to go all the way back to the first screen within the stack */}
            <Button title='Go Back to Categories' onPress={() => {
                props.navigation.popToTop()
            }} />
        </View>
    )
}

export default MealDetailScreen

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
