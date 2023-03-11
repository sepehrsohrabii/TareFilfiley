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
import theme from "../../config/theme";
import RBSheet from "react-native-raw-bottom-sheet";
import AddEditProductForm from "./addEditProductForm";

const SingleProductItem = ({ title, price, desc, img }) => {
  const refEditProductSheet = useRef();
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
                refEditProductSheet.current.open();
              }}
            >
              <Icon
                type="feather"
                name="edit"
                color={theme.colors.two}
                size={35}
              />
            </TouchableOpacity>
            <RBSheet
              ref={refEditProductSheet}
              closeOnDragDown={true}
              height={700}
              customStyles={{
                wrapper: {
                  backgroundColor: "transparent",
                },
                container: {
                  backgroundColor: theme.colors.white,
                  paddingHorizontal: 60,
                  borderTopLeftRadius: 30,
                  borderTopRightRadius: 30,
                  shadowColor: "#000",
                  shadowOffset: {
                    width: 0,
                    height: -5,
                  },
                  shadowOpacity: 0.2,
                  shadowRadius: 6.27,

                  elevation: 10,
                },
                draggableIcon: {
                  backgroundColor: theme.colors.one,
                },
              }}
            >
              <AddEditProductForm
                bottomSheet={refEditProductSheet}
                title={title}
                desc={desc}
                price={price}
                img={img}
              />
            </RBSheet>
          </View>
        );
      }}
    >
      <View style={styles.priceBox}>
        <Text style={styles.tooman}>تومان</Text>
        <Text style={styles.price}>{price}</Text>
      </View>
      <View style={styles.flexBox}>
        <View>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subTitle}>{desc}</Text>
        </View>
        <Image style={styles.img} source={img} />
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
    justifyContent: "space-between",
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
  },
  img: {
    width: 60,
    height: 60,
    borderRadius: 10,
    marginLeft: 10,
  },
  title: {
    fontFamily: theme.typography.productTitle.fontFamily,
    fontSize: theme.typography.productTitle.fontSize,
    color: theme.colors.darkTextColor,
    textAlign: "right",
    marginBottom: 5,
  },
  subTitle: {
    fontFamily: theme.typography.productSubTitle.fontFamily,
    fontSize: theme.typography.productSubTitle.fontSize,
    color: theme.colors.lightTextColor,
    textAlign: "right",
  },
  priceBox: {
    flexDirection: "row",
    alignItems: "center",
  },
  tooman: {
    fontFamily: theme.typography.productSubTitle.fontFamily,
    fontSize: theme.typography.productSubTitle.fontSize,
    color: theme.colors.lightTextColor,
    textAlign: "right",
  },
  price: {
    fontFamily: theme.typography.productPrice.fontFamily,
    fontSize: theme.typography.productPrice.fontSize,
    color: theme.colors.darkTextColor,
    textAlign: "right",
    marginLeft: 5,
  },
  swipedButton: {
    height: 80,
    alignItems: "center",
    justifyContent: "center",
  },
});
export default SingleProductItem;
