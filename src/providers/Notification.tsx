import { useContext, useEffect } from "react";
import { Platform } from "react-native";
import * as Constants from "expo-constants";
import * as Device from "expo-device";
import * as Notifications from "expo-notifications";
import { useDispatch } from "react-redux";
import { SetExpoToken } from "@modules/app/redux/appSlice";
import authApi from "@modules/app/api/auth/authApi";
import { AppContext } from "./AppProvider";

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

const Notification: React.FC<any> = () => {
  const dispatch = useDispatch();
  const {setDeviceId }= useContext(AppContext)

  useEffect(() => {
    try {
      registerForPushNotificationsAsync().then(async (token?: String) => {
        setDeviceId(token)
        try {
          await authApi.postDeviceId({deviceId: token});
          dispatch(SetExpoToken(token))
          
        } catch (error) {
          console.log(error) 
        }
      }
      );
    } catch (error) {}

    // Notifications.addNotificationReceivedListener((notification) => {
    //   setNotification(notification);
    // });
  }, []);

  return <></>;
};

export default Notification;

async function registerForPushNotificationsAsync() {
  let token;

  if (Platform.OS === "android") {
    await Notifications.setNotificationChannelAsync("default", {
      name: "default",
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: "#FF231F7C",
    });
  }

  if (Device.isDevice) {
    const { status: existingStatus } =
      await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;
    if (existingStatus !== "granted") {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }
    if (finalStatus !== "granted") {
      alert("Failed to get push token for push notification!");
      return;
    }
    // Learn more about projectId:
    // https://docs.expo.dev/push-notifications/push-notifications-setup/#configure-projectid
    token = (
      await Notifications.getExpoPushTokenAsync({
        projectId: Constants.default.easConfig?.projectId, // You can get your projectId from app.config.ts file. It is located in the extra.eas.projectId field. If you don't have it, you can get it from the link in the comment above.
      })
    ).data;
    console.log(token);
  } else {
    alert("Bạn phải dùng thiết bị thật để sử dụng push notifications");
  }

  return token;
}
