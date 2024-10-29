import React from 'react';
import { View, FlatList, TouchableOpacity, StyleSheet, Text } from 'react-native';

const transactions = [
  { id: '1', name: 'Grocery', amount: '$50', date: '2024-10-01', details: 'Bought groceries from supermarket' },
  { id: '2', name: 'Rent', amount: '$500', date: '2024-10-05', details: 'Paid rent for October' },
  { id: '3', name: 'Electricity Bill', amount: '$60', date: '2024-10-07', details: 'Paid electricity bill for September' },
];

function TransactionListScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.headerTitle}>Transactions</Text>

      <FlatList
        data={transactions}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.transactionItem}
            onPress={() => navigation.navigate('TransactionDetail', { transaction: item })}
          >
            <View style={styles.transactionRow}>
              <Text style={styles.transactionName}>{item.name}</Text>
              <Text style={styles.transactionAmount}>{item.amount}</Text>
            </View>
            <Text style={styles.transactionDate}>{item.date}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#1A1A1A',
  },
  headerTitle: {
    fontSize: 28,  
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#FFFFFF',
  },
  transactionItem: {
    padding: 15,
    backgroundColor: '#2C2C2C',
    borderRadius: 10,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 4,
  },
  transactionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  transactionName: {
    fontSize: 18,
    color: '#FFFFFF',
  },
  transactionAmount: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#9B59B6',
  },
  transactionDate: {
    marginTop: 5,
    color: '#BDC3C7',
  },
});

export default TransactionListScreen;
