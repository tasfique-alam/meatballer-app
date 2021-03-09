/**
 * Musingoo React Native App
 * https://github.com/muhaimenul/musingoo-app
 *
 * @format
 * @flow strict-local
 */

 import React from 'react'
 import { SafeAreaView, StyleSheet } from 'react-native'
 import Routes from './src/routes'
 
 
 
 
 
 App = () => {
   return (
     <>
       <SafeAreaView style={[styles.safeAreaView]}>
         <Routes />
       </SafeAreaView>
     </>
   );
 }
 
 
 const styles = StyleSheet.create({
   safeAreaView: {
     flex: 1,
   },
 });
 
 export default App;
 