import React, { useEffect, useState } from "react";
import { Text, SafeAreaView, Alert, Platform } from "react-native";
import { PermissionsAndroid } from "react-native";
import { request, PERMISSIONS, RESULTS } from "react-native-permissions";
import { WebView } from "react-native-webview";

const App = () => {
  const [hasPermission, setHasPermission] = useState(false);

  useEffect(() => {
    // Request camera permission when the component loads
    requestCameraPermission();
  }, []);

  // Function to request camera permission
  const requestCameraPermission = async () => {
    try {
      if (Platform.OS === "android") {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.CAMERA
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          setHasPermission(true);
          Alert.alert("Permission Granted", "You can now access the camera.");
        } else {
          setHasPermission(false);
          Alert.alert(
            "Permission Denied",
            "Camera permission is required to use this feature."
          );
        }
      } else if (Platform.OS === "ios") {
        const status = await request(PERMISSIONS.IOS.CAMERA);
        if (status === RESULTS.GRANTED) {
          setHasPermission(true);
          Alert.alert("Permission Granted", "You can now access the camera.");
        } else {
          setHasPermission(false);
          Alert.alert(
            "Permission Denied",
            "Camera permission is required to use this feature."
          );
        }
      }
    } catch (error) {
      console.error("Error requesting camera permission:", error);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {!hasPermission ? (
        <Text>Waiting for camera permission...</Text>
      ) : (
        <WebView
          source={{ uri: "https://DeepakVishawakarma.github.io/soisuWebApp" }}
          style={{ flex: 1 }}
          javaScriptEnabled={true}
          domStorageEnabled={true}
          mediaPlaybackRequiresUserAction={false} // To auto-play media if necessary
        />
      )}
    </SafeAreaView>
  );
};

export default App;
