import React, {Component} from 'react';

import {
  Text,
  View,
  StyleSheet,
  StatusBar,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import {Logo} from '../../components';
import Icon from 'react-native-vector-icons/FontAwesome5';
import logos from '../../../images/1.png';

class OnBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <View style={{flex: 1}}>
        <StatusBar translucent backgroundColor="rgba(0,0,0,0)" />
        <ImageBackground
          style={{flex: 1}}
          source={require('../../../images/locationG24.png')}>
          {/* <View style={styles.dark}></View> */}
          <View style={styles.header}>
            <Animatable.Image
              animation="bounceIn"
              duraton="1500"
              source={logos}
              //   source={{
              //     uri:
              //       'https://ichef.bbci.co.uk/news/507/cpsprodpb/AA0E/production/_119543534_animedua.jpg',
              //   }}
              style={styles.logo}
              resizeMode="stretch"
            />
            <Animatable.View
              animation="bounceIn"
              duration={1500}
              style={styles.details}>
              <Text style={{color: 'black', fontSize: 35, fontWeight: 'bold'}}>
                OSISdev.COM
              </Text>
              <Text
                style={{
                  color: 'black',
                  lineHeight: 25,
                  marginTop: 15,
                  marginBottom: 25,
                }}>
                Kalo Mau Login, Tinggal Klik Tombol Di bawah Egee....
              </Text>
              <View style={styles.button}>
                <TouchableOpacity
                  activeOpacity={0.8}
                  onPress={() => this.props.navigation.navigate('Auth')}>
                  <View style={styles.btn}>
                    <Text style={{fontWeight: 'bold'}}>Go To Login</Text>
                    <Icon
                      style={{marginLeft: 10}}
                      name="chevron-right"
                      size={20}
                    />
                  </View>
                </TouchableOpacity>
              </View>
            </Animatable.View>
          </View>
        </ImageBackground>
      </View>
    );
  }
}

export default OnBoard;

const styles = StyleSheet.create({
  details: {
    height: '50%',
    bottom: 0,
    position: 'absolute',
    paddingHorizontal: 40,
    // height: '60%',
    // bottom: 0,
    // position: 'absolute',
    // paddingHorizontal: 82,
    paddingTop: 50,
    backgroundColor: 'rgba(181, 181, 181, 0.912)',
    // borderRadius: 50,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 155,
  },
  logo: {
    borderRadius: 100,
    height: 200,
    width: 200,
    marginBottom: 550,
  },
  btn: {
    height: 50,
    width: 120,
    backgroundColor: 'white',
    marginTop: 20,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  button: {
    alignItems: 'flex-end',
    marginTop: 30,
  },
  header: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    // marginBottom: 550,
  },
  dark: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.2)',
  },
});
