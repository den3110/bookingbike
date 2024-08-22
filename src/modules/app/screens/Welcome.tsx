/**
 * @author Ali Burhan Keskin <alikeskin@milvasoft.com>
 */
import React, { useCallback } from "react";
import { View, Text, StyleSheet, Button, TouchableHighlight, Image } from "react-native";
import { useDispatch } from "react-redux";
import { showToast } from "@helpers/toast/showToast";
import { SetUser } from "@modules/app/redux/appSlice";
import { useNavigation } from "@react-navigation/native";
import Routes from "@utils/Routes";

export default function Welcome() {
  const dispatch = useDispatch();
  const navigation= useNavigation()

  const goHomePage = useCallback(() => {
    navigation.navigate(Routes.Login)
    // dispatch(SetUser({ name: "Son Hoang" }));
  }, []);

  return (
    <View style={styles.root}>
      <View style={{width: "100%"}}>
        <View style={{width: "100%", padding: 10}}>
          <View style={{display: "flex", justifyContent: "space-around", width: "100%", height: "100%"}}>
            <View>
              <View style={styles.welcome}>
                <Image
                  source={require('../../../assets/images/symbol.png')}
                  style={styles.image}
                />
              </View>
            </View>
            <View>
              <View>
                <Text onPress={()=> navigation.navigate(Routes.Home)} style={{textAlign: "center", fontWeight: "600", fontSize: 20}}>Cùng bạn</Text>
                <Text style={{textAlign: "center", fontWeight: "600", fontSize: 20}}>Đi muôn nơi</Text>
              </View>
              <View style={{marginTop: 16, marginBottom: 16}}>
                <Text style={{color: "#9f9fac", textAlign: "center", fontWeight: "600", fontSize: 12}}>Ứng dụng cho thuê</Text>
                <Text style={{color: "#9f9fac", textAlign: "center", fontWeight: "600", fontSize: 12}}>Xe máy vượt trội</Text>
              </View>
              <View style={styles.buttonStyle}>
                <TouchableHighlight onPress={goHomePage} style={{width: "100%", display: "flex", justifyContent: 'center',alignItems: "center", backgroundColor: "#2b9060", paddingTop: 20, paddingRight: 20,paddingLeft: 20, paddingBottom: 20, borderRadius: 80}}>
                  <View>
                    <Text style={{color: "#fff", fontSize: 20, fontWeight: "600"}}>Đăng nhập</Text>
                  </View>
                </TouchableHighlight>
                {/* <Button onPress={goHomePage} title="Login" /> */}
              </View>
            </View>
          </View>
          
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff"
  },

  welcome: {
    fontFamily: "Bold",
    fontSize: 25,
    textAlign: "center",
    display: "flex", justifyContent: "center", alignItems: "center"
  },
  buttonStyle: {
    marginTop: 20,
  },
  labelStyle: {
    fontSize: 3,
    textAlign: "center",
    fontWeight: "bold",
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20,
    objectFit: "contain"
  },
});
