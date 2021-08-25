import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {
  Splash,
  Login,
  Register,
  OnBoard,
  CallsTab,
  ChatsTab,
  StatusTab,
  ChatView,
  ContactView,
  Camera,
  ProfileView,
} from '../screens';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import {connect} from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome5';
import React, {Component} from 'react';

import {Header} from '../components';
import {Chatt_User1, Chatt_User2} from '../../constant/DataChatt';
import {Panggilan_User1, Panggilan_User2} from '../../constant/DataPanggilan';
import {Status_User1, Status_User2} from '../../constant/DataStatus';
import {SQLiteContext} from '../../config/sqlite';

const WIDTH = Dimensions.get('window').width;

const RootStack = createNativeStackNavigator();
const AuthStack = createNativeStackNavigator();
const Tab = createMaterialTopTabNavigator();

class AuthStackScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <AuthStack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerShown: false,
        }}>
        <AuthStack.Screen name="Login" component={Login} />
        <AuthStack.Screen name="Register" component={Register} />
      </AuthStack.Navigator>
    );
  }
}

// Main Component WHATSAPP.......................................................
class HomeSql extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Contacts: [],
      Chats: [],
      Calls: [],
      Status: [],
      ProfileStatus: {
        name: 'My Status',
        image: this.props.userLogin.image,
      },
    };
  }

  getUserApi = () => {
    if (this.props.userLogin.role === 'user1') {
      this.props.sqlite
        .getAllUsers('SELECT * FROM chats_user1')
        .then(Chats => {
          this.setState({
            Chats,
          });
        })
        .catch(err => {
          console.log('error get ALL chat: ', err);
        });

      this.props.sqlite
        .getAllUsers('SELECT * FROM calls_user1')
        .then(Calls => {
          this.setState({
            Calls,
          });
        })
        .catch(err => {
          console.log('error get ALL call: ', err);
        });

      this.props.sqlite
        .getAllUsers('SELECT * FROM status_user1')
        .then(Status => {
          this.setState({
            Status,
          });
        })
        .catch(err => {
          console.log('error get ALL status: ', err);
        });
    } else {
      //end if for role user1 >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
      this.props.sqlite
        .getAllUsers('SELECT * FROM chats_user2')
        .then(Chats => {
          this.setState({
            Chats,
          });
        })
        .catch(err => {
          console.log('error get ALL chat: ', err);
        });

      this.props.sqlite
        .getAllUsers('SELECT * FROM calls_user2')
        .then(Calls => {
          this.setState({
            Calls,
          });
        })
        .catch(err => {
          console.log('error get ALL call: ', err);
        });

      this.props.sqlite
        .getAllUsers('SELECT * FROM status_user2')
        .then(Status => {
          this.setState({
            Status,
          });
        })
        .catch(err => {
          console.log('error get ALL status: ', err);
        });
    }
  };

  componentDidMount() {
    this.getUserApi();
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <Header {...this.props} />
        <Tab.Navigator
          screenOptions={{
            tabBarLabelStyle: {
              fontSize: 16,
              color: 'white',
            },
            tabBarStyle: {
              backgroundColor: 'black',
            },
            tabBarIndicatorStyle: {
              borderBottomColor: 'white',
              borderBottomWidth: 2.5,
            },
            tabBarPressColor: 'black',
            tabBarItemStyle: {width: 'auto'},
          }}
          style={{backgroundColor: 'red'}}
          timingConfig={{duration: 200}}
          initialLayout={{width: Dimensions.get('window').width}}
          initialRouteName="Chats">
          <Tab.Screen
            name="Camera"
            children={props => <Camera {...props} />}
            options={{
              tabBarShowLabel: false,
              tabBarIcon: () => {
                return (
                  <View style={styles.topBar}>
                    <Icon name="camera" color="#fff" size={20} />
                  </View>
                );
              },
              tabBarIconStyle: {
                width: WIDTH * 0.06,
              },
            }}
          />
          <Tab.Screen
            name="Chats"
            children={props => (
              <ChatsTab {...props} ChatsData={this.state.Chats} />
            )}
            options={{
              tabBarShowLabel: false,
              tabBarIcon: () => {
                return (
                  <View style={styles.topBar}>
                    <Text style={styles.topBarText}>CHATS</Text>
                  </View>
                );
              },
              tabBarIconStyle: {
                width: WIDTH * 0.225,
              },
            }}
          />
          <Tab.Screen
            name="Status"
            children={props => (
              <StatusTab
                {...props}
                StatusData={this.state.Status}
                ProfileData={this.state.ProfileStatus}
              />
            )}
            options={{
              tabBarShowLabel: false,
              tabBarIcon: () => {
                return (
                  <View style={styles.topBar}>
                    <Text style={styles.topBarText}>STATUS</Text>
                  </View>
                );
              },
              tabBarIconStyle: {
                width: WIDTH * 0.225,
              },
            }}
          />
          <Tab.Screen
            name="Calls"
            children={props => (
              <CallsTab {...props} CallsData={this.state.Calls} />
            )}
            options={{
              tabBarShowLabel: false,
              tabBarIcon: () => {
                return (
                  <View style={styles.topBar}>
                    <Text style={styles.topBarText}>CALLS</Text>
                  </View>
                );
              },
              tabBarIconStyle: {
                width: WIDTH * 0.225,
              },
            }}
          />
        </Tab.Navigator>
      </View>
    );
  }
}

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <SQLiteContext.Consumer>
        {sqlite => <HomeSql {...this.props} sqlite={sqlite} />}
      </SQLiteContext.Consumer>
    );
  }
}

class RootStackScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Chats: 'user1' === 'user1' ? Chatt_User1 : Chatt_User2,
    };
  }

  render() {
    return (
      <NavigationContainer>
        <RootStack.Navigator
          initialRouteName="OnBoard"
          screenOptions={{
            headerShown: false,
          }}>
          {!this.props.loginStatus ? (
            <>
              <RootStack.Screen name="OnBoard" component={OnBoard} />
              <RootStack.Screen name="Auth" component={AuthStackScreen} />
            </>
          ) : (
            <>
              <RootStack.Screen
                name="Home"
                children={props => (
                  <Home {...props} userLogin={this.props.userLogin} />
                )}
              />
              <RootStack.Screen
                name="ChatView"
                children={props => (
                  <ChatView {...props} userLogin={this.props.userLogin} />
                )}
              />
              <RootStack.Screen
                name="ContactView"
                children={props => (
                  <ContactView {...props} ContactsData={this.state.Chats} />
                )}
              />
              <RootStack.Screen
                name="ProfileView"
                children={props => <ProfileView {...props} />}
              />
              <RootStack.Screen
                name="Camera"
                children={props => <Camera {...props} />}
              />
            </>
          )}
        </RootStack.Navigator>
      </NavigationContainer>
    );
  }
}

const mapStateToProps = state => ({
  loginStatus: state.auth.loginStatus,
  userLogin: state.auth.userLogin,
});

export default connect(mapStateToProps)(RootStackScreen);

const styles = StyleSheet.create({
  topBar: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  topBarText: {
    color: 'white',
    fontSize: 16,
  },
  buttonBar: {
    alignItems: 'center',
    justifyContent: 'center',
    top: -5,
    height: 30,
    width: 50,
  },
  shadow: {
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    top: -30,
    height: 60,
    width: 60,
    borderRadius: 40,
    backgroundColor: 'white',
  },
  menu: {
    backgroundColor: 'white',
  },
});
