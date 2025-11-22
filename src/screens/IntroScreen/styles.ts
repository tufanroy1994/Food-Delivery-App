import { Dimensions, StyleSheet } from 'react-native';
const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
  flexContainer: {
    flex: 1,
  },
  slide: {
    width: width,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 1,
  },

  image: {
    width: '70%',
    height: height * 0.35,
  },

  title: {
    fontSize: 22,
    fontWeight: '700',
    color: '#FF4E4E',
    marginTop: 20,
  },

  description: {
    fontSize: 14,
    color: '#444',
    textAlign: 'center',
    marginTop: 10,
  },

  dotContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginVertical: 20,
  },

  dot: {
    height: 8,
    width: 10,
    backgroundColor: '#ff4e4e',
    borderRadius: 4,
    marginHorizontal: 5,
  },

  bottomButtons: {
    alignItems: 'center',
    marginBottom: 40,
  },

  nextButton: {
    backgroundColor: '#FF4E4E',
    paddingVertical: 12,
    paddingHorizontal: 50,
    borderRadius: 30,
    marginBottom: 10,
  },

  nextText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },

  skipText: {
    color: '#444',
    fontSize: 14,
  },
});
