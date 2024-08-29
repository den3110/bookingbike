/**
 * @author datist
 */
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AntDesign, Ionicons, MaterialIcons } from "@expo/vector-icons";
import { useTheme } from "@src/hooks";
import ProfileStack from "./ProfileStack";
import Home from "@modules/app/screens/Tab/Home";

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  const theme = useTheme();

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: theme.primary,
        tabBarStyle: { backgroundColor: "#FFF" },
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color }) => (
            <AntDesign name="home" size={24} color={color} />
          ),
          title: "Khám phá"
        }}
      />
      
      <Tab.Screen
        name="Messages"
        component={ProfileStack}  // Replace this with your Messages component
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="chatbubble-outline" size={24} color={color} />
          ),
          title: "Tin nhắn"
        }}
      />

      <Tab.Screen
        name="Trips"
        component={ProfileStack}  // Replace this with your Trips component
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="bicycle-outline" size={24} color={color} />
          ),
          title: "Chuyến"
        }}
      />

      <Tab.Screen
        name="Support"
        component={ProfileStack}  // Replace this with your Support component
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="support-agent" size={24} color={color} />
          ),
          title: "Hỗ trợ"
        }}
      />

      <Tab.Screen
        name="Login"
        component={ProfileStack}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="log-in-outline" size={24} color={color} />
          ),
          title: "Đăng nhập"
        }}
      />
    </Tab.Navigator>
  );
}
