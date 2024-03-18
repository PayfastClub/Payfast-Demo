import React, { useState } from 'react';
import { StyleSheet, ScrollView, TextInput, TouchableOpacity, Text, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function ProfileScreen() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [address, setAddress] = useState('');
  const [password, setPassword] = useState('');

  const [cardNumber, setCardNumber] = useState('');
  const [nameOnCard, setNameOnCard] = useState('');
  const [expirationDate, setExpirationDate] = useState('');
  const [cvv, setCVV] = useState('');

  const saveProfile = () => {
    // Implement save logic here
    console.log('Saving profile...');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.profileSection}>
        <Text style={styles.sectionTitle}>Profile Information</Text>
        <MaterialIcons name="account-circle" size={100} color="#FFA07A" />
        <TextInput style={styles.input} placeholder="Name" value={name} onChangeText={setName} placeholderTextColor="#555" />
        <TextInput style={styles.input} placeholder="Email" value={email} onChangeText={setEmail} placeholderTextColor="#555" />
        <TextInput style={styles.input} placeholder="Contact Number" value={contactNumber} onChangeText={setContactNumber} placeholderTextColor="#555" />
        <TextInput style={styles.input} placeholder="Address" value={address} onChangeText={setAddress} placeholderTextColor="#555" />
        <TextInput style={styles.input} placeholder="Password" value={password} onChangeText={setPassword} secureTextEntry placeholderTextColor="#555" />
      </View>

      <View style={styles.paymentSection}>
        <Text style={styles.sectionTitle}>Payment Information</Text>
        <TextInput style={styles.input} placeholder="Card Number" value={cardNumber} onChangeText={setCardNumber} placeholderTextColor="#555" />
        <TextInput style={styles.input} placeholder="Name on Card" value={nameOnCard} onChangeText={setNameOnCard} placeholderTextColor="#555" />
        <TextInput style={styles.input} placeholder="Expiration Date (MM/YY)" value={expirationDate} onChangeText={setExpirationDate} placeholderTextColor="#555" />
        <TextInput style={styles.input} placeholder="CVV" value={cvv} onChangeText={setCVV} secureTextEntry placeholderTextColor="#555" />
      </View>

      <TouchableOpacity onPress={saveProfile} style={styles.saveButton}>
        <Text style={styles.saveButtonText}>Save</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#FFF8F0',
  },
  profileSection: {
    marginBottom: 30,
  },
  paymentSection: {
    marginBottom: 30,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FF7F50',
    marginBottom: 15,
  },
  input: {
    height: 50,
    width: '100%',
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#FFA07A',
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#FFFAF0',
    color: '#555',
  },
  saveButton: {
    backgroundColor: '#FF7F50',
    padding: 15,
    borderRadius: 5,
    width: '100%',
    alignItems: 'center',
    marginTop: 10,
  },
  saveButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
