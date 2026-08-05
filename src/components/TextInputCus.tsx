import { colors } from "@/constants/colors";
import imagePath from "@/constants/imagePath";
import { moderateScale } from "@/constants/sizes";
import { Image, StyleSheet, TextInput, View } from "react-native";

const TextInputCus = ({ onChangeText, value }: any) => {
  return (
    <View style={styles.mainView}>
      <Image style={styles.image} source={imagePath.Margindollar} />
      <TextInput
        value={value}
        onChangeText={onChangeText}
        maxLength={15}
        keyboardType="number-pad"
        style={styles.inputStyle}
        placeholder="$00.00"
      />
    </View>
  );
};

export default TextInputCus;

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    height: moderateScale(62),
    borderWidth: 1,
    borderRadius: moderateScale(16),
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: moderateScale(16),
    gap: moderateScale(6),
    borderColor: colors.black10,
  },
  image: {
    width: moderateScale(24),
    height: moderateScale(24),
    resizeMode: "contain",
  },
  inputStyle: {
    flex: 1,
    fontSize: moderateScale(22),
    color: "black",
  },
});
