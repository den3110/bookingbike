import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, FlatList, SafeAreaView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const RentBike: React.FC = () => {
    const navigation= useNavigation()
  const bikes = [
    {
      id: '1',
      image: 'https://res.cloudinary.com/cockbook/image/upload/v1724685804/single/Layer_938_gakxjy.png', // Replace with your image URL
      title: 'HONDA AIRBLADE 2023',
      location: 'Đà lạt, Lâm Đồng',
      rating: 4.8,
      trips: 298,
      price: '100k/ngày',
    },
    {
      id: '2',
      image: 'https://res.cloudinary.com/cockbook/image/upload/v1724685804/single/Layer_938_gakxjy.png', // Replace with your image URL
      title: 'HONDA AIRBLADE 2023',
      location: 'Đà lạt, Lâm Đồng',
      rating: 4.8,
      trips: 298,
      price: '100k/ngày',
    },
    // Add more bikes here...
  ];

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity onPress={()=> {navigation.goBack()}} style={styles.backButton}>
            <Icon name="arrow-back" size={24} color="#fff" />
          </TouchableOpacity>
          <Text style={styles.title}>Danh sách xe</Text>
        </View>

        {/* Filters */}
        <View style={styles.filters}>
          <TouchableOpacity style={styles.filterButton}>
            <Icon name="refresh" size={24} color="#000" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.filterButton}>
            <Icon name="car-outline" size={18} color="#000" />
            <Text style={styles.filterText}>Loại xe</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.filterButton}>
            <Icon name="star-outline" size={18} color="#000" />
            <Text style={styles.filterText}>Chủ xe uy tín</Text>
          </TouchableOpacity>
        </View>

        {/* Bike List */}
        <FlatList
          data={bikes}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.bikeItem}>
              <Image source={{ uri: item.image }} style={styles.bikeImage} />
              <View style={styles.bikeDetails}>
                <Text style={styles.bikeTitle}>{item.title}</Text>
                <Text style={styles.bikeLocation}>{item.location}</Text>
                <View style={styles.bikeStats}>
                  <Text style={styles.rating}>⭐ {item.rating}</Text>
                  <Text style={styles.trips}>🛵 {item.trips} chuyến</Text>
                </View>
              </View>
              <Text style={styles.price}>{item.price}</Text>
            </View>
          )}
          contentContainerStyle={styles.bikeList}
        />

      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#4CAF50',
  },
  backButton: {
    marginRight: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  filters: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
    backgroundColor: '#fff',
  },
  filterButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 20,
  },
  filterText: {
    marginLeft: 5,
    fontSize: 14,
    fontWeight: 'bold',
    color: '#000',
  },
  bikeList: {
    padding: 10,
  },
  bikeItem: {
    flexDirection: 'row',
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
    marginBottom: 10,
  },
  bikeImage: {
    width: 100,
    height: 100,
    borderRadius: 8,
  },
  bikeDetails: {
    flex: 1,
    marginLeft: 10,
    justifyContent: 'center',
  },
  bikeTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  bikeLocation: {
    fontSize: 14,
    color: '#666',
  },
  bikeStats: {
    flexDirection: 'row',
    marginTop: 5,
  },
  rating: {
    marginRight: 10,
    color: '#FFD700',
  },
  trips: {
    color: '#32CD32',
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#4CAF50',
    alignSelf: 'center',
  },
});

export default RentBike;
