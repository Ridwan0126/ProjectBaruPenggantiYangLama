import React, {Component} from 'react';
import {TouchableOpacity, View} from 'react-native';
import {Input} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import FeatherIcon from 'react-native-vector-icons/Feather';
import {COLOR} from '../../../constant/color';

class InputApp extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const {
      state,
      label,
      setFocus,
      setValue,
      icon,
      valid,
      found,
      visible,
      visibleToggle,
    } = this.props;
    return (
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginHorizontal: 45,
          borderWidth: 2,
          marginTop: 30,
          paddingHorizontal: 10,
          borderColor: state[`isFocus${label}`] ? COLOR.main : COLOR.gray,
          borderRadius: 23,
          paddingVertical: 1,
        }}>
        <Input
          placeholder={label}
          label={label}
          errorMessage={valid ? '' : `invalid ${label}`}
          secureTextEntry={
            label === 'Password' || label === 'Confirm'
              ? visible
                ? false
                : true
              : false
          }
          onChangeText={text => setValue(label.toLowerCase(), text)}
          onFocus={() => setFocus(label)}
          onBlur={() => setFocus(label)}
          labelStyle={{
            position: 'absolute',
            bottom: 38,
            left: 10,
            fontSize: 18,
            color: COLOR.main,
            backgroundColor: '#ffffff',
          }}
          leftIcon={
            <Icon
              // name='mail'
              name={icon}
              size={20}
              color={COLOR.main}
            />
          }
          rightIcon={
            label === 'Password' || label === 'Confirm' ? (
              visible ? (
                <TouchableOpacity onPress={visibleToggle}>
                  <FeatherIcon name="eye" size={20} color="gray" />
                </TouchableOpacity>
              ) : (
                <TouchableOpacity onPress={visibleToggle}>
                  <FeatherIcon name="eye-off" size={20} color="gray" />
                </TouchableOpacity>
              )
            ) : found ? (
              <FeatherIcon name="check-circle" size={20} color="green" />
            ) : null
          }
          containerStyle={{
            height: 45,
            paddingHorizontal: 10,
            borderColor: COLOR.gray,
          }}
          inputContainerStyle={{
            borderBottomWidth: 0,
            height: 45,
          }}
          style={{
            paddingHorizontal: 10,
          }}
        />
      </View>
    );
  }
}

export default InputApp;
