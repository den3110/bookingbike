/**
 * @author Ali Burhan Keskin <alikeskin@milvasoft.com>
 */
import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { enableScreens } from "react-native-screens";
import { useTheme } from "@src/hooks";
import Routes, { ProfileStackParams } from "@utils/Routes";
import Profile from "@modules/profile/screens/Profile";
import Settings from "@modules/profile/screens/Settings";
import Post from "@modules/profile/screens/Post";
import translate from "@helpers/localization";
import { ScreenOptions } from "@utils/ScreenOptions";
import AccountScreen from "@modules/profile/screens/Account";
import BalanceScreen from "@modules/profile/screens/Balance";
import BikeListScreen from "@modules/profile/screens/BikeListScreen";
import RentBike from "@modules/profile/screens/RentBike";

enableScreens();

const Stack = createStackNavigator<ProfileStackParams>();

function ProfileStack() {
  const theme = useTheme();
  return (
    <Stack.Navigator
      initialRouteName={Routes.Profile}
      screenOptions={{ ...ScreenOptions, headerTintColor: theme.primary }}
    >
      <Stack.Screen
        name={Routes.Profile}
        component={Profile}
        options={{
          headerTitle: translate("navigation.profile"),
          headerShown: false,
        }}
      />

      <Stack.Screen
        name={Routes.Settings}
        component={Settings}
        options={{
          headerTitle: translate("navigation.settings"),
        }}
      />

      <Stack.Screen
        name={Routes.Post}
        component={Post}
        options={({ route }) => ({ headerTitle: route.params.username })}
      />
      <Stack.Screen
        name={Routes.Account}
        component={AccountScreen}
        options={({route})=> ({headerShown: false})}
      />
      <Stack.Screen
        name={Routes.Balance}
        component={BalanceScreen}
        options={({route})=> ({headerShown: false})}
      />
      <Stack.Screen
        name={Routes.BikeListScreen}
        component={BikeListScreen}
        options={({route})=> ({headerShown: false})}
      />
      <Stack.Screen
        name={Routes.RentBike}
        component={RentBike}
        options={({route})=> ({headerShown: false})}
      />
    </Stack.Navigator>
  );
}

export default React.memo(ProfileStack);
