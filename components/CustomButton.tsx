/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/require-default-props */
/* eslint-disable global-require */
import React, {
    useState,
    ReactElement,
    ReactNode,
    useEffect,
    forwardRef,
  } from 'react';
  import { View, ViewStyle, StyleSheet, Pressable } from 'react-native';
  
  interface Props {
    children: ReactNode;
    onPress: any;
    initialColor?: string;
    hoverColor?: string;
    pressColor?: any;
    style?: ViewStyle[] | ViewStyle;
    disabled?: boolean;
  }
  
  const CustomButton = (
    {
      children,
      onPress,
      initialColor,
      hoverColor,
      pressColor,
      style = { flex: 1 },
      disabled = false,
    }: Props,
    ref: any,
  ): ReactElement => {
    const [state, setState] = useState({
      hover: false,
    });
    const [pressed, setPressed] = useState(false);
    useEffect(() => {
      setPressed(false);
    }, [state.hover]);
  
    return (
      <View
        style={[
          style,
          { overflow: 'hidden' },
          pressed
            ? { backgroundColor: disabled ? 'lightgray' : pressColor }
            : state.hover
            ? { backgroundColor: disabled ? 'lightgray' : hoverColor }
            : { backgroundColor: disabled ? 'lightgray' : initialColor },
          { overflow: 'hidden' },
        ]}
        onMouseEnter={() => setState({ hover: true })}
        onMouseLeave={() => setState({ hover: false })}
      >
        <Pressable
          ref={ref}
          onPress={() => {
            onPress();
            setState({ hover: false });
          }}
          disabled={disabled}
          style={[
            {
              justifyContent:
                !Array.isArray(style) && style.justifyContent
                  ? style.justifyContent
                  : 'center',
              alignItems:
                !Array.isArray(style) && style.alignItems
                  ? style.alignItems
                  : 'center',
            },
            styles.highlight,
          ]}
          onPressIn={() => setPressed(true)}
          onPressOut={() => setPressed(false)}
        >
          {children}
        </Pressable>
      </View>
    );
  };
  
  export default forwardRef(CustomButton);
  
  const styles = StyleSheet.create({
    highlight: {
      backgroundColor: 'transparent',
      margin: 0,
      marginRight: 0,
      marginLeft: 0,
      marginTop: 0,
      marginBottom: 0,
      width: '100%',
      height: '100%',
      flex: 1,
    },
  });
  