import React from 'react';
import * as WebBrowser from 'expo-web-browser';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import Colors from '../utils/Colors';
import { useWarmUpBrowser } from '../../warmUpBrowser';
import { useOAuth } from '@clerk/clerk-expo';

WebBrowser.maybeCompleteAuthSession();
const LoginScreen = () => {
  useWarmUpBrowser();

  const { startOAuthFlow } = useOAuth({ strategy: 'oauth_google' });
  // const { startOAuthFlow: appleAuth } = useOAuth({ strategy: 'oauth_apple' });
  // const { startOAuthFlow: facebookAuth } = useOAuth({ strategy: 'oauth_facebook' });

  const googleSignIn = React.useCallback(async () => {
    try {
      const { createdSessionId, signIn, signUp, setActive } =
        await startOAuthFlow();

      if (createdSessionId) {
        setActive({ session: createdSessionId });
      } else {
      }
    } catch (err) {
      console.log('OAuth error', err);
    }
  }, []);
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/images/logo.png')}
        style={styles.logoImage}
      />
      <Image
        source={require('../../assets/images/ev-energy.png')}
        style={styles.bgImage}
      />
      <View>
        <Text style={styles.heading}>
          Your Ultimate EV charging station Finder App
        </Text>
        <Text style={styles.desc}>Find the nearest EV station near you</Text>
        <TouchableOpacity onPress={googleSignIn} style={styles.button}>
          <Text style={styles.buttonTxt}>Login with Google</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  logoImage: {
    width: 200,
    height: 40,
    objectFit: 'contain',
  },
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 80,
  },
  bgImage: {
    width: Dimensions.get('screen').width,
    height: 200,
    marginTop: 20,
    objectFit: 'cover',
  },
  heading: {
    fontSize: 25,
    fontFamily: 'outfit-bold',
    textAlign: 'center',
    marginTop: 20,
    color: Colors.BLACK,
  },
  desc: {
    fontSize: 17,
    fontFamily: 'outfit-regular',
    textAlign: 'center',
    marginTop: 15,
    color: Colors.GRAY,
  },
  button: {
    backgroundColor: Colors.PRIMARY,
    padding: 16,
    display: 'flex',
    borderRadius: 99,
    marginTop: 40,
  },
  buttonTxt: {
    color: Colors.WHITE,
    fontFamily: 'outfit-regular',
    textAlign: 'center',
    fontSize: 16,
  },
});
