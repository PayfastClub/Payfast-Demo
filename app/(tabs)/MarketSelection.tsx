import React from 'react';
import { StyleSheet, View, FlatList, Text, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

// Dummy data for the list of stores
const stores = [
  { id: '1', name: 'Store A', address: '123 Main St', icon: 'store' },
  { id: '2', name: 'Store B', address: '456 Elm St', icon: 'local-grocery-store' },
  { id: '3', name: 'Store C', address: '789 Pine St', icon: 'shopping-basket' },
  // Add more stores as needed
];

const StoreSelectionScreen = () => {
const renderItem = ({ item }: { item: any }) => (
    <TouchableOpacity style={styles.card}>
        <View style={styles.iconContainer}>
            <MaterialIcons name={item.icon} size={40} color="#FF7F50" />
        </View>
        <View style={styles.infoContainer}>
            <Text style={styles.storeName}>{item.name}</Text>
            <Text style={styles.storeAddress}>{item.address}</Text>
        </View>
    </TouchableOpacity>
);

  return (
    <View style={styles.container}>
      <FlatList
        data={stores}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF8F0',
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFAF0',
    borderRadius: 10,
    marginVertical: 8,
    marginHorizontal: 16,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  iconContainer: {
    marginRight: 16,
  },
  infoContainer: {
    flex: 1,
  },
  storeName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FF7F50',
  },
  storeAddress: {
    fontSize: 14,
    color: '#555',
  },
});

export default StoreSelectionScreen;
