import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Keyboard } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Assuming you're using Expo, for the back arrow icon
import { useNavigation } from '@react-navigation/native';
import Routes from '@utils/Routes';
import { SafeAreaView } from 'react-native-safe-area-context';

const RegistrationComplete = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [referralCode, setReferralCode] = useState('');
  const navigation= useNavigation()

  const handleContinue = () => {
    // Handle the continuation of the registration process
    if (!name) {
      alert('Please enter your name');
      return;
    }
    // Add more validation as needed

    // alert('Proceeding with registration');
    navigation.navigate(Routes.CreatePassword)
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <TouchableOpacity style={styles.backButton} onPress={() => { navigation.goBack() }}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.title}>Hoàn tất đăng ký tài khoản</Text>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Họ tên <Text style={styles.required}>*</Text></Text>
          <TextInput
            style={[styles.input, name && styles.inputActive]}
            placeholder="Họ tên"
            value={name}
            onChangeText={setName}
            returnKeyType={"done"}
            onSubmitEditing={Keyboard.dismiss}
          />
          {name && (
            <TouchableOpacity style={styles.clearButton} onPress={() => setName('')}>
              <Ionicons name="close-circle" size={20} color="#ccc" />
            </TouchableOpacity>
          )}
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Email</Text>
          <TextInput
            style={styles.input}
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            returnKeyType={"done"}
                            onSubmitEditing={Keyboard.dismiss}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Mã giới thiệu</Text>
          <TextInput
            style={styles.input}
            placeholder="Mã giới thiệu"
            value={referralCode}
            onChangeText={setReferralCode}
            returnKeyType={"done"}
                            onSubmitEditing={Keyboard.dismiss}
          />
        </View>
        <TouchableOpacity style={styles.continueButton} onPress={handleContinue}>
          <Text style={styles.continueButtonText}>Tiếp tục</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  backButton: {
    marginBottom: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  inputContainer: {
    marginBottom: 20,
    position: 'relative',
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  required: {
    color: 'red',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 15,
    backgroundColor: '#f2f2f2',
    fontSize: 16,
    height: 50,
  },
  inputActive: {
    borderColor: 'green',
  },
  clearButton: {
    position: 'absolute',
    right: 10,
    top: 35,
  },
  continueButton: {
    backgroundColor: '#2b9060',
    paddingVertical: 15,
    borderRadius: 30,
    alignItems: 'center',
  },
  continueButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default RegistrationComplete;
