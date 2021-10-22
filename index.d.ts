declare module 'aws-amplify-react-native';
declare module '*.js';
declare module '*.jpg';
declare module '*.css';
declare module '*.png';
declare module '*.ico';
declare module 'react-native-expo-viewport-units';
declare module 'modal-react-native-web';
declare module 'toggle-switch-react-native';
declare module 'modal-enhanced-react-native-web';
declare module 'google-map-react';
declare module 'react-native-shapes';
declare module 'enzyme-adapter-react-16';
declare module 'react-native-web';
declare module 'react-native-table-component';
declare module '*.svg' {
  import React from 'react';
  import { SvgProps } from 'react-native-svg';
  const content: React.FC<SvgProps>;
  export default content;
}