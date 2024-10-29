import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import TransactionListScreen from '../screens/TransactionListScreen';
import TransactionDetailScreen from '../screens/TransactionDetailScreen';

const Stack = createStackNavigator();

function TransactionsStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#5D3FD3',  
        },
        headerTintColor: '#FFFFFF',  
        headerTitleAlign: 'center',  
      }}
    >
      <Stack.Screen 
        name="TransactionList" 
        component={TransactionListScreen} 
        options={{ title: 'MyFinanceApp' }} 
      />
      <Stack.Screen 
        name="TransactionDetail" 
        component={TransactionDetailScreen} 
        options={{ title: 'Transaction Details' }} 
      />
    </Stack.Navigator>
  );
}

export default TransactionsStack;
