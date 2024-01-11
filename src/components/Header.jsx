import { Dimensions, Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { useUser } from '@clerk/clerk-expo';
import { FontAwesome } from '@expo/vector-icons';
import Colors from '../utils/Colors';

const Header = () => {
  const { user } = useUser();
  return (
    <View style={styles.headerStyle}>
      <Image
        source={{ uri: user?.imageUrl }}
        style={{ width: 45, height: 45, borderRadius: 99 }}
      />
      <Image
        source={require('../../assets/images/logo.png')}
        style={{
          width: 200,
          height: 45,
          objectFit: 'contain',
          borderRadius: 99,
        }}
      />
      <FontAwesome name='filter' size={24} color='black' />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  headerStyle: {
    display: 'flex',
    flex: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: Colors.WHITE_TRNSP,
  },
});
