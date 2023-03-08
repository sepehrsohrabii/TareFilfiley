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

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "First Item",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "صبحانه",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "نوشیدنی",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "نوشیدنی",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "نوشیدنی",
  },
];

const Item = ({ title }) => (
  <TouchableOpacity style={styles.item}>
    <Text style={styles.title}>{title}</Text>
    <Text style={styles.subTitle}>۱۲ مورد</Text>
    <Icon type="material" name="edit" color={theme.colors.two} />
  </TouchableOpacity>
);

const ProductList = () => {
  return (
    <FlatList
      data={DATA}
      renderItem={({ item, index }) => {
        if (index == 0) {
          return (
            <TouchableOpacity style={styles.addButton}>
              <Text style={styles.addButtonText}>جدید</Text>
              <Icon type="material" name="add" color={theme.colors.white} />
            </TouchableOpacity>
          );
        } else {
          return <Item title={item.title} />;
        }
      }}
      keyExtractor={(item) => item.id}
      inverted
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
