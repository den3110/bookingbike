import { useNavigation } from '@react-navigation/native';
import Routes from '@utils/Routes';
import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, Alert, TouchableHighlight } from 'react-native';
import OTPTextInput from 'react-native-otp-textinput';

const OTPVerification = () => {
  const [code, setCode] = useState('');
  const [timer, setTimer] = useState(30);
  const navigate= useNavigation()

  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => {
        setTimer(timer - 1);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [timer]);

  const handleResend = () => {
    setTimer(30);
    // Logic to resend OTP
  };

  const handleSubmit = () => {
    // Logic to verify OTP
    if (code.length === 4) {
    //   Alert.alert('OTP Submitted', `You entered: ${code}`);
    navigate.navigate(Routes.RegistrationComplete)
    } else {
      Alert.alert('Invalid OTP', 'Please enter a valid 4-digit OTP.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Xác thực OTP</Text>
      <Image
        source={require('../../../assets/images/otp_icon.png')}
        style={styles.image}
      />
      <Text style={styles.instructions}>
        Nhập mã gồm 4 chữ số mà bạn đã nhận được qua SMS +84 xxx xx
      </Text>
      <OTPTextInput
        containerStyle={styles.codeContainer}
        textInputStyle={styles.codeInput}
        handleTextChange={(text) => setCode(text)}
        inputCount={4}
        tintColor="#ccc"
        returnKeyType={"done"}
      />
      <TouchableOpacity style={styles.button} onPress={handleResend} disabled={timer > 0}>
        <Text style={styles.buttonText}>
          Gửi lại mã {timer > 0 ? `(${timer})` : ''}
        </Text>
      </TouchableOpacity>
      <TouchableHighlight style={[styles.button, styles.submitButton]} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Xác thực</Text>
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 20,
    objectFit: "contain"
  },
  instructions: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
    color: '#666',
  },
  codeContainer: {
    marginBottom: 20,
  },
  codeInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    textAlign: 'center',
    fontSize: 24,
    borderRadius: 10,
    backgroundColor: '#f2f2f2',
  },
  button: {
    padding: 15,
    backgroundColor: '#ddd',
    borderRadius: 10,
    marginTop: 10,
  },
  submitButton: {
    backgroundColor: '#2b9060',

  },
  buttonText: {
    fontSize: 18,
    color: '#fff',
  },
});

export default OTPVerification;
