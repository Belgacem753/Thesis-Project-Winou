import * as React from "react";
import { Text, View } from "react-native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Map from "./map";
import Line from "./Lines";

function Mapfunction(props) {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Map />
    </View>
  );
}
function LinesFunction(props) {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Line navigation={props.navigation} />
    </View>
  );
}

const Tab = createMaterialBottomTabNavigator();

function MyTabs(props) {
  return (
    <Tab.Navigator
      initialRouteName="Profile"
      activeColor="green"
      labelStyle={{ fontSize: 12 }}
      style={{ backgroundColor: "tomato" }}
    >
      <Tab.Screen
        name="Mapfunction"
        component={Mapfunction}
        options={{
          tabBarLabel: "Map",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="map" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="LinesFunction"
        component={LinesFunction}
        options={{
          tabBarLabel: "Lines",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="subway" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default MyTabs;
