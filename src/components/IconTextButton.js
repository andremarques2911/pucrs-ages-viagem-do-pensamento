import React from "react";

import { View, Image, StyleSheet, TouchableOpacity } from "react-native";
import { Text } from "native-base";
import Colors from "../assets/Colors/Colors";

const IconTextButton = ({ title, subtitle, image, onPress }) => {
  return (
    <TouchableOpacity style={styles.cardButton} onPress={onPress}>
      <View>
        <Image resizeMode={"center"} source={image} style={styles.image} />
      </View>
      <View style={styles.contentText}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  cardButton: {
    width: 310,
    height: 100,
    flexDirection: "row",
    padding: 10,
    borderRadius: 20,
    backgroundColor: Colors.brightNavyBlue,
    justifyContent: "space-evenly",
    elevation: 3,
    marginBottom: 30
  },
  image: {
    flex: 1,
    width: 100,
    height: 110
  },
  contentText: {
    width: 150,
    marginLeft: 20,
  },
  title: {
    color: Colors.white,
    fontSize: 20,
    marginVertical: 10,
    marginBottom: 10,
    fontWeight: "bold"
  },
  subtitle: {
    color: Colors.white,
    fontSize: 14,
    marginBottom: -10
  },
});

export default IconTextButton;