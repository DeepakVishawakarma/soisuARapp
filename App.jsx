import {
  Viro3DObject,
  ViroAmbientLight,
  ViroARScene,
  ViroARSceneNavigator,
  ViroBox,
  ViroText,
  ViroTrackingReason,
  ViroTrackingStateConstants,
} from "@reactvision/react-viro";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  SafeAreaView,
} from "react-native";
import { WebView } from "react-native-webview";

// const HelloWorldSceneAR = () => {
//   const [text, setText] = useState("Initializing AR...");

//   function onInitialized(state: any, reason: ViroTrackingReason) {
//     console.log("onInitialized", state, reason);
//     if (state === ViroTrackingStateConstants.TRACKING_NORMAL) {
//       setText("Hello Deepak!");
//     } else if (state === ViroTrackingStateConstants.TRACKING_UNAVAILABLE) {
//       // Handle loss of tracking
//     }
//   }

//   return (
//     <ViroARScene onTrackingUpdated={onInitialized}>
//       <ViroText
//         text={text}
//         scale={[0.5, 0.5, 0.5]}
//         position={[0, 0, -1]}
//         style={styles.helloWorldTextStyle}
//       />
//     </ViroARScene>
//   );
// };

// const ThreeDObjectSceneAR = (props) => {
//   let data = props.sceneNavigator.viroAppProps;
//   const [text, setText] = useState("Initializing AR...");
//   const [rotation, setRotation] = useState([-45, 50, 40]);
//   const [position, setPosition] = useState([0, 0, -5]);
//   const [scale, setScale] = useState([1, 1, 1]);

//   function onInitialized(state, reason) {
//     console.log("onInitialized", state, reason);
//     if (state === ViroTrackingStateConstants.TRACKING_NORMAL) {
//       setText("Hello Deepak!");
//     } else if (state === ViroTrackingStateConstants.TRACKING_UNAVAILABLE) {
//       // Handle loss of tracking
//     }
//   }

//   const moveObject = (newPosition) => {
//     // console.log(newPosition);
//     setPosition(newPosition);
//   };

//   const rotateObject = (rotateState, rotationFactor, source) => {
//     if (rotateState === 3) {
//       let newRotation = [
//         rotation[0] - rotationFactor,
//         rotation[1] - rotationFactor,
//         rotation[2] - rotationFactor,
//       ];
//       // console.log("current Rotation: ",rotation);
//       // console.log("rotation Factor: ",rotationFactor);
//       setRotation(newRotation);
//     }
//   };

//   const scaleObject = (pinchState, scaleFactor, source) => {
//     if (pinchState === 3) {
//       let currentScale = scale[0];
//       let newScale = currentScale * scaleFactor;
//       let newScaleArray = [newScale, newScale, newScale];
//       setScale(newScaleArray);
//     }
//   };

//   return (
//     <ViroARScene onTrackingUpdated={onInitialized}>
//       <ViroAmbientLight color="#ffffff" />
//       {data.object === "p1" && (
//         <Viro3DObject
//           source={require("./src/assets/AW2310-D.glb")}
//           type="GLB"
//           scale={scale}
//           rotation={rotation}
//           position={position}
//           onDrag={moveObject}
//           onRotate={rotateObject}
//           onPinch={scaleObject}
//         />
//       )}
//       {data.object === "p2" && (
//         <Viro3DObject
//           source={require("./src/assets/JFS25B.glb")}
//           type="GLB"
//           scale={scale}
//           rotation={rotation}
//           position={position}
//           onDrag={moveObject}
//           onRotate={rotateObject}
//           onPinch={scaleObject}
//         />
//       )}
//       {data.object === "p3" && (
//         <Viro3DObject
//           source={require("./src/assets/JFS61.glb")}
//           type="GLB"
//           scale={scale}
//           rotation={rotation}
//           position={position}
//           onDrag={moveObject}
//           onRotate={rotateObject}
//           onPinch={scaleObject}
//         />
//       )}
//     </ViroARScene>
//   );
// };

// export default () => {
//   const [object, setObject] = useState("p1");

//   return (
//     <View style={{ flex: 1 }}>
//       <ViroARSceneNavigator
//         autofocus={true}
//         initialScene={{
//           scene: ThreeDObjectSceneAR,
//         }}
//         viroAppProps={{ object: object }}
//         style={styles.f1}
//       />
//       <View
//         style={{
//           display: "flex",
//           flexDirection: "row",
//           justifyContent: "space-between",
//           backgroundColor: "#fff",
//           height: 100,
//           width: "100%",
//         }}
//       >
//         <TouchableOpacity onPress={() => setObject("p1")}>
//           <Text style={styles.productBtnText}>Product 1</Text>
//         </TouchableOpacity>
//         <TouchableOpacity onPress={() => setObject("p2")}>
//           <Text style={styles.productBtnText}>Product 2</Text>
//         </TouchableOpacity>
//         <TouchableOpacity onPress={() => setObject("p3")}>
//           <Text style={styles.productBtnText}>Product 3</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// };

export default () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, backgroundColor: "lightgreen" }}>
        <Text style={{ fontSize: 20, fontWeight:'bold', marginTop:10, marginLeft:10 }}>Product List</Text>
        <View style={{ height: 600 }}>
        <WebView
          style={{ height: 400 }}
          source={{
            uri: "https://DeepakVishawakarma.github.io/soisuWebApp",
          }}
        />
        </View>
        <Text style={{ fontSize: 20, fontWeight:'bold',marginTop:20,marginLeft:10 }}>Details</Text>
        <Text style={{ fontSize: 14,marginTop:10,marginLeft:10 }}>Sofa seat depth ranges from 20" to 25", with standard seat depths being 21" and 22" for average-height individuals. Deeper seats (28" - 35") and extra-deep seats (over 35") are available for shorter or taller individuals</Text>
      </View>
    </SafeAreaView>
  );
};

var styles = StyleSheet.create({
  f1: { flex: 1 },
  helloWorldTextStyle: {
    fontFamily: "Arial",
    fontSize: 30,
    color: "#ffffff",
    textAlignVertical: "center",
    textAlign: "center",
  },
  productBtnText: {
    margin: 20,
    padding: 10,
    backgroundColor: "green",
  },
});
