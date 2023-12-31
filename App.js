import React, {useEffect, useRef} from 'react';
import SplashScreen from 'react-native-splash-screen';
import {Provider as StoreProvider} from 'react-redux';
import {MD3LightTheme as DefaultTheme} from 'react-native-paper';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {Provider as PaperProvider} from 'react-native-paper';
import notifee, {
  AndroidColor,
  AndroidImportance,
  EventType,
} from '@notifee/react-native';
import messaging, {firebase} from '@react-native-firebase/messaging';
import FlashMessage from 'react-native-flash-message';

import Navigation from './src/navigation';
import WithAxios from './src/lib/WithAxios';
import {ErrorContextProvider} from './src/context/ErrorProvider';
import {MsgContextProvider} from './src/context/MessageProvider';
import {store} from './src/store';

const App = () => {
  useEffect(() => {
    (async () => {
      await notifee.requestPermission();
      const channelId = await notifee.createChannel({
        id: 'default',
        name: 'Default Channel',
        vibration: true,
        vibrationPattern: [300, 500],
        lights: true,
        lightColor: AndroidColor.AQUA,
      });
    })();

    return notifee.onForegroundEvent(({type, detail}) => {
      switch (type) {
        case EventType.DISMISSED:
          console.log('User dismissed notification', detail.notification);
          break;
        case EventType.PRESS:
          console.log('User pressed notification', detail.notification);
          break;
      }
    });
  }, []);

  async function onMessageReceived(message) {
    await notifee.displayNotification({
      title: message.notification.title,
      body: message.notification.body,
      android: {
        channelId: 'default',
        importance: AndroidImportance.HIGH,
      },
    });
  }

  useEffect(() => {
    messaging().onMessage(onMessageReceived);
    // messaging().setBackgroundMessageHandler(onMessageReceived);
  }, []);

  const firebaseConfig = {
    apiKey: 'AIzaSyAE362bctWaRVDuymOBAD2iHgd7qOUaTUg',
    authDomain: 'gungun-ded16.firebaseapp.com',
    projectId: 'gungun-ded16',
    storageBucket: 'gungun-ded16.appspot.com',
    messagingSenderId: '1048895477759',
    appId: '1:1048895477759:ios:bdd59facedc91cb45379ca',
  };

  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      SplashScreen.hide();
    }, 3000);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  const theme = {
    ...DefaultTheme,
    dark: false,
    roundness: 4,
    colors: {
      primary: 'rgb(0,92,121)',
      onPrimary: 'rgb(255, 255, 255)',
      primaryContainer: 'rgb(0,92,121)',
      onPrimaryContainer: 'rgb(255,255,255)', // for textColor/iconColor
      secondary: 'rgb(222,168,18)',
      onSecondary: 'rgb(255, 255, 255)',
      secondaryContainer: 'rgb(222,168,18)',
      onSecondaryContainer: 'rgb(150,114,12)', // for textColor/iconColor
      tertiary: 'rgb(56, 102, 101)',
      onTertiary: 'rgb(255, 255, 255)',
      tertiaryContainer: 'rgb(187, 236, 234)',
      onTertiaryContainer: 'rgb(0, 32, 31)',
      error: 'rgb(186, 26, 26)',
      onError: 'rgb(255, 255, 255)',
      errorContainer: 'rgb(255, 218, 214)',
      onErrorContainer: 'rgb(65, 0, 2)',
      background: 'rgb(253, 253, 245)',
      onBackground: 'rgb(26, 28, 24)',
      surface: 'rgb(253, 253, 245)',
      onSurface: 'rgb(26, 28, 24)',
      surfaceVariant: 'rgb(224, 228, 214)',
      onSurfaceVariant: 'rgb(68, 72, 62)',
      outline: 'rgb(116, 121, 109)',
      outlineVariant: 'rgb(196, 200, 186)',
      shadow: 'rgb(0, 0, 0)',
      scrim: 'rgb(0, 0, 0)',
      inverseSurface: 'rgb(47, 49, 44)',
      inverseOnSurface: 'rgb(241, 241, 234)',
      inversePrimary: 'rgb(129, 221, 54)',
      elevation: {
        level0: 'transparent',
        level1: 'rgba(0,92,121,0.05)',
        level2: 'rgba(0,92,121,0.08)',
        level3: 'rgba(0,92,121,0.11)',
        level4: 'rgba(0,92,121,0.12)',
        level5: 'rgba(0,92,121,0.14)',
      },
      surfaceDisabled: 'rgba(26, 28, 24, 0.12)',
      onSurfaceDisabled: 'rgba(26, 28, 24, 0.38)',
      backdrop: 'rgba(45, 50, 40, 0.4)',
      custom0: 'rgb(135, 82, 0)',
      onCustom0: 'rgb(255, 255, 255)',
      custom0Container: 'rgb(255, 221, 186)',
      onCustom0Container: 'rgb(43, 23, 0)',
    },
  };

  const flashMessage = useRef();

  return (
    <SafeAreaProvider>
      <StoreProvider store={store}>
        <PaperProvider
          theme={theme}
          settings={{
            icon: props => <AntDesign {...props} />,
          }}>
          <WithAxios />
          <ErrorContextProvider>
            <MsgContextProvider>
              <Navigation />
              <FlashMessage position={'bottom'} ref={flashMessage} />
            </MsgContextProvider>
          </ErrorContextProvider>
        </PaperProvider>
      </StoreProvider>
    </SafeAreaProvider>
  );
};
export default App;
