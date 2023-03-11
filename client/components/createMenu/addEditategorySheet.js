import { useRef } from "react";
import RBSheet from "react-native-raw-bottom-sheet";
import { View, Text } from "react-native";
import theme from "../../config/theme";

const AddEditCategorySheet = ({ ref }) => {
  const refRBSheet = useRef(ref);

  return (
    <RBSheet
      ref={refRBSheet}
      closeOnDragDown={true}
      height={600}
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
      <View>
        <Text>Hi</Text>
      </View>
    </RBSheet>
  );
};
export default AddEditCategorySheet;
