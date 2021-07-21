import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

// smooths out feel of app
import { enableScreens } from 'react-native-screens'

// import mealsNavigator file and return it in the jsx to get first page in mealsnavigator file
import MealsNavigator from './navigation/MealsNavigator';

// importing fonts from asset folder-- npm i --save expo-font
import * as Font from 'expo-font';
// npm i expo-app-loading, also for external fonts
import AppLoading from 'expo-app-loading';

import { createStore, combineReducers } from 'redux'
import mealsReducer from './store/reducers/meals'
import { Provider } from 'react-redux'

// smooths out feel of app - line 5
enableScreens()

const rootReducer = combineReducers({
  meals: mealsReducer
})

const store = createStore(rootReducer)

// function to fetch the fonts
const fetchFonts = () => {
  return Font.loadAsync({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
  })
}

export default function App() {

  // state to handle the font loading
  const [fontLoaded, setFontLoaded] = useState(false)

  // if check to make sure font is loaded
  if (!fontLoaded) {
    return <AppLoading
      startAsync={fetchFonts}
      onFinish={() => setFontLoaded(true)}
      onError={(err) => console.log(err)}
    />
  }

  return (
    <Provider store={store}>
      <MealsNavigator />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {

  },
});
