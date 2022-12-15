import { TouchableOpacity, StyleSheet, Text } from 'react-native';



export default function MyButton(props) {
  return (
    <TouchableOpacity 
    style={styles.buttonStyle}
    onPress={props.onPressFunction}
    activeOpacity={1}>
      <Text style={styles.textStyle}>{props.text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buttonStyle: {
    backgroundColor: '#FFF',
    height: 50,
    width: 335,
    // elevation: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10, 
    marginLeft: 10, 
    // marginBottom: 10,
    borderRadius: 10

  },
  textStyle: {
    color: '#FFA26B',
    fontWeight: 'bold',
    fontSize: 22,
    textAlign: 'center',
    fontFamily: 'Roboto'
  }
})