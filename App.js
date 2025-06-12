// App.js
import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import Auth from './Auth'; // your Auth component
import { auth } from './firebase'; // import auth instance (even if unused here, good to have ready)

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Auth />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
