import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import OTPTextInput from 'react-native-otp-textinput'; // Import the OTPTextInput component
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import Routes from '@utils/Routes';

const CreatePassword = () => {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigation= useNavigation()

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleContinue = () => {
    // Handle password submission logic
    // alert('Password set: ' + password);
    navigation.navigate(Routes.VerifyPassword)
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tạo mật khẩu</Text>
      <View style={styles.passwordContainer}>
        <Text style={styles.instructions}>Nhập mật khẩu của bạn</Text>
        <TouchableOpacity onPress={togglePasswordVisibility}>
          <Text style={styles.showHideText}>{showPassword ? 'Ẩn' : 'Hiện'}</Text>
        </TouchableOpacity>
      </View>
      <OTPTextInput
        handleTextChange={(text) => setPassword(text)}
        inputCount={6}
        tintColor="#2b9060"
        offTintColor="#ccc"
        containerStyle={styles.passwordInputContainer}
        textInputStyle={styles.passwordInput}
        secureTextEntry={!showPassword}
      />
      <TouchableOpacity style={styles.continueButton} onPress={handleContinue}>
        <Text style={styles.continueButtonText}>Tiếp tục</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  passwordContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  instructions: {
    fontSize: 16,
    color: '#666',
  },
  showHideText: {
    fontSize: 16,
    color: 'green',
  },
  passwordInputContainer: {
    marginBottom: 40,
  },
  passwordInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    backgroundColor: '#f2f2f2',
    fontSize: 24,
    height: 50,
    width: 50,
    textAlign: 'center',
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

export default CreatePassword;
