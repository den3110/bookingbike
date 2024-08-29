import { AppContext } from "@providers/AppProvider";
import { useNavigation } from "@react-navigation/native";
import React, { useContext } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity, SafeAreaView } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

const AccountScreen = () => {
  const navigation= useNavigation()
  const {deviceId }= useContext(AppContext)

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity onPress={()=> {
              navigation.goBack()
          }}>
            <Icon name="arrow-back" size={24} color="#4CAF50" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Tài khoản của tôi</Text>
        </View>

        {/* Profile Section */}
        <View style={styles.profileSection}>
          <Image
            source={{ uri: "https://res.cloudinary.com/cockbook/image/upload/v1724683117/single/male_sdefma.png" }} // Thay đổi đường dẫn URL của avatar
            style={styles.avatar}
          />
          <Text style={styles.userName}>Sơn Hoàng</Text>
        </View>

        {/* Verification Section */}
        <View style={styles.verificationSection}>
          <View style={styles.verificationItem}>
            <View style={{ flex: 1 }}>
              <Text style={styles.verificationText}>Giấy phép lái xe</Text>
            </View>
            <View style={{ flex: 1 }}>
              <View style={styles.verificationStatus}>
                <Icon name="error-outline" size={16} color="#FFC107" />
                <Text style={styles.statusTextPending}>Chưa xác thực</Text>
              </View>
            </View>
            <View style={{ flex: 1 }}>
              <TouchableOpacity>
                <Text style={styles.verifyNow}>Xác thực ngay</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.verificationItem}>
            <View style={{ flex: 1 }}>
              <Text style={styles.verificationText}>Giấy phép lái xe</Text>
            </View>
            <View style={{ flex: 1 }}>
              <View style={styles.verificationStatus}>
                <Icon name="check-circle" size={16} color="#4CAF50" />
                <Text style={styles.statusTextVerified}>Đã xác thực</Text>
              </View>
            </View>
            <View style={{ flex: 1 }}>
              <Text style={styles.contactInfo}>+84329729999</Text>
            </View>
          </View>

          <View style={styles.verificationItem}>
            <View style={{ flex: 1 }}>
              <Text style={styles.verificationText}>Email</Text>
            </View>
            <View style={{ flex: 1 }}>
              <View style={styles.verificationStatus}>
                <Icon name="error-outline" size={16} color="#FFC107" />
                <Text style={styles.statusTextPending}>Chưa xác thực</Text>
              </View>
            </View>
            <View style={{ flex: 1 }}>
              <TouchableOpacity>
                <Text style={styles.verifyNow}>Xác thực ngay</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.verificationItem}>
            <View style={{ flex: 1 }}>
              <Text style={styles.verificationText}>Facebook</Text>
            </View>
            <View style={{ flex: 1 }}>
              <View style={styles.verificationStatus}>
                <Icon name="error-outline" size={16} color="#FFC107" />
                <Text style={styles.statusTextPending}>Chưa xác thực</Text>
              </View>
            </View>
            <View style={{ flex: 1 }}>
              <TouchableOpacity>
                <Text style={styles.verifyNow}>Liên kết ngay</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View>
            <Text>{deviceId}</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 24,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
    marginLeft: 8,
  },
  profileSection: {
    alignItems: "center",
    marginBottom: 32,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 12,
  },
  userName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  verificationSection: {
    backgroundColor: "#FFF",
    borderRadius: 8,
    padding: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  verificationItem: {
    flexDirection: "row",
    alignItems: "center",
    // justifyContent: 'space-between',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#E0E0E0",
  },
  verificationText: {
    fontSize: 14,
    color: "#333",
    paddingRight: 5
  },
  verificationStatus: {
    paddingRight: 5,
    flexDirection: "row",
    alignItems: "center",
  },
  statusTextPending: {
    marginLeft: 4,
    fontSize: 12,
    color: "#FFC107",
  },
  statusTextVerified: {
    marginLeft: 4,
    fontSize: 12,
    color: "#4CAF50",
  },
  verifyNow: {
    fontSize: 12,
    color: "#4CAF50",
    fontWeight: "bold",
  },
  contactInfo: {
    fontSize: 12,
    color: "#333",
  },
});

export default AccountScreen;
