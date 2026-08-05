import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

const guidelineBaseWidth = 375;
const guidelineBaseHeight = 812;

export const scale = (size: number) => (width / guidelineBaseWidth) * size;

export const verticalScale = (size: number) =>
  (height / guidelineBaseHeight) * size;

export const moderateScale = (size: number, factor = 0.5) =>
  size + (scale(size) - size) * factor;

export const SIZES = {
  width,
  height,

  // Spacing
  xs: moderateScale(4),
  sm: moderateScale(8),
  md: moderateScale(16),
  lg: moderateScale(24),
  xl: moderateScale(32),
  xxl: moderateScale(40),

  // Border Radius
  radiusXS: moderateScale(4),
  radiusSM: moderateScale(8),
  radiusMD: moderateScale(12),
  radiusLG: moderateScale(16),
  radiusXL: moderateScale(24),

  // Icons
  iconSM: moderateScale(16),
  iconMD: moderateScale(24),
  iconLG: moderateScale(32),
  iconXL: moderateScale(48),

  // Font Sizes
  h1: moderateScale(32),
  h2: moderateScale(28),
  h3: moderateScale(24),
  h4: moderateScale(20),
  body: moderateScale(16),
  caption: moderateScale(14),
  small: moderateScale(12),

  // Helpers
  scale,
  verticalScale,
  moderateScale,
};

export default SIZES;
