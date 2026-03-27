import React, { useState } from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

export default function LoginScreen({ navigation }: any) {
  const [phoneNumber, setPhoneNumber] = useState('');

  const signInWithPhoneNumber = async () => {
    try {
      if (phoneNumber.length < 10) {
        alert('Please enter a valid phone number');
        return;
      }

      const formattedNumber = `+91${phoneNumber}`;
      console.log('Sending OTP to:', formattedNumber);
      navigation.navigate('LocationPrompt');
    } catch (error) {
      console.error('Login Error:', error);
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}>
      <ScrollView bounces={false} contentContainerStyle={styles.scrollContent}>
        <View style={styles.headerBackground}>
          <TouchableOpacity style={styles.skipButton}>
            <Text style={styles.skipText}>Skip login</Text>
          </TouchableOpacity>
          <Text style={styles.logoText}>Washerman</Text>
          <Text style={styles.subtitleText}>Get professional{'\n'}laundry help in minutes!</Text>
        </View>

        <View style={styles.imageGrid}>
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <View key={item} style={styles.imagePlaceholder} />
          ))}
        </View>

        <View style={styles.formContainer}>
          <Text style={styles.formTitle}>Log in or Sign up</Text>

          <View style={styles.inputContainer}>
            <Text style={styles.countryCode}>+91</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter mobile number"
              placeholderTextColor="#8E8E93"
              keyboardType="phone-pad"
              maxLength={10}
              value={phoneNumber}
              onChangeText={setPhoneNumber}
            />
          </View>

          <TouchableOpacity
            style={[
              styles.continueButton,
              phoneNumber.length === 10 ? styles.buttonActive : styles.buttonInactive,
            ]}
            onPress={signInWithPhoneNumber}
            disabled={phoneNumber.length < 10}>
            <Text
              style={[
                styles.continueButtonText,
                phoneNumber.length === 10 ? styles.textActive : styles.textInactive,
              ]}>
              Continue
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFFFFF' },
  scrollContent: { flexGrow: 1 },
  headerBackground: {
    backgroundColor: '#007AFF',
    paddingTop: 60,
    paddingBottom: 40,
    paddingHorizontal: 20,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    alignItems: 'center',
  },
  skipButton: {
    position: 'absolute',
    top: 50,
    right: 20,
    backgroundColor: 'rgba(0,0,0,0.2)',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 20,
  },
  skipText: { color: '#FFF', fontWeight: '600', fontSize: 14 },
  logoText: { color: '#FFF', fontSize: 40, fontWeight: '900', marginBottom: 10 },
  subtitleText: { color: '#FFF', fontSize: 20, fontWeight: '600', textAlign: 'center', lineHeight: 28 },
  imageGrid: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', marginTop: -20, paddingHorizontal: 10 },
  imagePlaceholder: { width: '30%', height: 100, backgroundColor: '#E5F1FF', margin: '1.5%', borderRadius: 12 },
  formContainer: { padding: 24, marginTop: 20 },
  formTitle: { fontSize: 24, fontWeight: 'bold', color: '#1A1A1A', textAlign: 'center', marginBottom: 24 },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 12,
    paddingHorizontal: 16,
    height: 56,
    marginBottom: 20,
  },
  countryCode: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1A1A1A',
    marginRight: 10,
    borderRightWidth: 1,
    borderRightColor: '#E0E0E0',
    paddingRight: 10,
  },
  input: { flex: 1, fontSize: 16, color: '#1A1A1A' },
  continueButton: { height: 56, borderRadius: 12, justifyContent: 'center', alignItems: 'center' },
  buttonActive: { backgroundColor: '#007AFF' },
  buttonInactive: { backgroundColor: '#D1D1D6' },
  continueButtonText: { fontSize: 16, fontWeight: 'bold' },
  textActive: { color: '#FFFFFF' },
  textInactive: { color: '#FFFFFF', opacity: 0.7 },
});