import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import firestore from "@react-native-firebase/firestore";

export default function App() {
  const [test, setTest] = useState("Testing...");

  useEffect(() => {
    async function getData() {
      const testDoc = await firestore().collection("test").doc("testDoc").get();
      setTest(testDoc.data().isOK);
    }
    getData();
  });

  return (
    <View style={styles.container}>
      <Text>{test}</Text>
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
