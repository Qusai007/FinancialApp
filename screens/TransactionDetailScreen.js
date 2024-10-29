import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function TransactionDetailScreen({ route }) {
  const { transaction } = route.params;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Transaction Details</Text>
      <View style={styles.detailItem}>
        <Text style={styles.detailLabel}>Name:</Text>
        <Text style={styles.detailValue}>{transaction.name}</Text>
      </View>
      <View style={styles.detailItem}>
        <Text style={styles.detailLabel}>Amount:</Text>
        <Text style={styles.detailValue}>{transaction.amount}</Text>
      </View>
      <View style={styles.detailItem}>
        <Text style={styles.detailLabel}>Date:</Text>
        <Text style={styles.detailValue}>{transaction.date}</Text>
      </View>
      <View style={styles.detailItem}>
        <Text style={styles.detailLabel}>Details:</Text>
        <Text style={styles.detailValue}>{transaction.details}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F0F4F8',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  detailItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  detailLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#555',
  },
  detailValue: {
    fontSize: 16,
    color: '#333',
  },
});

export default TransactionDetailScreen;
