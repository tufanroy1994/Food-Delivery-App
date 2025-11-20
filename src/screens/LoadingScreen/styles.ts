import { StyleSheet } from 'react-native';
import { AppColors, FontFamily, FontSizes, hp, wp } from '../../utils';

export const styles = StyleSheet.create({
  flexContainer: {
    flex: 1,
    backgroundColor: AppColors.GRADIENT_BACKGROUND,
    borderColor: AppColors.WHITE_TEXT,
    borderRadius: wp(3.5),
    borderWidth: wp(1.5),
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    color: AppColors.WHITE_TEXT,
    fontFamily: FontFamily.Roboto,
    fontSize: FontSizes.FONT_SIZE_20,
    fontWeight: '900',
    paddingTop: hp(30),
  },
  mediumText: {
    color: AppColors.WHITE_TEXT,
    fontFamily: FontFamily.Roboto_SemiBold,
    fontSize: FontSizes.FONT_SIZE_10,
    fontWeight: '600',
  },
  bottomContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomText1: {
    color: AppColors.WHITE_TEXT,
    fontFamily: FontFamily.Roboto,
    fontSize: FontSizes.FONT_SIZE_11,
    fontWeight: '600',
    paddingTop: hp(50),
  },
  bottomText2: {
    color: AppColors.WHITE_TEXT,
    fontFamily: FontFamily.Roboto,
    fontSize: FontSizes.FONT_SIZE_11,
    fontWeight: '600',
  },
});
