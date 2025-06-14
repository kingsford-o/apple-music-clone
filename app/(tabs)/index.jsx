import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Home</Text>
        <TouchableOpacity>
        <Image
          source={{ uri: `https://api.dicebear.com/7.x/avataaars/png?seed=profile`  }}
          style={{
            width: 30,
            height: 30
          }}
          
        />
        </TouchableOpacity>
      </View>

      {/* Promo Card */}
      <View style={styles.card}>
        <Text style={{
          color: "white",
          fontSize: 30,

        }} >Get 1 month of free music.</Text>
        <Text style={{
          color: "white",
          fontSize: 50,
          fontWeight: 40,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignSelf: "center",
          

        }}>Apple Music</Text>
        <Image
          source={{ uri: "https://upload.wikimedia.org/wikipedia/commons/2/2a/Apple_Music_logo.svg"  }}
          style={{
            height: 250,
            width: 50,
          }}
          resizeMode="contain"
        />
        <Text style={styles.cardSubHeader}>Try It Free</Text>
        <Text style={styles.cardText}>1 month free, then US$3.29/month.</Text>
        <Text></Text>
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 15,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 50,
    marginBottom: 15,
  },
  headerText: {
    fontSize: 26,
    fontWeight: "bold",
  },
  card: {
    backgroundColor: "#ff2d55",
    borderRadius: 20,
    padding: 20,
    alignItems: "center",
    marginVertical: 10,
  },
  cardHeader: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    marginBottom: 10,
  },
  appleMusicLogo: {
    width: 150,
    height: 50,
    marginVertical: 10,
  },
  cardSubHeader: {
    fontSize: 16,
    color: "#fff",
    fontWeight: "bold",
    marginTop: 10,
  },
  cardText: {
    fontSize: 14,
    color: "#fff",
    marginTop: 5,
  },
});
