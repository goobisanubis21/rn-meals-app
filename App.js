import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

// importing fonts from asset folder-- npm i --save expo-font
import * as Font from 'expo-font';
// npm i expo-app-loading, also for external fonts
import AppLoading from 'expo-app-loading';

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
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {

  },
});
