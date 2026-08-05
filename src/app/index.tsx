import TextInputCus from "@/components/TextInputCus";
import WrapperContainer from "@/components/WrapperContainer";
import { colors } from "@/constants/colors";
import imagePath from "@/constants/imagePath";
import { moderateScale } from "@/constants/sizes";
import { useState } from "react";
import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

// WrapperConatainer
const index = () => {
  const [person, setPerson] = useState(1);
  const [perPersenAmount, setPerPerson] = useState(0);
  const [billAmount, setBillAmount] = useState(0);
  const [tipPercentage, setTipPecentage] = useState(10);

  const percentageItem = [
    {
      id: 1,
      item: "10",
    },
    {
      id: 2,
      item: "15",
    },
    {
      id: 3,
      item: "18",
    },
    {
      id: 4,
      item: "20",
    },
    {
      id: 1,
      item: "25",
    },
  ];

  const increasePerson = () => {
    setPerson(person + 1);
  };
  const decreasePerson = () => {
    if (person > 1) {
      setPerson(person - 1);
    } else alert("not allow");
  };

  const tipAmount = (Number(billAmount) * Number(tipPercentage)) / 100;
  const totalBillAmount = Number(billAmount) + Number(tipAmount);
  const perPersonBill = Number(totalBillAmount) / Number(person);

  return (
    <WrapperContainer>
      <ScrollView
        bounces={false}
        style={{ flex: 1 }}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.headerViewStyele}>
          <Image
            source={imagePath.headerIcon}
            style={{ height: moderateScale(20), width: moderateScale(20) }}
          />
          <Text style={styles.headerTextStyle}>TipPrecision</Text>
        </View>
        <View style={styles.totalViewStyle}>
          <Text style={styles.totlaText}>TOTAL PER PERSON</Text>
          <Text style={styles.priceText}>$ {perPersonBill.toFixed(2)}</Text>
        </View>
        <Text style={styles.billText}>Bill Amount = {billAmount}</Text>
        <TextInputCus value={billAmount} onChangeText={setBillAmount} />

        <Text style={styles.billText}>Tip Percentage</Text>

        <FlatList
          scrollEnabled={false}
          numColumns={3}
          style={{
            backgroundColor: colors.silver,
            padding: moderateScale(12),
            borderRadius: moderateScale(12),
          }}
          columnWrapperStyle={{
            gap: moderateScale(12),
            marginBottom: moderateScale(12),
          }}
          keyExtractor={(item) => item.id.toString()}
          data={percentageItem}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
                onPress={() => setTipPecentage(item.item)}
                style={{
                  ...styles.flitListStyle,
                  backgroundColor:
                    tipPercentage == item.item
                      ? colors.green
                      : colors.whiteColor,
                }}
              >
                <Text>{item.item}%</Text>
              </TouchableOpacity>
            );
          }}
        />

        <Text style={styles.billText}>Number of People</Text>

        <View style={styles.numberViewStyle}>
          <TouchableOpacity onPress={() => decreasePerson()}>
            <Image
              style={styles.imageButtonStyle}
              source={imagePath.minus_icon}
            />
          </TouchableOpacity>
          <View style={{ alignItems: "center", justifyContent: "center" }}>
            <Text style={styles.personTextStyle}>{person}</Text>
            <Text style={styles.personTextStyle1}>person</Text>
          </View>
          <TouchableOpacity onPress={() => increasePerson()}>
            <Image
              style={styles.imageButtonStyle}
              source={imagePath.add_icon}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.subViewStyle}>
          <View style={styles.subtotal}>
            <Text style={styles.subtotla}>Subtotal</Text>
            <Text style={styles.subAmount}>{billAmount}</Text>
          </View>

          <View style={styles.subtotal}>
            <Text style={styles.subtotla}>Tip Amount</Text>
            <Text style={{ ...styles.subAmount, color: colors.green }}>
              {tipAmount}
            </Text>
          </View>

          <View
            style={{
              height: moderateScale(2),
              backgroundColor: colors.black10,
              opacity: 0.5,
            }}
          />

          <View style={styles.subtotal}>
            <Text style={styles.subtotla}>TOTAL BILL</Text>
            <Text
              style={{
                ...styles.subAmount,
                color: colors.headerTextColor,
                fontSize: moderateScale(22),
              }}
            >
              {totalBillAmount}
            </Text>
          </View>
        </View>

        <View style={{ height: moderateScale(40) }} />
      </ScrollView>
    </WrapperContainer>
  );
};

export default index;

const styles = StyleSheet.create({
  headerTextStyle: {
    fontSize: moderateScale(20),
    color: colors.headerTextColor,
    fontWeight: "700",
  },
  headerViewStyele: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: moderateScale(12),
    gap: moderateScale(4),
  },
  totalViewStyle: {
    height: moderateScale(120),
    backgroundColor: colors.headerTextColor,
    marginTop: moderateScale(20),
    borderRadius: moderateScale(12),
    alignItems: "center",
    justifyContent: "center",
    gap: moderateScale(6),
  },
  totlaText: {
    fontSize: moderateScale(13),
    color: colors.whiteColor,
    opacity: 0.7,
    fontWeight: "500",
  },
  priceText: {
    fontSize: moderateScale(32),
    color: colors.whiteColor,
    fontWeight: "500",
  },
  billText: {
    fontSize: moderateScale(12),
    color: colors.black10,
    fontWeight: "600",
    marginTop: moderateScale(24),
    marginBottom: moderateScale(12),
  },
  flitListStyle: {
    height: moderateScale(34),
    width: moderateScale(96),
    borderWidth: 1,
    borderRadius: moderateScale(6),
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#C1C6D7",
  },
  numberViewStyle: {
    height: moderateScale(84),
    backgroundColor: colors.whiteColor,
    borderRadius: moderateScale(12),
    alignItems: "center",
    gap: moderateScale(6),
    borderWidth: 0.3,
    borderColor: colors.black10,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: moderateScale(16),
  },
  imageButtonStyle: {
    height: moderateScale(48),
    width: moderateScale(48),
  },
  personTextStyle: {
    fontSize: moderateScale(28),
    color: colors.personColor,
    fontWeight: "700",
  },
  personTextStyle1: {
    fontSize: moderateScale(14),
    color: colors.personColor,
    fontWeight: "400",
  },

  subViewStyle: {
    marginTop: moderateScale(20),
    height: moderateScale(160),
    backgroundColor: colors.whiteColor,
    borderRadius: moderateScale(12),
    borderWidth: 0.3,
    borderColor: colors.black10,
    paddingHorizontal: moderateScale(16),
    paddingTop: moderateScale(12),
    gap: moderateScale(16),
  },
  subtotal: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  subtotla: {
    fontSize: moderateScale(14),
    color: colors.black10,
    fontWeight: "400",
  },
  subAmount: {
    fontSize: moderateScale(20),
    color: colors.personColor,
    fontWeight: "600",
  },
});
