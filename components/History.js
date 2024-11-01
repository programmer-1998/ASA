import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Alert } from "react-native";
import React, { useEffect } from "react";
import * as Notifications from "expo-notifications";
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);

export default function History() {
  const registerForPushNotificationsAsync = async () => {
    const { status: initialStatus } = await Notifications.getPermissionsAsync();
    let finalStatus = initialStatus;

    if (initialStatus !== "granted") {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }

    if (finalStatus !== "granted") {
      alert("Failed to get push token for push notification!");
      return;
    }

    const tokenData = await Notifications.getExpoPushTokenAsync();
    const token = tokenData.data;
    console.log("Expo Push Token:", token); // Use console.log to confirm token retrieval
    return token;
  };

  useEffect(() => {
    // Register for push notifications
    registerForPushNotificationsAsync();

    // Listen for foreground notifications
    const subscription = Notifications.addNotificationReceivedListener(
        (notification) => {
          Alert.alert("A new message arrived!", JSON.stringify(notification));
        }
    );

    // Clean up the listener
    return () => subscription.remove();
  }, []);

  return (
      <View style={styles.container}>
        <Text>a test screen for notification</Text>
        <StatusBar style="auto" />
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
