import React, {Component} from 'react';
import {Alert} from 'react-native';

import {
  View,
  Image,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from 'react-native';
import {ListItem} from 'react-native-elements';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Icon from 'react-native-vector-icons/MaterialIcons';

class ContactView extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  renderItem = ({item}) => {
    return (
      <ListItem
        onPress={() =>
          this.props.navigation.navigate('ChatView', {
            name: item.name,
            image: item.image,
            message: item.message,
          })
        }>
        <View style={styles.pic}>
          <Image source={{uri: item.image}} style={styles.pic} />
        </View>

        <ListItem.Content>
          <ListItem.Title>
            <View style={styles.nameContainer}>
              <Text style={styles.nameTxt}>{item.name}</Text>
            </View>
          </ListItem.Title>
          <ListItem.Subtitle>
            <View style={styles.end}>
              <Text style={styles.msgTxt}>Ngantuk Gua Jangan Di Ganggu</Text>
            </View>
          </ListItem.Subtitle>
        </ListItem.Content>
      </ListItem>
    );
  };

  render() {
    return (
      <View style={{flex: 1, backgroundColor: 'white'}}>
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
          </View>
          <View style={styles.screenHeader}>
            <Text style={styles.screenTitle}>Select Contact</Text>
            <Text style={styles.screenSubtitle}>
              {this.props.ContactsData.length} Contacts
            </Text>
          </View>

          <View style={styles.right}>
            <TouchableOpacity
              onPress={() => Alert.alert('Search Contact', 'But ComingSoon')}>
              <Icon name="search" color="#fff" size={23} style={{padding: 5}} />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => Alert.alert('Settings Contact', 'But ComingSoon')}>
              <Icon
                name="more-vert"
                color="#fff"
                size={23}
                style={{paddingVertical: 5, paddingHorizontal: 13}}
              />
            </TouchableOpacity>
          </View>
        </View>
        <FlatList
          data={this.props.ContactsData}
          keyExtractor={(item, idx) => idx}
          renderItem={this.renderItem}
        />
      </View>
    );
  }
}

export default ContactView;

const styles = StyleSheet.create({
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
  screenHeader: {
    flexDirection: 'column',
    marginLeft: -20,
  },
  screenTitle: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 20,
  },
  screenSubtitle: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 13,
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
  addStatusButton: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: 38,
    left: 38,
    height: 25,
    width: 25,
    borderColor: 'white',
    borderWidth: 2,
    borderRadius: 40,
    backgroundColor: 'black',
  },
});
