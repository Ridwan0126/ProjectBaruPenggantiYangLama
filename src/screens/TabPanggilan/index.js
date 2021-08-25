import React, {Component} from 'react';
import {Alert} from 'react-native';
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from 'react-native';
import {ListItem} from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialIcons';

class CallsTab extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  renderItem = ({item}) => {
    return (
      <ListItem>
        <Image source={{uri: item.image}} style={styles.pic} />
        <ListItem.Content>
          <ListItem.Title>
            <View style={styles.nameContainer}>
              <Text style={styles.nameTxt}>{item.name}</Text>
            </View>
          </ListItem.Title>
          <ListItem.Subtitle>
            <View style={styles.callContainer}>
              <View style={styles.end}>
                <Icon
                  name={item.call}
                  size={15}
                  color={item.call === 'call-missed' ? 'red' : 'green'}
                  style={{marginRight: 5}}
                />
                <Text style={styles.time}>
                  {item.date} {item.time}
                </Text>
              </View>

              <View>
                <TouchableOpacity
                  onPress={() => Alert.alert('Panggilan', 'Tapi Lain Kali')}>
                  <Icon
                    name={item.callType}
                    size={25}
                    color="black"
                    style={{bottom: 15}}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </ListItem.Subtitle>
        </ListItem.Content>
      </ListItem>
    );
  };

  render() {
    return (
      <FlatList
        data={this.props.CallsData}
        keyExtractor={(item, idx) => idx}
        renderItem={this.renderItem}
      />
    );
  }
}

export default CallsTab;

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#f7f7f7',
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    padding: 10,
    justifyContent: 'space-between',
  },
  pic: {
    borderRadius: 25,
    width: 50,
    height: 50,
  },
  nameContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 270,
  },
  nameTxt: {
    fontWeight: '600',
    color: '#222',
    fontSize: 15,
  },
  mblTxt: {
    fontWeight: '200',
    color: '#777',
    fontSize: 13,
  },
  callContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: 250,
  },
  end: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  time: {
    fontWeight: '400',
    color: '#666',
    fontSize: 12,
  },
});
