import React, { useEffect } from 'react';
import { View, Text } from 'react-native';

import { AppStrings } from '../../utils';
import { useAppNavigation } from '../../hooks';
import { styles } from './styles';

const LoadingScreen = () => {
  const navigation = useAppNavigation('LoadingScreen');

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('WelcomeScreen');
    }, 2000);
  }, []);

  return (
    <View style={[styles.flexContainer]}>
      <View style={[styles.container]}>
        <Text style={[styles.headerText]}>{AppStrings.speedy_chow}</Text>
        <Text style={[styles.mediumText]}>{AppStrings.version}</Text>
      </View>
      <View style={[styles.bottomContainer]}>
        <Text style={[styles.bottomText1]}>
          {AppStrings.as_fast_as_lightning}
        </Text>
        <Text style={[styles.bottomText2]}>
          {AppStrings.as_delicious_as_thunder}
        </Text>
      </View>
    </View>
  );
};

export default LoadingScreen;
