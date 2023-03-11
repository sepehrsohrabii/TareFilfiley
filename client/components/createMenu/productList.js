import { Icon } from "@rneui/themed";
import React from "react";
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import theme from "../../config/theme";
import SingleProductItem from "./singleProductItem";

const ProductIMG = require("../../assets/img/food (1).jpg");

const DATA = [
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "صبحانه",
    price: "۲۰۰،۰۰۰",
    desc: "کره، پنیر، کوفت و درد",
    img: ProductIMG,
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "نوشیدنی",
    price: "۲۰۰،۰۰۰",
    desc: "کره، پنیر، کوفت و درد",
    img: ProductIMG,
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "نوشیدنی",
    price: "۲۰۰،۰۰۰",
    desc: "کره، پنیر، کوفت و درد",
    img: ProductIMG,
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "نوشیدنی",
    price: "۲۰۰،۰۰۰",
    desc: "کره، پنیر، کوفت و درد",
    img: ProductIMG,
  },
];

const ProductList = () => {
  return (
    <FlatList
      data={DATA}
      renderItem={({ item }) => {
        return (
          <SingleProductItem
            title={item.title}
            price={item.price}
            desc={item.desc}
            img={item.img}
          />
        );
      }}
      keyExtractor={(item) => item.id}
      style={{ overflow: "visible" }}
    />
  );
};

const styles = StyleSheet.create({
  item: {
    width: 150,
    height: 100,
    borderColor: theme.colors.one,
    borderWidth: 0,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,
    backgroundColor: theme.colors.white,
    elevation: 11,
    marginLeft: 10,
    marginVertical: 0,
  },
  title: {
    fontFamily: theme.typography.subTitle.fontFamily,
    fontSize: theme.typography.subTitle.fontSize,
    color: theme.colors.darkTextColor,
  },
  subTitle: {
    fontFamily: theme.typography.smallest.fontFamily,
    fontSize: theme.typography.smallest.fontSize,
    color: theme.colors.lightTextColor,
    marginBottom: 5,
  },
  addButton: {
    width: 100,
    height: 100,
    backgroundColor: theme.colors.four,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,
    elevation: 11,
    marginLeft: 10,
    marginRight: 30,
  },
  addButtonText: {
    fontFamily: theme.typography.subTitle.fontFamily,
    fontSize: theme.typography.subTitle.fontSize,
    color: theme.colors.white,
    marginBottom: 5,
  },
});

export default ProductList;
