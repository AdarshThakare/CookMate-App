import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Marquee } from "@animatereactnative/marquee";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import colors from "@/constants/colors";

const entry = () => {
  const imageList = [
    require("../assets/images/1.jpg"),
    require("../assets/images/2.jpg"),
    require("../assets/images/c2.jpg"),
    require("../assets/images/3.jpg"),
    require("../assets/images/5.jpg"),
    require("../assets/images/c1.jpg"),
    require("../assets/images/6.jpg"),
  ];
  return (
    <GestureHandlerRootView>
      <SafeAreaView>
        <Marquee
          spacing={10}
          speed={0.8}
          style={{ transform: [{ rotate: "-4deg" }] }}
        >
          <View style={styles.imageContainer}>
            {imageList.map((image, index) => (
              <Image key={index} source={image} style={styles.create} />
            ))}
          </View>
        </Marquee>
        <Marquee
          spacing={10}
          speed={0.9}
          style={{ transform: [{ rotate: "-4deg" }], marginTop: 15 }}
        >
          <View style={styles.imageContainer}>
            {imageList.map((image, index) => (
              <Image key={index} source={image} style={styles.create} />
            ))}
          </View>
        </Marquee>
        <Marquee
          spacing={10}
          speed={0.6}
          style={{ transform: [{ rotate: "-4deg" }], marginTop: 15 }}
        >
          <View style={styles.imageContainer}>
            {imageList.map((image, index) => (
              <Image key={index} source={image} style={styles.create} />
            ))}
          </View>
        </Marquee>
        <View
          style={{
            backgroundColor: colors.white,
            height: "100%",
            padding: 20,
          }}
        >
          <Text
            style={{
              fontSize: 30,
              fontFamily: "outfit-bold",
              textAlign: "center",
              color: "#000",
            }}
          >
            🍲 CookMate AI 👩🏻‍🍳
          </Text>
          <Text
            style={{
              fontSize: 16,
              fontFamily: "mono",
              textAlign: "center",
              color: "#000",
            }}
          >
            Find, Create and Enjoy Delicious Recipes
          </Text>
          <TouchableOpacity>
            <Text style={styles.button}>Get Started</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </GestureHandlerRootView>
  );
};

export default entry;

const styles = StyleSheet.create({
  create: {
    width: 160,
    height: 160,
    borderRadius: 25,
  },
  imageContainer: {
    flexDirection: "row",
    gap: 10,
  },
  button: {
    fontSize: 20,
    fontFamily: "outfit-medium",
    textAlign: "center",
    marginTop: 30,
    marginHorizontal: 40,
    paddingVertical: 7,
    borderRadius: 20,
    backgroundColor: colors.primary,
    color: "#fff",
  },
});
