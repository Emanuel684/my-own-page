import { FontAwesome } from '@expo/vector-icons';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import * as React from 'react';

export default function useCachedResources() {
  const [isLoadingComplete, setLoadingComplete] = React.useState(false);

  // Load any resources or data that we need prior to rendering the app
  React.useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        SplashScreen.preventAutoHideAsync();

        // Load fonts
        await Font.loadAsync({
          ...FontAwesome.font,
          'space-mono': require('../assets/fonts/SpaceMono-Regular.ttf'),
          'MPLUSRounded1c-Black': require('../assets/fonts/M_PLUS_Rounded_1c/MPLUSRounded1c-Black.ttf'),
          'MPLUSRounded1c-Bold': require('../assets/fonts/M_PLUS_Rounded_1c/MPLUSRounded1c-Bold.ttf'),
          'MPLUSRounded1c-ExtraBold': require('../assets/fonts/M_PLUS_Rounded_1c/MPLUSRounded1c-ExtraBold.ttf'),
          'MPLUSRounded1c-Light': require('../assets/fonts/M_PLUS_Rounded_1c/MPLUSRounded1c-Light.ttf'),
          'MPLUSRounded1c-Medium': require('../assets/fonts/M_PLUS_Rounded_1c/MPLUSRounded1c-Medium.ttf'),
          'MPLUSRounded1c-Regular': require('../assets/fonts/M_PLUS_Rounded_1c/MPLUSRounded1c-Regular.ttf'),
          'MPLUSRounded1c-Thin': require('../assets/fonts/M_PLUS_Rounded_1c/MPLUSRounded1c-Thin.ttf')
        });
      } catch (e) {
        // We might want to provide this error information to an error reporting service
        console.warn(e);
      } finally {
        setLoadingComplete(true);
        SplashScreen.hideAsync();
      }
    }

    loadResourcesAndDataAsync();
  }, []);

  return isLoadingComplete;
}
