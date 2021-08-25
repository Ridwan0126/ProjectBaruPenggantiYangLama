import React, {Component} from 'react';
import {COLOR} from '../../../color';
import {Text, View, TouchableHighlight, StyleSheet} from 'react-native';

class ButtonApp extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const {label, handler} = this.props;
    return (
      <TouchableHighlight
        onPress={handler}
        underlayColor="white"
        style={styles.button}>
        <View>
          <Text
            style={{
              color: 'white',
              fontFamily: 'SemiBold',
            }}>
            {label}
          </Text>
        </View>
      </TouchableHighlight>
    );
  }
}

export default ButtonApp;

const styles = StyleSheet.create({
  button: {
    marginHorizontal: 45,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
    backgroundColor: COLOR.main,
    paddingVertical: 10,
    borderRadius: 23,
    height: 45,
  },
});
