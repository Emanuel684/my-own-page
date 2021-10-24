/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { FontAwesome } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { ColorSchemeName, Pressable, Text } from 'react-native';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import ModalScreen from '../screens/ModalScreen';
import NotFoundScreen from '../screens/NotFoundScreen';
import HomeScreen from '../screens/HomeScreen';
import WorksScreen from '../screens/WorksScreen';
import PostsScreen from '../screens/PostsScreen';
import SourceScreen from '../screens/SourceScreen';
import ContactScreen from '../screens/ContactScreen';
import CurriculumVitaeScreen from '../screens/CurriculumVitae';
import { RootStackParamList, RootTabParamList, RootTabScreenProps } from '../types';
import LinkingConfiguration from './LinkingConfiguration';
import { FontAwesome5 } from '@expo/vector-icons';

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Root" component={BottomTabNavigator} options={{ headerShown: false }} />
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
      <Stack.Group screenOptions={{ presentation: 'modal' }}>
        <Stack.Screen name="Modal" component={ModalScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
}

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
// const BottomTab = createBottomTabNavigator<RootTabParamList>();
const BottomTab = createMaterialTopTabNavigator();

function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="home"
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme].tint,
        tabBarStyle: {
          // position: 'absolute',
          // top: 0,
          // backgroundColor: 'rgba(100,100,100,0.4)'
          // backgroundColor: 'white',
          // flexDirection: 'row'
        }
      }}>
      <BottomTab.Screen
        name="home"
        component={HomeScreen}
        options={() => ({
          title: 'Emanuel Acevedo Muñoz',
          tabBarIcon: ({ color }) => <FontAwesome5 name="react" size={24} color="black" />,
          headerRight: () => (
            <a
              // onPress={() => navigation.navigate('Modal')}
              // style={({ pressed }) => ({
              //   opacity: pressed ? 0.5 : 1,
              // })}
              href="https://github.com/Emanuel684"
            >
              <FontAwesome
                name="info-circle"
                size={25}
                color={Colors[colorScheme].text}
                style={{ marginRight: 15 }}
              />
            </a>
          ),
        })}
      // options={({ navigation }: RootTabScreenProps<'TabOne'>) => ({
      //   title: 'Emanuel Acevedo Muñoz 1',
      //   tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
      //   headerRight: () => (
      //     <Pressable
      //       onPress={() => navigation.navigate('Modal')}
      //       style={({ pressed }) => ({
      //         opacity: pressed ? 0.5 : 1,
      //       })}>
      //       <FontAwesome
      //         name="info-circle"
      //         size={25}
      //         color={Colors[colorScheme].text}
      //         style={{ marginRight: 15 }}
      //       />
      //     </Pressable>
      //   ),
      // })}
      />
      {/* <BottomTab.Screen
        name="works"
        component={WorksScreen}
        options={() => ({
          title: 'Works',
          // tabBarIcon: ({ color }) => <FontAwesome5 name="react" size={24} color="black" />,
          // headerRight: () => (
          //   <a
          //     // onPress={() => navigation.navigate('Modal')}
          //     // style={({ pressed }) => ({
          //     //   opacity: pressed ? 0.5 : 1,
          //     // })}
          //     href="https://github.com/Emanuel684"
          //   >
          //     <FontAwesome
          //       name="info-circle"
          //       size={25}
          //       color={Colors[colorScheme].text}
          //       style={{ marginRight: 15 }}
          //     />
          //   </a>
          // ),
        })}
      /> */}

<BottomTab.Screen
        name="CurriculumVitaeScreen"
        component={CurriculumVitaeScreen}
        options={() => ({
          title: 'Curriculum Vitae',
          // tabBarIcon: ({ color }) => <FontAwesome5 name="react" size={24} color="black" />,
          // headerRight: () => (
          //   <a
          //     // onPress={() => navigation.navigate('Modal')}
          //     // style={({ pressed }) => ({
          //     //   opacity: pressed ? 0.5 : 1,
          //     // })}
          //     href="https://github.com/Emanuel684"
          //   >
          //     <FontAwesome
          //       name="info-circle"
          //       size={25}
          //       color={Colors[colorScheme].text}
          //       style={{ marginRight: 15 }}
          //     />
          //   </a>
          // ),
        })}
      />
{/* 
      <BottomTab.Screen
        name="posts"
        component={PostsScreen}
        options={() => ({
          title: 'Posts'
        })}
      /> */}

      <BottomTab.Screen
        name="source"
        component={SourceScreen}
        options={() => ({
          title: 'Source',
          tabBarIcon: ({ color }) => <FontAwesome5 name="github" size={24} color="black" />,
          headerRight: () => (
            <Pressable
              onPress={() => console.log("a")}
              style={({ pressed }) => ({
                opacity: pressed ? 0.5 : 1,
              })}>
              <FontAwesome
                name="info-circle"
                size={25}
                color={Colors[colorScheme].text}
                style={{ marginRight: 15 }}
              />
            </Pressable>
          ),
        })}
      />

      <BottomTab.Screen
        name="contact"
        component={ContactScreen}
        options={() => ({
          title: 'Contact',
          // tabBarIcon: ({ color }) => <FontAwesome5 name="github" size={24} color="black" />,
          // headerRight: () => (
          //   <Pressable
          //     onPress={() => console.log("a")}
          //     style={({ pressed }) => ({
          //       opacity: pressed ? 0.5 : 1,
          //     })}>
          //     <FontAwesome
          //       name="info-circle"
          //       size={25}
          //       color={Colors[colorScheme].text}
          //       style={{ marginRight: 15 }}
          //     />
          //   </Pressable>
          // ),
        })}
      />
    </BottomTab.Navigator>
  );
}

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />;
}
