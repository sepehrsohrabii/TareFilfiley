import { FlatList } from "react-native";
import SingleRestaurantItem from "./singleRestaurantItem";

const RestaurantLogo = require("../assets/img/food (1).jpg");

const DATA = [
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "گل آقا",
    logo: RestaurantLogo,
    created_at: "۱۴۰۲/۰۳/۰۴",
  },
];
const RestaurantsList = () => {
  return (
    <FlatList
      data={DATA}
      renderItem={({ item }) => {
        return (
          <SingleRestaurantItem
            title={item.title}
            logo={item.logo}
            created_at={item.created_at}
          />
        );
      }}
      keyExtractor={(item) => item.id}
      style={{ overflow: "visible", marginVertical: 20 }}
    />
  );
};
export default RestaurantsList;
