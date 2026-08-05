import { colors } from "@/constants/colors";
import { moderateScale } from "@/constants/sizes";
import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const WrapperContainer = ({ children }: any) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.appColor }}>
      <View
        style={{
          flex: 1,
          backgroundColor: colors.appColor,
          paddingHorizontal: moderateScale(20),
        }}
      >
        {children}
      </View>
    </SafeAreaView>
  );
};

export default WrapperContainer;

const styles = StyleSheet.create({});
