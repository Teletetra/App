import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import * as Location from 'expo-location';
import { Ionicons } from '@expo/vector-icons'; // Built into Expo

export default function LocationPrompt({ navigation }: any) {
  const [loading, setLoading] = useState(false);

  const requestLocationPermission = async () => {
    setLoading(true);
    try {
      // 1. Ask for permission
      let { status } = await Location.requestForegroundPermissionsAsync();
      
      if (status !== 'granted') {
        Alert.alert(
          "Permission Denied",
          "We need your location to show serviceable washermen in your area.",
          [{ text: "OK" }]
        );
        setLoading(false);
        return;
      }

      // 2. Get the actual location
      let location = await Location.getCurrentPositionAsync({});
      console.log("Location saved:", location.coords);
      
      // TODO: Save this to your backend, Context, or AsyncStorage here.
      
      // 3. Move to the Home Screen
      navigation.navigate('MainApp');

    } catch (error) {
      console.error("Error fetching location:", error);
      Alert.alert("Error", "Could not fetch location. Please try entering it manually.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Whats your location?</Text>
        <Text style={styles.subtitle}>We need your location to show you our serviceable hubs.</Text>
      </View>

      {/* 3D City Illustration Placeholder */}
      <View style={styles.imageContainer}>
        {/* Replace this View with an actual <Image source={require('../../assets/city.png')} /> */}
        <View style={styles.placeholderCity}>
          <Text style={{color: '#8E8E93'}}>3D City Image Goes Here</Text>
        </View>
      </View>

      <View style={styles.footer}>
        <TouchableOpacity
          style={styles.primaryButton} 
          onPress={requestLocationPermission}
          disabled={loading}
        >
          <Ionicons name="locate" size={20} color="#FFF" style={styles.buttonIcon} />
          <Text style={styles.primaryButtonText}>
            {loading ? "Locating..." : "Use current location"}
          </Text>
        </TouchableOpacity>
        

        <TouchableOpacity onPress={() => console.log("Navigate to manual search")}>
          <Text style={styles.secondaryButtonText}>Enter location manually</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFFFFF', padding: 24, justifyContent: 'space-between' },
  header: { marginTop: 40 },
  title: { fontSize: 28, fontWeight: 'bold', color: '#1A1A1A', marginBottom: 10 },
  subtitle: { fontSize: 16, color: '#8E8E93', lineHeight: 24 },
  imageContainer: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  placeholderCity: { width: '100%', height: 250, backgroundColor: '#E5F1FF', borderRadius: 20, justifyContent: 'center', alignItems: 'center' },
  footer: { paddingBottom: 20 },
  primaryButton: { backgroundColor: '#007AFF', height: 56, borderRadius: 12, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginBottom: 20 },
  buttonIcon: { marginRight: 8 },
  primaryButtonText: { color: '#FFFFFF', fontSize: 16, fontWeight: 'bold' },
  secondaryButtonText: { color: '#007AFF', fontSize: 16, fontWeight: 'bold', textAlign: 'center' },
});