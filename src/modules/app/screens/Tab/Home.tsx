import useTheme from '@hooks/useTheme';
import PromoScreen from '@modules/app/section/Home/Promo';
import React from 'react';
import { View, Text, Image, TextInput, Button, StyleSheet, TouchableOpacity, ScrollView, Keyboard } from 'react-native';

const HomeScreen = () => {
  const theme= useTheme()

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.welcomeText}>Xin chào, <Text style={styles.nameText}>Sơn Hoàng</Text></Text>
        <Text style={styles.pointsText}>⭐ Điểm thưởng</Text>
      </View>
      
      <View style={styles.searchBox}>
        <View style={{paddingVertical: 20, backgroundColor: theme.primary, display: "flex", justifyContent: 'center', alignItems: "center", flexDirection: "row", borderTopLeftRadius: 20, borderTopRightRadius: 20}}>
          <Image source={require("../../../../assets/images/vehicle.png")} style={{width: 40, height: 20, objectFit: "contain"}} />
          <Text style={styles.searchTitle}>Tìm thuê xe</Text>
        </View>
        <View style={{padding: 20}}>
          <View style={styles.inputContainer}>
            <TextInput returnKeyType={"done"}
                          onSubmitEditing={Keyboard.dismiss} placeholder="Địa điểm" style={styles.input} />
          </View>
          <View style={styles.inputContainer}>
            <TextInput returnKeyType={"done"}
                          onSubmitEditing={Keyboard.dismiss} placeholder="Thời gian thuê" style={styles.input} />
          </View>
          
          <TouchableOpacity style={styles.searchButton}>
            <Text style={styles.searchButtonText}>Tìm xe</Text>
          </TouchableOpacity>
        </View>
      </View>
      
      <View style={styles.quickSearch}>
        <View>
          
          <Text style={styles.quickSearchTitle}>Tìm xe nhanh</Text>
        </View>
        
        <View style={styles.quickSearchOptions}>
          <View style={styles.cityOption}>
            <Image source={require('../../../../assets/images/template.png')} style={styles.cityImage} />
            <Text style={styles.cityText}>Đà Lạt</Text>
            <Text style={styles.cityInfo}>1000+ xe sẵn sàng</Text>
          </View>
          <View style={styles.cityOption}>
            <Image source={require('../../../../assets/images/template.png')} style={styles.cityImage} />
            <Text style={styles.cityText}>Hà Nội</Text>
            <Text style={styles.cityInfo}>1000+ xe sẵn sàng</Text>
          </View>
          <View style={styles.cityOption}>
            <Image source={require('../../../../assets/images/template.png')} style={styles.cityImage} />
            <Text style={styles.cityText}>Tp. Hồ Chí Minh</Text>
            <Text style={styles.cityInfo}>1000+ xe sẵn sàng</Text>
          </View>
        </View>
      </View>
      <PromoScreen />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    backgroundColor: '#d9f2e6',
    padding: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    paddingBottom: 60,
    paddingTop: 60
  },
  welcomeText: {
    fontSize: 18,
    color: '#333',
  },
  nameText: {
    color: '#d95f5f',
    fontWeight: 'bold',
  },
  pointsText: {
    fontSize: 16,
    color: '#999',
  },
  searchBox: {
    marginTop: -30,
    backgroundColor: '#fff',
    marginHorizontal: 20,
    borderRadius: 40,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },
  searchTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  inputContainer: {
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    height: 40,
  },
  searchButton: {
    backgroundColor: '#f57c00',
    borderRadius: 80,
    paddingVertical: 20,
    alignItems: 'center',
  },
  searchButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  quickSearch: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
  quickSearchTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  quickSearchOptions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  cityOption: {
    alignItems: 'center',
  },
  cityImage: {
    width: 80,
    height: 80,
    borderRadius: 50,
    marginBottom: 5,
  },
  cityText: {
    fontWeight: 'bold',
  },
  cityInfo: {
    color: '#999',
    fontSize: 12,
  },
});

export default HomeScreen;
