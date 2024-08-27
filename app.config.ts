import { ExpoConfig, ConfigContext } from "@expo/config";

export default ({ config }: ConfigContext): ExpoConfig => ({
  ...config,
  name: "Cudi",
  description: "Cudi Description",
<<<<<<< HEAD
  slug: "milvasoft-expo-boilerplate",
=======
  slug: "cudi",
>>>>>>> e0fd3446b8fbe3076f3342840b4372277798e2d6
  scheme: "com.ptg.cud",
  version: "1.0.0",
  sdkVersion: "51.0.0",
  orientation: "portrait",
  icon: "./src/assets/images/icon.png",
  userInterfaceStyle: "automatic",
  runtimeVersion: {
    policy: "sdkVersion",
  },
  assetBundlePatterns: ["./src/assets/images/*"],
  locales: {
    tr: "./src/assets/languages/turkish.json",
    en: "./src/assets/languages/english.json",
  },
  splash: {
    image: "./src/assets/images/splash.png",
    resizeMode: "contain",
    backgroundColor: "#ffffff",
  },
  ios: {
    bundleIdentifier: "com.ptg.cud",
    buildNumber: "1.0.0",
    infoPlist: {
      CFBundleAllowMixedLocalizations: true,
    },
  },
  web: {
    bundler: "metro",
  },
  android: {
    adaptiveIcon: {
      foregroundImage: "./src/assets/images/adaptive-icon.png",
      backgroundColor: "#ffffff",
    },
    package: "com.ptg.cud",
    versionCode: 1,
  },
  updates: {
    enabled: true,
    url: "https://u.expo.dev/49e4e24d-c928-4ff1-815d-f1a58ca580bd",
  },
  extra: {
    eas: {
      projectId: "49e4e24d-c928-4ff1-815d-f1a58ca580bd",
    },
  },
});
