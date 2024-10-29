import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// Sample transaction data (can import or fetch in a real app)
const transactions = [
  { id: '1', name: 'Grocery', amount: '$50', date: '2024-10-01' },
  { id: '2', name: 'Rent', amount: '$500', date: '2024-10-05' },
  { id: '3', name: 'Electricity Bill', amount: '$60', date: '2024-10-07' },
];

function SummaryScreen() {
  const totalExpenses = transactions.reduce((total, transaction) => total + parseFloat(transaction.amount.slice(1)), 0);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Summary</Text>
      <View style={styles.summaryBox}>
        <Text style={styles.totalExpenseLabel}>Total Expenses</Text>
        <Text style={styles.totalExpenseValue}>${totalExpenses}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#1A1A1A',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#FFFFFF',
  },
  summaryBox: {
    padding: 30,
    backgroundColor: '#2C2C2C',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 4,
  },
  totalExpenseLabel: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  totalExpenseValue: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#9B59B6',
  },
});

export default SummaryScreen;
