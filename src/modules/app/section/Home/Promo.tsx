import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  ImageBackground,
} from "react-native";
import LinearGradient from "react-native-linear-gradient";

const PromoScreen = () => {
  return (
    <View style={styles.container}>
      {/* Promo Section */}
      <Text style={styles.headerText}>Chương trình khuyến mãi</Text>
      <View>
        <ScrollView
          horizontal={true}
          style={{ width: Dimensions.get("screen").width - 35 }}
          showsHorizontalScrollIndicator={false}
        >
          <View style={styles.promoContainer}>
            <Image
              source={{
                uri: "https://res.cloudinary.com/cockbook/image/upload/v1724664635/single/Layer_567_1_bvmdaa.png",
              }} // Replace with your image URL
              style={styles.promoImage}
            />
            <Image
              source={{
                uri: "https://res.cloudinary.com/cockbook/image/upload/v1724664635/single/Layer_567_1_bvmdaa.png",
              }} // Replace with your image URL
              style={styles.promoImage}
            />
          </View>
        </ScrollView>
      </View>

      {/* Call to Action Section */}
        <ImageBackground
          style={styles.ctaContainer}
          imageStyle={styles.backgroundImage}
          resizeMode="cover"
          source={{
            uri: "https://res.cloudinary.com/cockbook/image/upload/v1724667119/single/Layer_571_1_of9xng.png",
          }}
        >
          <LinearGradient
            colors={["#00000000", "#00000099"]}
            style={styles.gradientOverlay}
          >
            <Text style={styles.ctaText}>Bạn muốn cho thuê xe</Text>
            <Text style={styles.ctaDescription}>
              Hơn 5,000 chủ xe đang cho thuê hiệu quả trên Cudi. Đăng ký ngay để
              trở thành đối tác của chúng tôi.
            </Text>
            <TouchableOpacity style={styles.ctaButton}>
              <Text style={styles.ctaButtonText}>Đăng ký ngay</Text>
            </TouchableOpacity>
          </LinearGradient>
        </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    padding: 16,
  },
  headerText: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 12,
  },
  promoContainer: {
    flexDirection: "row",
    // width: Dimensions.get("screen").width
  },
  promoImage: {
    width: (Dimensions.get("screen").width - 35) * 0.65,
    marginRight: 10,
    aspectRatio: 4 / 3,
    borderRadius: 10,
  },
  ctaContainer: {
    marginTop: 16,
    borderRadius: 20,
    overflow: "hidden",
    height: 250,
    width: "100%"
  },
  gradientOverlay: {
    marginTop: 60,
    padding: 20,
    borderRadius: 10,
    height: "100%"
  },
  backgroundImage: {
    borderRadius: 20, // To make the image corners rounded
  },
  ctaText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#FFFFFF",
    marginBottom: 8,
  },
  ctaDescription: {
    fontSize: 14,
    color: "#FFFFFF",
    marginBottom: 16,
  },
  ctaButton: {
    backgroundColor: "#4CAF50",
    paddingVertical: 12,
    borderRadius: 5,
    alignItems: "center",
  },
  ctaButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default PromoScreen;
