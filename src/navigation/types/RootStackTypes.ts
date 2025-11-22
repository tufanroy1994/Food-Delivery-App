import { RouteProp } from '@react-navigation/native';

export type RootStackParamList = {
  LoadingScreen: undefined;
  WelcomeScreen: undefined;
  IntroScreen: undefined;
  LoginScreen: undefined;
};

export type RootRouteProps<RouteName extends keyof RootStackParamList> =
  RouteProp<RootStackParamList, RouteName>;
