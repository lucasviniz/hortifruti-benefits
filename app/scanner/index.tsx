import React, { useState, useEffect, useRef } from "react";
import { Text, View, StyleSheet, Button, ActivityIndicator, Linking, AppState, StatusBar, Platform } from "react-native";
import { CameraView, Camera } from "expo-camera";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { router, Stack } from "expo-router";
import { Overlay } from "./overlay";

export default function App() {
 
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
          await router.push(data);
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
    <SafeAreaView style={StyleSheet.absoluteFillObject}>
        <Stack.Screen
        options={{
            title: "Overview",
            headerShown: false,
        }}
        />
        {Platform.OS === "android" ? <StatusBar hidden /> : null}

      <CameraView
        onBarcodeScanned={scanned ? undefined : handleBarcodeScanned}
        barcodeScannerSettings={{
          barcodeTypes: ["qr", "pdf417"],
        }}
        style={StyleSheet.absoluteFillObject}
      />
     <Overlay />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
  },
});