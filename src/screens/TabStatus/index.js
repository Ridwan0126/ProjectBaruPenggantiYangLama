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

class StatusTab extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  statusHandler = () => {
    Alert.alert('Status', 'Kepo,Jangan Kepo Lah');
  };

  renderItem = ({item}) => {
    return (
      <ListItem onPress={() => this.statusHandler(item)}>
        <View style={styles.pic}>
          <Image source={{uri: item.image}} style={styles.picProfile} />
        </View>

        <ListItem.Content>
          <ListItem.Title>
            <View style={styles.nameContainer}>
              <Text style={styles.nameTxt}>{item.name}</Text>
            </View>
          </ListItem.Title>
          <ListItem.Subtitle>
            <View style={styles.end}>
              <Text style={styles.msgTxt}>
                {item.date !== '' ? item.date + ', ' + item.time : item.time}
              </Text>
            </View>
          </ListItem.Subtitle>
        </ListItem.Content>
      </ListItem>
    );
  };

  renderProfile = profile => {
    return (
      <ListItem onPress={() => this.statusHandler(profile)}>
        <View>
          <View style={{...styles.pic, borderColor: 'white'}}>
            <Image source={{uri: profile.image}} style={styles.picProfile} />
          </View>
          <View style={styles.addStatusButton}>
            <AntDesign name="plus" size={18} color="white" />
          </View>
        </View>

        <ListItem.Content>
          <ListItem.Title>
            <View style={styles.nameContainer}>
              <Text style={styles.nameTxt}>{profile.name}</Text>
            </View>
          </ListItem.Title>

          <ListItem.Subtitle>
            <View>
              <Text style={styles.msgTxt}>Click Untuk Membuat Status</Text>
            </View>
          </ListItem.Subtitle>
        </ListItem.Content>
        <View>
          <TouchableOpacity
            onPress={() => Alert.alert('Setting Status', 'Ntar dulu ye')}>
            <Text style={{fontWeight: 'bold', fontSize: 50}}>...</Text>
          </TouchableOpacity>
        </View>
      </ListItem>
    );
  };

  render() {
    return (
      <View style={{flex: 1, backgroundColor: 'white'}}>
        {this.renderProfile(this.props.ProfileData)}
        <View style={styles.recentBar}>
          <Text style={{fontWeight: 'bold', fontSize: 13, opacity: 0.6}}>
            Recent Updates
          </Text>
        </View>
        <FlatList
          data={this.props.StatusData}
          keyExtractor={(item, idx) => idx}
          renderItem={this.renderItem}
        />
      </View>
    );
  }
}

export default StatusTab;

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#f7f7f7',
    borderBottomWidth: 1,
    padding: 10,
    backgroundColor: '#fff',
  },
  picProfile: {
    borderRadius: 25,
    width: 50,
    height: 50,
  },
  pic: {
    borderRadius: 30,
    width: 60,
    height: 60,
    borderWidth: 2.5,
    borderColor: 'black',
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
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
  recentBar: {
    alignItems: 'flex-start',
    paddingVertical: 8,
    backgroundColor: 'rgba(0,0,0,0.07)',
    paddingLeft: 15,
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
