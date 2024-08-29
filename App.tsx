/**
 */
import React, { useEffect } from "react";
import { enableScreens } from "react-native-screens";
import "react-native-gesture-handler";
import { Provider } from "react-redux";
import * as ScreenOrientation from "expo-screen-orientation";
import { Platform } from "react-native";
import Store from "./src/store";
import RootNavigation from "./src/routers";
import CustomProvider from "./src/providers";
import ErrorBoundary from "./src/providers/ErrorBoundary";
import AppProvider from "./src/providers/AppProvider";

enableScreens();

function App() {
  useEffect(() => {
    if (Platform.OS !== "web") {
      // TODO: Orientation Congihuration
      ScreenOrientation.lockAsync(
        ScreenOrientation.OrientationLock.PORTRAIT_UP
      );
    }
  }, []);

  return (
    // @ts-ignore
    <ErrorBoundary>
      <AppProvider>
        <Provider store={Store}>
          {/* @ts-ignore */}
          <CustomProvider>
            {/* @ts-ignore */}
            <RootNavigation />
          </CustomProvider>
        </Provider>
      </AppProvider>
    </ErrorBoundary>
  );
}

export default App;
