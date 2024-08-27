import { useNavigation } from '@react-navigation/native';
import Routes from '@utils/Routes';
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialIcons';

const BalanceScreen :React.FC = () => {
  const navigation= useNavigation()

  return (
    <View style={styles.container}>
      {/* Header */}
      <TouchableOpacity style={styles.backButton}>
        <Icon name="arrow-back" size={24} color="#FFFFFF" />
      </TouchableOpacity>

      {/* Gradient Background */}
      <LinearGradient
       colors={['#A5D6A7', '#81C784', '#66BB6A', '#4CAF50', '#388E3C']}// Bạn có thể thay đổi các màu gradient ở đây
        style={styles.gradientBackground}
      >
        {/* Balance and Image Section */}
        <View style={styles.balanceContainer}>
          <Text style={styles.balanceText}>Số dư : <Text style={styles.balanceAmount}>680.000</Text></Text>
          <View>
            <Image
                source={{ uri: 'https://res.cloudinary.com/cockbook/image/upload/v1724684765/single/Vector_Smart_Object__4_-removebg-preview_kkx1kh.png' }} // Thay đổi URL của hình ảnh
                style={styles.balanceImage}
            />
          </View>
        </View>
      </LinearGradient>

      {/* Options Section */}
      <View style={styles.optionsContainer}>
        <View style={styles.optionItem}>
          <Icon name="directions-car" size={20} color="#757575" />
          <TouchableOpacity onPress={()=> {
            navigation.navigate(Routes.BikeListScreen)
          }} style={styles.optionTextContainer}>
            <Text style={styles.optionText}>Danh sách xe</Text>
            <Text style={styles.optionSubText}>Quản lý xe đang thuê</Text>
          </TouchableOpacity>
          <Icon name="chevron-right" size={24} color="#757575" />
        </View>

        <View style={styles.optionItem}>
          <Icon name="add-circle-outline" size={20} color="#757575" />
          <View style={styles.optionTextContainer}>
            <Text style={styles.optionText}>Đăng ký cho thuê xe</Text>
            <Text style={styles.optionSubText}>Quản lý xe đang thuê</Text>
          </View>
          <Icon name="chevron-right" size={24} color="#757575" />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  backButton: {
    position: 'absolute',
    top: 16,
    left: 16,
    zIndex: 10,
  },
  gradientBackground: {
    width: '100%',
    height: 220,
    paddingHorizontal: 16,
    paddingTop: 32,
  },
  balanceContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 16,
    marginTop: 100,
    marginBottom: 32,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  balanceText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  balanceAmount: {
    color: '#4CAF50',
  },
  balanceImage: {
    position: 'absolute',
    top: -150, // Điều chỉnh vị trí để hình ảnh nằm trên gradient
    right: 0,
    width: 150,
    height: 150,
    resizeMode: 'contain',
  },
  optionsContainer: {
    backgroundColor: '#FFF',
    borderRadius: 10,
    paddingVertical: 16,
    paddingHorizontal: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    marginTop: -50, // Di chuyển lên trên để phủ lên phần gradient
    marginHorizontal: 16,
  },
  optionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  optionTextContainer: {
    flex: 1,
    marginLeft: 16,
  },
  optionText: {
    fontSize: 16,
    color: '#333',
  },
  optionSubText: {
    fontSize: 14,
    color: '#757575',
  },
});

export default BalanceScreen;
