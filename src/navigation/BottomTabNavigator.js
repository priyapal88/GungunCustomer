// import React from 'react';
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// import Feather from 'react-native-vector-icons/Feather';
// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import {Platform} from 'react-native';
//
// import AccountManagement from '../screens/Settings/AccountManagement/AccountManagementScreen';
// import {Font_Family} from '../utils/Fontfamily';
// import {Colors} from '../utils/Colors';
// import {FONT_SIZES} from '../utils/FontSize';
// import NoPageFound from '../screens/NoPageFound';
// import Home from '../screens/Home/HomeScreen';
//
// const Tab = createBottomTabNavigator();
//
// function TabNavigator() {
//   return (
//     <Tab.Navigator
//       screenOptions={{
//         tabBarActiveTintColor: Colors.primary,
//         tabBarInactiveTintColor: '#7E7E7E',
//         headerShown: false,
//         tabBarShadowOpacity: true,
//         tabBarStyle: {
//           borderTopLeftRadius: 20,
//           borderTopRightRadius: 20,
//           height: 80,
//           elevation: 4,
//           shadowOffset: {width: 0, height: 4},
//           shadowOpacity: 0.3,
//           shadowRadius: 4,
//         },
//         tabBarLabelStyle: {
//           fontSize: FONT_SIZES.tweleve,
//           fontFamily: Font_Family.medium,
//           bottom: Platform.OS === 'android' ? 10 : 0,
//         },
//       }}>
//       <Tab.Screen
//         name="Home"
//         component={Home}
//         options={{
//           tabBarLabel: 'Home',
//           tabBarIcon: ({color}) => (
//             <MaterialCommunityIcons
//               name="home"
//               color={color === Colors.primary ? Colors.primary : '#B3B3B3'}
//               size={26}
//             />
//           ),
//         }}
//       />
//
//       <Tab.Screen
//         name="Account"
//         component={NoPageFound}
//         options={{
//           tabBarLabel: 'Search',
//           tabBarIcon: ({color}) => (
//             <MaterialCommunityIcons
//               name="file-search-outline"
//               color={color === Colors.primary ? Colors.primary : '#B3B3B3'}
//               size={26}
//             />
//           ),
//         }}
//       />
//
//       <Tab.Screen
//         name="Cart"
//         component={NoPageFound}
//         options={{
//           tabBarLabel: 'Cart',
//           tabBarIcon: ({color}) => (
//             <MaterialCommunityIcons
//               name="cart-outline"
//               color={color === Colors.primary ? Colors.primary : '#B3B3B3'}
//               size={26}
//             />
//           ),
//         }}
//       />
//
//       <Tab.Screen
//         name="Setting"
//         component={AccountManagement}
//         options={{
//           tabBarLabel: 'Settings',
//           tabBarIcon: ({color}) => (
//             <Feather
//               name="settings"
//               color={color === Colors.primary ? Colors.primary : '#B3B3B3'}
//               size={23}
//             />
//           ),
//         }}
//       />
//     </Tab.Navigator>
//   );
// }
// export default TabNavigator;
