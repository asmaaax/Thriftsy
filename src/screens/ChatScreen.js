import * as React from "react";
import { ListItem, Avatar, Text} from "@rneui/base";
import { TouchableHighlight, StyleSheet } from "react-native";


export default function ChatScreen({ navigation }) {
  return (

    <ListItem
      Component={TouchableHighlight}
      containerStyle={{}}
      disabledStyle={{ opacity: 0.5 }}
      onLongPress={() => console.log("onLongPress()")}
      onPress={() => console.log("onLongPress()")}
      pad={20}
    >
      <Avatar
        source={{
          uri:
            "https://avatars0.githubusercontent.com/u/32242596?s=460&u=1ea285743fc4b083f95d6ee0be2e7bb8dcfc676e&v=4"
        }}
      />
      <ListItem.Content>
        <ListItem.Title>
          <Text>Pranshu Chittora</Text>
        </ListItem.Title>
        <ListItem.Subtitle>
          <Text>Hi, is the food package still available for collection?</Text>
        </ListItem.Subtitle>
      </ListItem.Content>
      <ListItem.Chevron color="black" />
    </ListItem>
  );
}





