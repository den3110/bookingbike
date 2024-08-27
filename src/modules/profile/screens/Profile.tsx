import { useNavigation } from '@react-navigation/native';
import Routes from '@utils/Routes';
import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Profile = () => {
  const navigation= useNavigation()

  return (
    <ScrollView style={styles.container}>
      {/* Header Section */}
      <View style={styles.headerContainer}>
        <View style={styles.profileInfo}>
          <TouchableOpacity onPress={()=> {
            navigation.navigate(Routes.Balance)
          }}>
            <Image
              source={{ uri: 'https://res.cloudinary.com/cockbook/image/upload/v1724683117/single/male_sdefma.png' }} // Thay URL bằng hình ảnh avatar của bạn
              style={styles.avatar}
            />
          </TouchableOpacity>
          <View style={styles.userInfo}>
            <Text style={styles.userName}>Sơn Hoàng</Text>
            <Text style={styles.userPhone}>+84 32 972 999</Text>
          </View>
        </View>
      </View>

      {/* Menu Section */}
      <View style={styles.menuSection}>
        <TouchableOpacity style={styles.menuItem} onPress={()=> {
          navigation.navigate(Routes.Account)
        }}>
          <View style={{width: "100%", display: "flex", flexDirection: "row", justifyContent: 'space-between', alignItems: "center"}}>
            <Text style={styles.menuText}>Thông tin của tôi</Text>
            <Icon name="keyboard-arrow-right" size={24} color="#333" />
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <View style={{width: "100%", display: "flex", flexDirection: "row", justifyContent: 'space-between', alignItems: "center"}}>
            <Text style={styles.menuText}>Xe của tôi</Text>
            <Icon name="keyboard-arrow-right" size={24} color="#333" />
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <View style={{width: "100%", display: "flex", flexDirection: "row", justifyContent: 'space-between', alignItems: "center"}}>
            <Text style={styles.menuText}>Xe yêu thích</Text>
            <Icon name="keyboard-arrow-right" size={24} color="#333" />
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <View style={{width: "100%", display: "flex", flexDirection: "row", justifyContent: 'space-between', alignItems: "center"}}>
            <Text style={styles.menuText}>Địa chỉ của tôi</Text>
            <Icon name="keyboard-arrow-right" size={24} color="#333" />
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <View style={{width: "100%", display: "flex", flexDirection: "row", justifyContent: 'space-between', alignItems: "center"}}>
            <Text style={styles.menuText}>Ví Cudi</Text>
            <Icon name="keyboard-arrow-right" size={24} color="#333" />
          </View>
        </TouchableOpacity>
      </View>

      {/* Settings Section */}
      <View style={styles.settingsSection}>
        <TouchableOpacity style={styles.menuItem}>
          <View style={{width: "100%", display: "flex", flexDirection: "row", justifyContent: 'space-between', alignItems: "center"}}>
            <Text style={styles.menuText}>Đổi mật khẩu</Text>
            <Icon name="keyboard-arrow-right" size={24} color="#333" />
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <View style={{width: "100%", display: "flex", flexDirection: "row", justifyContent: 'space-between', alignItems: "center"}}>
            <Text style={styles.menuText}>Xóa tài khoản</Text>
            <Icon name="keyboard-arrow-right" size={24} color="#333" />
          </View>
        </TouchableOpacity>
      </View>

      {/* Logout Section */}
      <TouchableOpacity style={styles.logoutButton}>
      <View style={{width: "100%", display: "flex", flexDirection: "row", justifyContent: 'center', alignItems: "center"}}>
        <View style={{display: "flex", justifyContent: 'center',alignItems: "center"}}>
          <Icon name="logout" size={24} color="#F44336"  />
        </View>
        <Text style={styles.logoutText}>Đăng xuất</Text>
      </View>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  headerContainer: {
    backgroundColor: '#4CAF50', // Màu nền của phần header
    paddingVertical: 20,
    paddingHorizontal: 16,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  profileInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 12,
  },
  userInfo: {
    justifyContent: 'center',
  },
  userName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  userPhone: {
    fontSize: 14,
    color: '#FFFFFF',
  },
  menuSection: {
    marginTop: 16,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 8,
  },
  settingsSection: {
    marginTop: 16,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 8,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  menuText: {
    fontSize: 16,
    color: '#333333',
  },
  logoutButton: {
    marginTop: 16,
    backgroundColor: '#F5F5F5',
    paddingVertical: 12,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  logoutText: {
    fontSize: 16,
    color: '#F44336',
    fontWeight: 'bold',
  },
});

export default Profile;
