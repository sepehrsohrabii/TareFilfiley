import React, { useRef } from "react";
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  Button,
  TouchableOpacity,
  Image,
} from "react-native";
import { ListItem, Icon } from "@rneui/themed";
import theme from "../config/theme";
import { useNavigation } from "@react-navigation/native";

const SingleRestaurantItem = ({ title, logo, created_at }) => {
  const navigation = useNavigation();
  return (
    <ListItem.Swipeable
      containerStyle={styles.container}
      leftWidth={80}
      rightWidth={90}
      minSlideWidth={0}
      leftContent={() => (
        <TouchableOpacity style={styles.swipedButton}>
          <Icon
            type="material"
            name="delete-forever"
            color={theme.colors.four}
            size={40}
          />
        </TouchableOpacity>
      )}
      rightContent={() => {
        return (
          <View>
            <TouchableOpacity
              style={styles.swipedButton}
              onPress={() => {
                navigation.navigate("CreateMenu");
              }}
            >
              <Icon
                type="feather"
                name="edit"
                color={theme.colors.two}
                size={35}
              />
            </TouchableOpacity>
          </View>
        );
      }}
    >
      <View style={styles.flexBox}>
        <View style={styles.flexBox2}>
          <Text style={styles.subTitle}>{created_at}</Text>
          <View>
            {/* <Text style={styles.subTitle2}>مجموعه‌ی</Text> */}
            <Text style={styles.title}>{title}</Text>
          </View>
        </View>
        <Image style={styles.img} source={logo} />
      </View>
    </ListItem.Swipeable>
  );
};
const styles = StyleSheet.create({
  container: {
    height: 80,
    borderColor: theme.colors.one,
    borderWidth: 0,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "right",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,
    backgroundColor: theme.colors.white,
    elevation: 11,
    marginBottom: 10,
  },
  flexBox: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  flexBox2: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    flex: 1,
  },
  img: {
    width: 60,
    height: 60,
    borderRadius: 10,
    marginLeft: 10,
  },
  title: {
    fontFamily: theme.typography.heading5.fontFamily,
    fontSize: theme.typography.heading5.fontSize,
    color: theme.colors.darkTextColor,
    textAlign: "right",
  },
  subTitle: {
    fontFamily: theme.typography.heading6.fontFamily,
    fontSize: theme.typography.heading6.fontSize,
    color: theme.colors.lightTextColor,
    textAlign: "right",
  },
  subTitle2: {
    fontFamily: theme.typography.productSubTitle.fontFamily,
    fontSize: theme.typography.productSubTitle.fontSize,
    color: theme.colors.lightTextColor,
    textAlign: "right",
    marginBottom: 5,
  },

  swipedButton: {
    height: 80,
    alignItems: "center",
    justifyContent: "center",
  },
});
export default SingleRestaurantItem;
