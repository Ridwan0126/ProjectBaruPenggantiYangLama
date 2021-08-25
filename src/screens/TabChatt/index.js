import React, {Component} from 'react';
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from 'react-native';
import {ListItem} from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialIcons';

class ChatsTab extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  chatsHandler = () => {};

  renderItem = ({item}) => {
    return (
      <View>
        <ListItem
          onPress={() =>
            this.props.navigation.navigate('ChatView', {
              name: item.name,
              image: item.image,
              message: item.message,
            })
          }>
          <Image source={{uri: item.image}} style={styles.pic} />
          <ListItem.Content>
            <ListItem.Title>
              <View style={{flexDirection: 'row'}}>
                <View style={styles.nameContainer}>
                  <Text style={styles.nameTxt}>{item.name}</Text>
                </View>
              </View>
            </ListItem.Title>
            <ListItem.Subtitle>
              <View style={styles.msgContainer}>
                {item.messageType === 'Photo' ? (
                  <Icon
                    name={item.icon}
                    size={15}
                    color="#b3b3b3"
                    style={{marginRight: 5}}
                  />
                ) : null}
                <Text style={styles.msgTxt}>{item.message}</Text>
              </View>
            </ListItem.Subtitle>
          </ListItem.Content>
          <View style={{alignItems: 'center'}}>
            <Text style={styles.time}>{item.time}</Text>
            <Text
              style={{
                backgroundColor: '#00e600',
                padding: 8,
                // margin: 10,
                borderRadius: 100,
                color: 'white',
              }}>
              1
            </Text>
          </View>
        </ListItem>
      </View>
    );
  };

  render() {
    return (
      <View style={{flex: 1, backgroundColor: 'white'}}>
        <FlatList
          data={this.props.ChatsData}
          keyExtractor={(item, idx) => idx}
          renderItem={this.renderItem}
        />
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('ContactView')}
          style={styles.newChatButton}>
          <Icon name="chat" color="#fff" size={25} style={{padding: 5}} />
        </TouchableOpacity>
      </View>
    );
  }
}

export default ChatsTab;

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#f7f7f7',
    borderBottomWidth: 1,
    padding: 10,
    backgroundColor: '#fff',
  },
  pic: {
    borderRadius: 25,
    width: 50,
    height: 50,
  },
  nameContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 250,
  },
  nameTxt: {
    fontWeight: '600',
    color: '#222',
    fontSize: 15,
  },
  time: {
    fontWeight: '200',
    color: '#777',
    fontSize: 13,
  },
  msgContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  msgTxt: {
    fontWeight: '400',
    color: '#666',
    fontSize: 13,
  },
  newChatButton: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    // top:38,
    bottom: 20,
    right: 10,
    height: 50,
    width: 50,
    borderColor: 'white',
    borderWidth: 2,
    borderRadius: 35,
    backgroundColor: 'black',
  },
});
