import { useNavigation } from "@react-navigation/native";
import Routes from "@utils/Routes";
import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/Ionicons"; // Importing Ionicons from the vector icons library

const BikeListScreen: React.FC = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={()=> {
            navigation.goBack()
        }} style={styles.backButton}>
          <Icon name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.title}>Danh sách xe</Text>
      </View>

      {/* Bike Item */}
      <View style={styles.bikeItem}>
        <Image
          source={{
            uri: "https://res.cloudinary.com/cockbook/image/upload/v1724685321/single/Layer_868_tdewdx.png",
          }} // Replace with your image URL
          style={styles.bikeImage}
        />
        <View style={styles.bikeDetails}>
          <Text style={styles.bikeTitle}>HONDA AIRBLADE 2023</Text>
          <Text style={styles.bikeLocation}>Đà lạt, Lâm Đồng</Text>
          <View style={styles.bikeStats}>
            <Text style={styles.rating}>⭐ 4.8</Text>
            <Text style={styles.trips}>🛵 298 chuyến</Text>
          </View>
        </View>
      </View>

      {/* Register Button */}
      <TouchableOpacity
        onPress={() => {
          navigation.navigate(Routes.RentBike)
        }}
        style={styles.registerButton}
      >
        <Text style={styles.registerButtonText}>Đăng ký xe mới</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f5f5f5",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  backButton: {
    marginRight: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  bikeItem: {
    flexDirection: "row",
    padding: 10,
    backgroundColor: "#fff",
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
  bikeImage: {
    width: 80,
    height: 80,
    borderRadius: 8,
  },
  bikeDetails: {
    marginLeft: 10,
    justifyContent: "center",
  },
  bikeTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
  bikeLocation: {
    fontSize: 14,
    color: "#666",
  },
  bikeStats: {
    flexDirection: "row",
    marginTop: 5,
  },
  rating: {
    marginRight: 10,
    color: "#FFD700",
  },
  trips: {
    color: "#32CD32",
  },
  registerButton: {
    marginTop: "auto",
    paddingVertical: 15,
    backgroundColor: "#4CAF50",
    borderRadius: 30,
    alignItems: "center",
  },
  registerButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default BikeListScreen;
