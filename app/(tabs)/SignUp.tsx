// SignUpScreen.tsx
import React, { useState } from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity, Text, Alert, ScrollView } from 'react-native';

const SignUpScreen = ({ navigation }: { navigation: any }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [address, setAddress] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = () => {
    // Placeholder logic for sign-up validation
    Alert.alert("Sign Up Successful", "Your account has been created.");
    // Navigate to login or directly into the app
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Sign Up</Text>
      <TextInput style={styles.input} placeholder="Name" value={name} onChangeText={setName} placeholderTextColor="#999" />
      <TextInput style={styles.input} placeholder="Email" value={email} onChangeText={setEmail} placeholderTextColor="#999" keyboardType="email-address" />
      <TextInput style={styles.input} placeholder="Contact Number" value={contactNumber} onChangeText={setContactNumber} placeholderTextColor="#999" keyboardType="phone-pad" />
      <TextInput style={styles.input} placeholder="Address" value={address} onChangeText={setAddress} placeholderTextColor="#999" />
      <TextInput style={styles.input} placeholder="Password" value={password} onChangeText={setPassword} secureTextEntry placeholderTextColor="#999" />
      <TouchableOpacity onPress={handleSignUp} style={styles.button}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text style={styles.switchText}>Already have an account? Log In</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

// Reuse and adjust styles from LoginScreen, particularly for `container`, `input`, `button`, `buttonText`, and `switchText` for consistency.
const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      padding: 20,
      backgroundColor: '#FFF8F0',
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      color: '#FF7F50',
      marginBottom: 20,
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
    button: {
      width: '100%',
      padding: 15,
      backgroundColor: '#FF7F50',
      borderRadius: 5,
      alignItems: 'center',
      marginTop: 20,
    },
    buttonText: {
      color: '#FFFFFF',
      fontSize: 16,
      fontWeight: 'bold',
    },
    switchText: {
      marginTop: 20,
      color: '#FF7F50',
      fontWeight: 'bold',
    },
  });
  