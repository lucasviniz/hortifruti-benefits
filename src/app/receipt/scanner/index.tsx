import React, { useEffect, useRef, useState } from 'react';
import { SafeAreaView, View, Text, TouchableOpacity, StyleSheet, StatusBar, Vibration, ActivityIndicator, Button, Linking, AppState } from 'react-native';
import { Camera, CameraType, BarcodeScanningResult, CameraView, useCameraPermissions } from 'expo-camera';
import { Feather } from '@expo/vector-icons';
import { router, useRouter } from 'expo-router';
import { styles } from './styles';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function QrScannerScreen() {
    const qrLock = useRef(false);
    const appState = useRef(AppState.currentState);
  
    const [hasPermission, setHasPermission] = useState<boolean | null>(null);
    const [scanned, setScanned] = useState(false);
  
  
    const requestCameraPermission = async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
    };
  
    useEffect(() => {
      requestCameraPermission();
      const subscription = AppState.addEventListener("change", (nextAppState) => {
          if (
            appState.current.match(/inactive|background/) &&
            nextAppState === "active"
          ) {
            qrLock.current = false;
          }
          appState.current = nextAppState;
        });
    
        return () => {
          subscription.remove();
        };
    }, []);
  
    const handleBarcodeScanned = ({ type, data } : {type: any, data: any}) => {
  
      if (data && !qrLock.current) {
          qrLock.current = true;
          setTimeout(async () => {
            setScanned(true);
            await router.push('/receipt/details?receipt=123456&amount=48.90&date=2025-03-30');
          }, 500);
      }
    };
  
    if (hasPermission === null) {
      return  (
          <SafeAreaProvider>
              <SafeAreaView className="flex justify-center items-start">
                  <ActivityIndicator size="large" />
                  </SafeAreaView>
          </SafeAreaProvider>
      )
    }
    if (hasPermission === false) {
      return (
          <View className="w-full h-full flex justify-center items-center bg-yellow-200">
              <Text className="font-bold text-lg text-neutral-900">Ops! No access to camera</Text>
              <Text className="font-bold text-lg text-neutral-900">You need to allow access to your camera to continue</Text>
              <Button title="Tentar Novamente" onPress={requestCameraPermission} />
              <Button
                  title="Abrir Configurações"
                  onPress={() => Linking.openSettings()}
                  color="red"
              />
              <Button title="Voltar" onPress={() => router.back()} />
          </View>
      )
          
    }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />

      {/* Camera Preview */}
      <CameraView
        style={StyleSheet.absoluteFill}
        facing="back"
        onBarcodeScanned={scanned ? undefined : handleBarcodeScanned}
        barcodeScannerSettings={{
          barcodeTypes: ["qr", "pdf417"],
        }}
      />

      {/* Top bar */}
      <View style={styles.topBar}>
        <TouchableOpacity onPress={() => router.back()}>
          <Feather name="arrow-left" size={22} color="#FFFFFF" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.torchBtn} onPress={() => console.log("touch")}>
          <Feather name="zap" size={18} color="#FFFFFF" />
        </TouchableOpacity>
      </View>

      {/* Overlay Frame */}
      <View style={styles.qrFrameContainer}>
        <View style={styles.qrFrame} />
      </View>

      {/* Bottom actions */}
      <View style={styles.bottomSection}>
        <Text style={styles.instruction}>Position the QR code within the frame</Text>

        <TouchableOpacity
          style={styles.manualBtn}
          onPress={() => router.push('/receipt/register')}
        >
          <Text style={styles.manualText}>Enter Manual Receipt</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
