import { RouteProp } from '@react-navigation/native';

export type RootStackParamList = {
  LoadingScreen: undefined;
  WelcomeScreen: undefined;
};

export type RootRouteProps<RouteName extends keyof RootStackParamList> =
  RouteProp<RootStackParamList, RouteName>;
