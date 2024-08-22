import React, { useCallback, useMemo, useRef, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  TouchableHighlight,
  TextInput,
  Linking,
  Image,
} from "react-native";
import { useDispatch } from "react-redux";
import { showToast } from "@helpers/toast/showToast";
import { SetUser } from "@modules/app/redux/appSlice";
import { useNavigation } from "@react-navigation/native";
import Routes from "@utils/Routes";
import ReactNativePhoneInput from "react-native-phone-input";
import { Checkbox, RadioButton } from "react-native-paper";
import BottomSheet from "@gorhom/bottom-sheet";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function Login() {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const phoneRef = useRef(null);
  const [checked, setChecked] = useState(false);

  const handleLinkPress = () => {
    Linking.openURL("https://cudi.com/terms"); // Thay thế URL này bằng URL thực tế
  };

  const handleGetNumber = () => {
    if (phoneRef.current) {
      const number = phoneRef.current.getValue();
      alert(`Số điện thoại: ${number}`);
    }
  };

  const bottomSheetRef = useRef(null);
  const snapPoints = useMemo(() => ["25%", "40%"], []);
  const [selectedOption, setSelectedOption] = useState("zalo"); // Trạng thái cho RadioButton

  const handleRadioChange = (value) => {
    setSelectedOption(value);
    console.log("Phương thức được chọn: ", value);
  };
  const handleSheetChanges = useCallback((index) => {
    console.log("handleSheetChanges", index);
  }, []);

  const goHomePage = useCallback(() => {
    // showToast("Welcome");
    // navigation.navigate(Routes.Home)
    bottomSheetRef.current?.snapToIndex(1);
    // dispatch(SetUser({ name: "Ali Burhan Keskin" }));
  }, []);

  const handleSubmit= ()=> {
    navigation.navigate(Routes.VerifyOtp)
    // dispatch(SetUser({ name: "Son Hoang" }));
  }

  return (
    <View style={styles.root}>
      <View style={{ width: "100%" }}>
        <View style={{ width: "100%", padding: 10 }}>
          <View
            style={{
              display: "flex",
              justifyContent: "space-around",
              width: "100%",
              height: "100%",
            }}
          >
            <View>
              <View style={styles.welcome}>
                <Image
                  source={require('../../../assets/images/symbol.png')}
                  style={styles.image}
                />
              </View>
              <View>
                <View style={{ marginTop: 50, width: "70%" }}>
                  <Text style={{ fontWeight: "600", fontSize: 20 }}>
                    Đăng ký/ Đăng nhập với số điện thoại
                  </Text>
                </View>
                <View style={{ marginTop: 8, marginBottom: 8 }}>
                  <Text
                    style={{
                      fontWeight: "600",
                      color: "#666666",
                      fontSize: 16,
                    }}
                  >
                    Nhập số điện thoại của bạn
                  </Text>
                </View>
                <View
                  style={{
                    width: "100%",
                    display: "flex",
                    flexDirection: "row",
                  }}
                >
                  <View
                    style={{
                      padding: 10,
                      backgroundColor: "#f2f2f2",
                      width: 100,
                    }}
                  >
                    <View>
                      <ReactNativePhoneInput
                        ref={phoneRef}
                        initialCountry="vn"
                        flagStyle={{ width: 30, height: 20 }}
                        textStyle={{ fontSize: 18 }}
                      />
                    </View>
                  </View>
                  <View style={{ flex: 1, paddingLeft: 10 }}>
                    <View
                      style={{
                        width: "100%",
                        backgroundColor: "#f2f2f2",
                        height: 40,
                        borderRadius: 10,
                      }}
                    >
                      <TextInput
                        style={{
                          width: "100%",
                          height: "100%",
                          padding: 5,
                          fontSize: 18,
                        }}
                        keyboardType="number-pad"
                        placeholder="Nhập số điện thoại của bạn"
                      />
                    </View>
                  </View>
                </View>
                <View style={styles.container}>
                  <Checkbox
                    status={checked ? "checked" : "unchecked"}
                    onPress={() => {
                      setChecked(!checked);
                    }}
                    color="#4CAF50" // Màu xanh lá cây cho checkbox
                  />
                  <Text style={styles.text}>
                    Bằng cách nhấn tiếp tục, bạn đã đồng ý với các{" "}
                    <Text style={styles.link} onPress={handleLinkPress}>
                      Điều khoản và điều kiện
                    </Text>{" "}
                    của Cudi.
                  </Text>
                </View>
                <View style={styles.buttonStyle}>
                  <TouchableHighlight
                    onPress={goHomePage}
                    style={{
                      width: "100%",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      backgroundColor: "#2b9060",
                      paddingTop: 20,
                      paddingRight: 20,
                      paddingLeft: 20,
                      paddingBottom: 20,
                      borderRadius: 80,
                    }}
                  >
                    <View>
                      <Text
                        style={{
                          color: "#fff",
                          fontSize: 20,
                          fontWeight: "600",
                        }}
                      >
                        Đăng nhập
                      </Text>
                    </View>
                  </TouchableHighlight>
                  {/* <Button onPress={goHomePage} title="Login" /> */}
                </View>
              </View>
            </View>
            <View></View>
          </View>
        </View>
      </View>
      <BottomSheet
        ref={bottomSheetRef}
        index={-1}
        snapPoints={snapPoints}
        onChange={handleSheetChanges}
        enablePanDownToClose={true}
      >
        <View style={styles.contentContainer}>
          <Text style={styles.title}>Chọn ứng dụng để nhận mã OTP</Text>
          <Text style={styles.subtitle}>
            Cudi sẽ gửi cho bạn mã xác thực OTP để đăng ký tài khoản. Chọn ứng
            dụng mà bạn muốn sử dụng để nhận OTP.
          </Text>
          <View style={styles.optionContainer}>
            <RadioButton.Group
              onValueChange={handleRadioChange}
              value={selectedOption}
            >
              <View style={styles.option}>
                <Text style={styles.optionText}>Zalo</Text>
                <RadioButton value="zalo" />
              </View>
              <View style={styles.option}>
                <Text style={styles.optionText}>Tin nhắn điện thoại</Text>
                <RadioButton value="sms" />
              </View>
            </RadioButton.Group>
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.cancelButton}>
              <Text style={styles.cancelButtonText}>Hủy</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleSubmit} style={styles.submitButton}>
              <Text style={styles.submitButtonText}>Gửi mã OTP</Text>
            </TouchableOpacity>
          </View>
        </View>
      </BottomSheet>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  container: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
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
  text: {
    fontSize: 14,
    color: "#555555",
  },
  link: {
    color: "#FF6E40", // Màu cam cho liên kết
    fontWeight: "bold",
  },
  contentContainer: {
    padding: 20,
    backgroundColor: "white",
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 14,
    color: "#666",
    marginBottom: 20,
  },
  optionContainer: {
    marginBottom: 20,
  },
  option: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  optionText: {
    fontSize: 16,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  cancelButton: {
    backgroundColor: "#fff",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderWidth: 1,
    borderColor: "#000",
    borderRadius: 5,
  },
  cancelButtonText: {
    color: "#000",
    fontSize: 16,
  },
  submitButton: {
    backgroundColor: "#4CAF50",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  submitButtonText: {
    color: "#fff",
    fontSize: 16,
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20,
    objectFit: "contain"
  },
});
