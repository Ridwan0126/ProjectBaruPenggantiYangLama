import React, {Component} from 'react';
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  TouchableHighlight,
  StyleSheet,
  Dimensions,
  KeyboardAvoidingView,
  FlatList,
  ImageBackground,
  Platform,
} from 'react-native';
import {Input} from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialIcons';
import IconFA from 'react-native-vector-icons/FontAwesome5';
import {Alert} from 'react-native';

const {width, height} = Dimensions.get('window');

class EachMsg extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    if (this.props.item.sent === false) {
      return (
        <View style={styles.eachMsg}>
          <Image source={{uri: this.props.image}} style={styles.userPic} />
          <View style={styles.msgBlock}>
            <Text style={styles.msgTxt}>{this.props.item.msg}</Text>
          </View>
        </View>
      );
    }

    return (
      <View style={styles.rightMsg}>
        <View style={styles.rightBlock}>
          <Text style={styles.rightTxt}>{this.props.item.msg}</Text>
        </View>
        <Image
          source={{uri: this.props.profile.image}}
          style={styles.userPic}
        />
      </View>
    );
  }
}

class ChatView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: [
        {
          sent: false,
          msg: this.props.route.params.message,
        },
      ],
      msg: '',
      profile: {
        name: 'My Status',
        image: this.props.userLogin.image,
      },
    };
  }

  replyHandler = () => {
    const {dataSource} = this.state;
    const conversation = dataSource;
    if (conversation[conversation.length - 1].msg.toLowerCase() === 'yes') {
      conversation.push({
        sent: false,
        msg: 'Hallo, How Are You Body? Can i Help You?',
      });
    } else {
      conversation.push({
        sent: false,
        msg: 'wkwkwkwkwk, Are You Sure? its Stupid wkwkwwkwk',
      });
    }

    this.setState({
      dataSource: conversation,
    });
  };

  sendHandler = () => {
    const {dataSource} = this.state;
    const conversation = dataSource;
    if (this.state.msg.length > 0) {
      conversation.push({
        sent: true,
        msg: this.state.msg,
      });
      this.setState({
        dataSource: conversation,
        msg: '',
      });
      setTimeout(() => {
        this.replyHandler();
      }, 2000);
    }
  };

  render() {
    return (
      <View style={{flex: 1}}>
        <ImageBackground
          source={require('../../../images/background1.png')}
          style={styles.image}>
          <View style={styles.header}>
            <View style={styles.left}>
              <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                <Icon
                  name="arrow-back"
                  color="#fff"
                  size={23}
                  style={{paddingLeft: 10}}
                />
              </TouchableOpacity>
              <Image
                source={{uri: this.props.route.params.image}}
                style={styles.chatImage}
              />
              <TouchableOpacity>
                <Text style={styles.chatTitle}>
                  {this.props.route.params.name}
                </Text>
                <Text style={styles.chatTitle}>Terlihat Hari ini, 12:00</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.right}>
              <TouchableOpacity
                onPress={() =>
                  Alert.alert('Call Phone', 'But Coming Sooon..........')
                }>
                <Icon
                  name="add-ic-call"
                  color="#fff"
                  size={23}
                  style={{padding: 5}}
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() =>
                  Alert.alert('Settings...', 'But Coming Sooon..........')
                }>
                <Icon
                  name="more-vert"
                  color="#fff"
                  size={23}
                  style={{paddingVertical: 5, paddingHorizontal: 13}}
                />
              </TouchableOpacity>
            </View>
          </View>
          <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            keyboardVerticalOffset={Platform.OS === 'ios' ? 40 : 25}
            style={styles.keyboard}>
            <FlatList
              data={this.state.dataSource}
              keyExtractor={(item, idx) => idx}
              renderItem={item => (
                <EachMsg
                  {...item}
                  image={this.props.route.params.image}
                  profile={this.state.profile}
                />
              )}
            />
            <View style={styles.inputContainer}>
              <Input
                value={this.state.msg}
                onChangeText={msg => this.setState({msg})}
                blurOnSubmit={false}
                placeholder="Type a message"
                returnKeyType="send"
                leftIcon={
                  <IconFA
                    name="laugh"
                    size={23}
                    style={{opacity: 0.4, padding: 3}}
                  />
                }
                rightIcon={
                  <View style={{flexDirection: 'row'}}>
                    <TouchableOpacity
                      onPress={() =>
                        Alert.alert(
                          'Send File ...',
                          'But Coming Sooon..........',
                        )
                      }>
                      <Icon
                        name="attach-file"
                        size={24}
                        style={{
                          opacity: 0.4,
                          padding: 3,
                          transform: [{rotate: '135deg'}],
                          marginHorizontal: 13,
                        }}
                      />
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={() =>
                        Alert.alert('Camera...', 'But Coming Sooon..........')
                      }>
                      <Icon
                        name="photo-camera"
                        size={24}
                        style={{opacity: 0.4, padding: 3}}
                      />
                    </TouchableOpacity>
                  </View>
                }
                inputContainerStyle={{
                  borderBottomWidth: 0,
                }}
                containerStyle={styles.input}
              />
              <TouchableHighlight
                onPress={this.sendHandler}
                underlayColor="black"
                style={styles.sendButton}>
                {this.state.msg === '' ? (
                  <Icon name="mic" color="#fff" size={23} />
                ) : (
                  <Icon name="send" color="#fff" size={23} />
                )}
              </TouchableHighlight>
            </View>
          </KeyboardAvoidingView>
        </ImageBackground>
      </View>
    );
  }
}

export default ChatView;

const styles = StyleSheet.create({
  keyboard: {
    flex: 1,
    justifyContent: 'center',
  },
  image: {
    width,
    height,
  },
  header: {
    height: 65,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  left: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  right: {
    flexDirection: 'row',
  },
  chatTitle: {
    color: '#fff',
    fontWeight: '600',
    margin: 10,
    fontSize: 15,
  },
  chatImage: {
    width: 30,
    height: 30,
    borderRadius: 15,
    margin: 5,
  },
  inputContainer: {
    flexDirection: 'row',
  },
  input: {
    height: 50,
    borderColor: 'black',
    borderRadius: 25,
    width: width - 70,
    backgroundColor: 'white',
    marginHorizontal: 5,
    marginVertical: 10,
    shadowColor: '#000',
    shadowRadius: 2,
    shadowOpacity: 0.5,
    shadowOffset: {
      height: 1,
    },
    elevation: 2,
  },
  sendButton: {
    height: 50,
    width: 50,
    borderRadius: 25,
    marginVertical: 10,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  eachMsg: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    margin: 5,
  },
  rightMsg: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    margin: 5,
    alignSelf: 'flex-end',
  },
  userPic: {
    height: 40,
    width: 40,
    margin: 5,
    borderRadius: 20,
    backgroundColor: '#f8f8f8',
  },
  msgBlock: {
    width: 220,
    borderRadius: 5,
    backgroundColor: '#ffffff',
    padding: 10,
    shadowColor: '#3d3d3d',
    shadowRadius: 2,
    shadowOpacity: 0.5,
    shadowOffset: {
      height: 1,
    },
    elevation: 2,
  },
  rightBlock: {
    width: 220,
    borderRadius: 5,
    backgroundColor: '#dcf8c6',
    padding: 10,
    shadowColor: '#3d3d3d',
    shadowRadius: 2,
    shadowOpacity: 0.5,
    shadowOffset: {
      height: 1,
    },
    elevation: 2,
  },
  msgTxt: {
    fontSize: 15,
    color: '#555',
    fontWeight: '600',
  },
  rightTxt: {
    fontSize: 15,
    color: '#202020',
    fontWeight: '600',
  },
});
