import React, {Component} from 'react';
import * as Animatable from 'react-native-animatable';
import {
  Text,
  View,
  Image,
  Alert,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
} from 'react-native';
import {connect} from 'react-redux';
import {InputApp, ButtonApp, AuthHeader} from '../../components';
import {COLOR} from '../../../color';

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userList: [],
      name: '',
      username: '',
      password: '',
      confirm: '',
      statusLogin: false,
      isFocusName: false,
      isFocusUsername: false,
      isFocusPassword: false,
      isFocusConfirm: false,
    };
  }

  setFocus = name => {
    const nameFocus = `isFocus${name}`;
    this.setState({
      [nameFocus]: !this.state[nameFocus],
    });
  };

  setValue = (inputName, value) => {
    this.setState({
      [inputName]: value,
    });
    //    console.log("value change",value)
  };

  getUserApi = () => {
    const userList = [
      {
        name: 'Fian',
        username: 'fian1@gmail.com',
        password: 'fian123@',
      },
      {
        name: 'John',
        username: 'john1@gmail.com',
        password: 'john123@',
      },
    ];
    this.setState({
      userList,
    });
  };

  componentDidMount() {
    this.getUserApi();
  }

  registerHandler = () => {
    const {userList} = this.state;
    for (let i = 0; i < userList.length; i++) {
      if (userList[i].username === this.state.username) {
        //Username already exist
        return Alert.alert('Alert Sign Up', 'Username Already Exist');
      }
    }

    if (this.state.password !== this.state.confirm) {
      //Username already exist
      return Alert.alert('Alert Sign Up', 'Password Is Not Match');
    }

    //    this.props.doRegister(
    //         {
    //         name:this.state.name,
    //         username:this.state.username,
    //         password:this.state.password
    //         }
    //     )
    return (
      //correct username&password
      Alert.alert('Alert Sign Up', 'Sign Up Success')
    );
  };

  render() {
    const {navigation} = this.props;
    return (
      <View style={{backgroundColor: '#FFF', height: '100%'}}>
        <ScrollView>
          <AuthHeader title="CREATE" subtitle="Account" />
          {/* <ImageBackground 
                    source ={require('../../images/image.jpg')}
                    style={{
                        width:"100%",
                        height:Dimensions.get('window').height/2.5,
                        marginTop:-20
                    }}/> */}
          <Animatable.View animation="fadeInDown" duration={1300}>
            <Text
              style={{
                fontSize: 30,
                fontFamily: 'SemiBold',
                alignSelf: 'center',
              }}>
              Sign Up
            </Text>

            <Text
              style={{
                fontFamily: 'SemiBold',
                marginHorizontal: 55,
                textAlign: 'center',
                marginTop: 5,
                opacity: 0.4,
              }}>
              Welcome. The Hero of Earth
            </Text>

            <InputApp
              state={this.state}
              label="Name"
              setFocus={this.setFocus}
              setValue={this.setValue}
              icon="user"
            />

            <InputApp
              state={this.state}
              label="Username"
              setFocus={this.setFocus}
              setValue={this.setValue}
              icon="envelope"
            />

            <InputApp
              state={this.state}
              label="Password"
              setFocus={this.setFocus}
              setValue={this.setValue}
              secureTextEntry={true}
              icon="lock"
            />

            <InputApp
              state={this.state}
              label="Confirm"
              setFocus={this.setFocus}
              setValue={this.setValue}
              secureTextEntry={true}
              icon="lock"
            />

            <ButtonApp label="Sign Up" handler={this.registerHandler} />

            <Text
              style={{
                alignSelf: 'center',
                fontFamily: 'SemiBold',
                paddingVertical: 20,
              }}>
              Already a Member?
              <Text> </Text>
              <TouchableOpacity onPress={() => navigation.replace('Login')}>
                <Text
                  style={{
                    color: COLOR.main,
                    fontSize: 18,
                    fontWeight: 'bold',
                    marginBottom: -5,
                  }}>
                  Sign In
                </Text>
              </TouchableOpacity>
              <Text> </Text>
              Now
            </Text>
          </Animatable.View>
        </ScrollView>
      </View>
    );
  }
}

// const mapStateToProps = state => ({
//     isLogin: state.auth.statusLogin,
// })

const mapDispatchToProps = dispatch => ({
  // doLogin: data => dispatch(signIn(data))
});

export default connect(null, mapDispatchToProps)(Register);
