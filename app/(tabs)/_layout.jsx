import { Ionicons, Octicons} from '@expo/vector-icons'
import { Tabs } from 'expo-router'
import React from 'react'
import { TouchableOpacity } from 'react-native'
import { Text } from 'react-native'

const TabsLayout = () => {
  return (
    <Tabs screenOptions={{
      tabBarActiveTintColor: "red",
    }}>
        <Tabs.Screen name='index' options={{
          title: 'Home',
          headerTitle: 'Home',
          headerLargeTitle: false,
          headerShown: false,
          tabBarIcon: ({color, size, focused}) => {
            return <Ionicons name='home' size={size} color={color} /> 
          }
        }} />
        
        <Tabs.Screen name='Radio' options={{
          title: 'Radio',
          headerTitle: 'Radio',
          headerLargeTitle: true,
          headerShown: false,
          tabBarIcon: ({color, size, focused}) => {
            return <Ionicons name='radio' size={size} color={color} /> 
          },


        }}/>
        <Tabs.Screen name='Library' options={{
          title: 'Library',
          headerTitle: 'Library',
          headerLargeTitle: true,
          headerShown: false,         tabBarIcon: ({color, size, focused}) => {
            return <Ionicons name='bag' size={size} color={color} /> 
          },


        }} />
        <Tabs.Screen name='Search' options={{
          title: 'Search',
          headerTitle: 'Search',
          headerLargeTitle: true,
          headerShown: false,
          tabBarIcon: ({color, size, focused}) => {
            return <Ionicons name='search' size={size} color={color} /> 
          },


        }} />
    </Tabs>
  )
}

export default TabsLayout

// const styles = StyleSheet.create({})