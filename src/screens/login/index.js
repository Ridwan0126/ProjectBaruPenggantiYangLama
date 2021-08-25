import React, {Component} from 'react';
import * as Animatable from 'react-native-animatable';
import {
  Text,
  View,
  ScrollView,
  Alert,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import {connect} from 'react-redux';
import {signIn} from '../../../actions/auth';
import {InputApp, ButtonApp, AuthHeader} from '../../components';
import {COLOR} from '../../../constant/color';
import {SocialIcon} from 'react-native-elements';
import {SQLiteContext} from '../../../config/sqlite';

class LoginSql extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userList: [],
      username: '',
      password: '',
      statusLogin: false,
      isFocusUsername: false,
      isFocusPassword: false,
      validUsername: true,
      validPassword: true,
      visible: false,
      foundUsername: false,
    };
  }

  setVisibleToggle = () => {
    this.setState({
      visible: !this.state.visible,
    });
  };

  setFocus = name => {
    const nameFocus = `isFocus${name}`;
    this.setState({
      [nameFocus]: !this.state[nameFocus],
    });
  };

  setValue = (inputName, value) => {
    this.setState({
      [inputName]: value,
      validUsername: true,
      validPassword: true,
    });

    setTimeout(() => {
      if (this.ValidateEmail()) {
        if (this.authUsername()) {
          this.setState({
            foundUsername: true,
          });
        } else {
          this.setState({
            foundUsername: false,
          });
        }
      } else {
        if (this.state.foundUsername) {
          this.setState({
            foundUsername: false,
          });
        }
      }
    }, 200);
  };

  authUsername = () => {
    const {userList} = this.state;
    for (let i = 0; i < userList.length; i++) {
      if (userList[i].username === this.state.username) {
        return true;
      }
    }
    return false;
  };

  ValidateEmail = () => {
    if (
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.state.username)
    ) {
      return true;
    }
    return false;
  };

  getUserApi = () => {
    this.props.sqlite
      .getAllUsers('SELECT * FROM users')
      .then(userList => {
        this.setState({
          userList,
        });
      })
      .catch(err => {
        console.log('error get ALL users: ', err);
      });
  };

  componentDidMount() {
    this.getUserApi();
  }

  authHandler = () => {
    const {userList} = this.state;
    for (let i = 0; i < userList.length; i++) {
      if (
        this.state.foundUsername &&
        userList[i].password === this.state.password
      ) {
        this.props.doLogin({
          id: userList[i].id,
          name: userList[i].name,
          username: this.state.username,
          password: this.state.password,
          role: userList[i].role,
          image: userList[i].image,
          phone: userList[i].phone,
        });
        return (
          //correct username&password
          Alert.alert('Alert Sign In', 'Sign In Success')
        );
      }
    }

    if (!this.state.foundUsername) {
      this.setState({
        validUsername: false,
      });
    }

    this.setState({
      validPassword: false,
    });
  };

  render() {
    console.log(this.state.userList);
    const {navigation} = this.props;
    return (
      <ScrollView
        style={{
          backgroundColor: '#FFF',
          height: '100%',
          marginTop: 50,
          borderTopLeftRadius: 20,
        }}>
        <AuthHeader title="Sign In" subtitle="Please Sign In in Here....." />

        <Animatable.View animation="fadeInUpBig" duration={1300}>
          <InputApp
            state={this.state}
            label="Username"
            valid={this.state.validUsername}
            setFocus={this.setFocus}
            setValue={this.setValue}
            icon="envelope"
            found={this.state.foundUsername}
          />

          <InputApp
            state={this.state}
            label="Password"
            valid={this.state.validPassword}
            setFocus={this.setFocus}
            setValue={this.setValue}
            icon="lock"
            visible={this.state.visible}
            visibleToggle={this.setVisibleToggle}
          />

          <ButtonApp label="Sign in" handler={this.authHandler} />
        </Animatable.View>
      </ScrollView>
    );
  }
}

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <SQLiteContext.Consumer>
        {sqlite => <LoginSql {...this.props} sqlite={sqlite} />}
      </SQLiteContext.Consumer>
    );
  }
}

const mapStateToProps = state => ({
  userList: state.auth.userList,
});

const mapDispatchToProps = dispatch => ({
  doLogin: data => dispatch(signIn(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
