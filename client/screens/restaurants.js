import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
} from "react-native";
import styled from "styled-components/native";
import RestaurantsList from "../components/restaurantsList";
import theme from "../config/theme";
import { useNavigation } from "@react-navigation/native";
import { Icon } from "@rneui/themed";

const Restaurants = () => {
  const navigation = useNavigation();

  return (
    <Container>
      <View style={styles.titleBox}>
        <Title>تره فیلفیلی</Title>
        <SubTitle>مدیریت مجموعه ها</SubTitle>
      </View>
      <Padding>
        <View style={styles.flexBox}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("CreateMenu");
            }}
          >
            <View style={styles.addRestaurant}>
              <Icon type="material" name="add" color={theme.colors.white} />
            </View>
          </TouchableOpacity>
          <Text style={styles.title}>مجموعه‌ها</Text>
        </View>
        <RestaurantsList />
      </Padding>
    </Container>
  );
};
const Container = styled.View`
  flex: 1;
  max-width: 100%;
  flex-direction: column;
  background: ${theme.colors.white};
`;
const Title = styled.Text`
  font-family: ${theme.typography.heading2.fontFamily};
  font-size: ${theme.typography.heading2.fontSize};
  color: ${theme.colors.two};
  margin-top: 40px;
  text-align: center;
`;
const SubTitle = styled.Text`
  font-family: ${theme.typography.paragraph2.fontFamily};
  font-size: ${theme.typography.paragraph2.fontSize};
  color: ${theme.colors.white};
  text-align: center;
  margin-bottom: 20px;
  margin-top: 10px;
`;
const Padding = styled.View`
  padding-left: 30px;
  padding-right: 30px;
  overflow: hidden;
`;
const styles = StyleSheet.create({
  titleBox: {
    backgroundColor: theme.colors.one,
    textAlign: "center",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    paddingTop: "40px",
    shadowColor: "#000000",
    shadowOffset: {
      width: -1,
      height: 3,
    },
    shadowOpacity: 0.17,
    shadowRadius: 3.05,
    elevation: 4,
  },
  title: {
    fontFamily: theme.typography.heading4.fontFamily,
    fontSize: theme.typography.heading4.fontSize,
    color: theme.colors.darkTextColor,
  },
  addRestaurant: {
    backgroundColor: theme.colors.four,
    borderRadius: 10,
    padding: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,
    elevation: 11,
    marginTop: 0,
    justifyContent: "center",
    alignItems: "center",
  },
  flexBox: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 30,
  },
});
export default Restaurants;
