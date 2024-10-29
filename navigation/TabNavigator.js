import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TransactionsStack from './TransactionsStack';
import SummaryScreen from '../screens/SummaryScreen';
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator
    screenOptions={{
        tabBarActiveTintColor: '#F4D03F',  
        tabBarInactiveTintColor: '#D1D1E9',  
        tabBarStyle: {
          backgroundColor: '#5D3FD3',  
        },
        headerStyle: {
          backgroundColor: '#5D3FD3',  
        },
        headerTintColor: '#FFFFFF', 
        headerTitleAlign: 'center',  
      }}>
      <Tab.Screen 
        name="Transactions" 
        component={TransactionsStack} 
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="list-outline" color={color} size={size} />
          ),
          headerShown: false, 
        }}
      />
      <Tab.Screen 
        name="MyFinanceApp" 
        component={SummaryScreen} 
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="pie-chart-outline" color={color} size={size} />
          ),
          headerTitleAlign: 'center', 
        }}
      />
    </Tab.Navigator>
  );
}

export default TabNavigator;
