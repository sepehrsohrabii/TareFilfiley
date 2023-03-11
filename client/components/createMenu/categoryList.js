import { Icon } from "@rneui/themed";
import React, { useRef } from "react";
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  TouchableOpacity,
  Pressable,
} from "react-native";
import RBSheet from "react-native-raw-bottom-sheet";
import theme from "../../config/theme";
import AddEditCategorySheet from "./addEditategorySheet";
import AddEditCategoryForm from "./addEditCategoryForm";

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

const Item = ({ title }) => {
  const refRBSheet2 = useRef();
  return (
    <View>
      <TouchableOpacity
        style={styles.item}
        onPress={() => {
          refRBSheet2.current.open();
        }}
      >
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subTitle}>۱۲ مورد</Text>
        <Icon type="material" name="edit" color={theme.colors.two} />
      </TouchableOpacity>
      <RBSheet
        ref={refRBSheet2}
        closeOnDragDown={true}
        height={300}
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
        <AddEditCategoryForm title={title} bottomSheet={refRBSheet2} />
      </RBSheet>
    </View>
  );
};

const CategoryList = () => {
  const refRBSheet = useRef();

  return (
    <FlatList
      data={DATA}
      renderItem={({ item, index }) => {
        if (index == 0) {
          return (
            <View>
              <TouchableOpacity
                style={styles.addButton}
                onPress={() => {
                  refRBSheet.current.open();
                }}
              >
                <Text style={styles.addButtonText}>جدید</Text>
                <Icon type="material" name="add" color={theme.colors.white} />
              </TouchableOpacity>
              <RBSheet
                ref={refRBSheet}
                closeOnDragDown={true}
                height={300}
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
                <AddEditCategoryForm bottomSheet={refRBSheet} />
              </RBSheet>
            </View>
          );
        } else {
          return <Item title={item.title} />;
        }
      }}
      keyExtractor={(item) => item.id}
      horizontal={true}
      inverted
      style={{ paddingVertical: 6 }}
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

export default CategoryList;
