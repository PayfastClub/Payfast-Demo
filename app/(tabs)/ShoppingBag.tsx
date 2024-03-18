import React, { useState } from 'react';
import { StyleSheet, View, FlatList, Text, Button, TouchableOpacity, Dimensions } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

interface Item {
  id: string;
  name: string;
  price: string;
  quantity: number;
}

const initialItems: Item[] = [
  { id: '1', name: 'Product 1', price: '10.00', quantity: 1 },
  { id: '2', name: 'Product 2', price: '15.00', quantity: 2 },
  // Add more initial items as needed
];

export default function ShoppingBagScreen() {
  const [items, setItems] = useState<Item[]>(initialItems);

  const deleteItem = (itemId: string) => {
    setItems(items.filter(item => item.id !== itemId));
  };

  const incrementQuantity = (itemId: string) => {
    setItems(items.map(item => item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item));
  };

  const decrementQuantity = (itemId: string) => {
    setItems(items.map(item => {
      if (item.id === itemId) {
        return { ...item, quantity: item.quantity > 1 ? item.quantity - 1 : 1 };
      }
      return item;
    }));
  };

  const renderItem = ({ item }: { item: Item }) => (
    <View style={styles.itemContainer}>
      <MaterialIcons name="shopping-basket" size={50} color="#FF5722" />
      <View style={styles.itemInfo}>
        <Text style={styles.itemName}>{item.name}</Text>
        <Text style={styles.itemPrice}>${item.price}</Text>
        <View style={styles.quantityContainer}>
          <TouchableOpacity onPress={() => decrementQuantity(item.id)} style={styles.quantityButton}>
            <Text>-</Text>
          </TouchableOpacity>
          <Text style={styles.quantity}>{item.quantity}</Text>
          <TouchableOpacity onPress={() => incrementQuantity(item.id)} style={styles.quantityButton}>
            <Text>+</Text>
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity onPress={() => deleteItem(item.id)} style={styles.deleteButton}>
        <MaterialIcons name="delete" size={24} color="white" />
      </TouchableOpacity>
    </View>
  );

  const addNewItem = () => {
    console.log('Add new item');
    // Implement the logic to add a new item here
  };

  const finishShopping = () => {
    console.log('Finish shopping');
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={items}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
      <TouchableOpacity onPress={addNewItem} style={styles.addButton}>
        <Text style={styles.addButtonText}>+ Add Item</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={finishShopping} style={styles.addButton}>
        <Text style={styles.addButtonText}>Finish Shopping</Text>
        </TouchableOpacity>
    </View>
  );
}

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF'
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF8F0',
    borderRadius: 10,
    padding: 10,
    marginVertical: 5,
    marginHorizontal: 10,
  },
  itemInfo: {
    flex: 1,
    marginLeft: 10,
  },
  itemName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  itemPrice: {
    fontSize: 16,
    color: '#FF5722',
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  quantityButton: {
    borderWidth: 1,
    borderColor: '#FFCCBC',
    borderRadius: 5,
    padding: 5,
    marginHorizontal: 5,
  },
  quantity: {
    fontSize: 16,
  },
  deleteButton: {
    padding: 8,
    backgroundColor: '#FF5722',
    borderRadius: 5,
    marginLeft: 10,
  },
  addButton: {
    backgroundColor: '#FF5722',
    padding: 10,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20,
  },
  addButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
  separator: {
    height: 10,
    width: width - 20,
    alignSelf: 'center',
  },
});
