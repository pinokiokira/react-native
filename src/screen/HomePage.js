/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
'use strict';
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput, Image, ScrollView } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import { SearchBar } from 'react-native-elements';
//import { Avatar, Card, ListItem, Toolbar } from '../react-native-material-ui';
import { Avatar, Card, ListItem, Toolbar, BottomNavigation, Icon, Button } from 'react-native-material-ui';
import UserAvatar from 'react-native-user-avatar';
import ScrollableTabView, {DefaultTabBar, } from 'react-native-scrollable-tab-view';
import Container from '../Container';
import { PropTypes } from 'prop-types';
//var MaskTabBar = require('react-native-scrollable-tab-view-mask-bar');

const propTypes = {
    /**
    * Called when card is pressed
    */
    onPress: PropTypes.func,
    /**
    * You can override any style for this card
    */
    style: PropTypes.object,
};
type Props = {};
export default class HomePage extends Component<Props> {
    constructor(props) {
        super(props);

        this.state = { active: 'today' };
    }

  static navigationOptions = {
    title: 'Timeline',
  };
   state = {
      search: '',
    };

    updateSearch = search => {
      this.setState({ search });
    };

  render(){
     const { search } = this.state;
    return (
        <Container>
        <ScrollView >
         <SearchBar
                   showLoading={false}
                   platform={Platform.OS}
                   clearIcon={true}
                   onChangeText={text=> this.updateSearch(text)}
                   onClearText={() => console.log('onClearText')}
                   placeholder='Search..'
                   cancelButtonTitle='Cancel'
                   containerStyle={{borderWidth: 1,
                                    borderRadius: 30,
                                    borderColor: '#ddd',
                                    borderBottomWidth: 0,
                                    shadowColor: '#000',
                                    shadowOffset: { width: 0, height: 2 },
                                    shadowOpacity: 0.8,
                                    shadowRadius: 2,
                                    elevation: 1,
                                    marginLeft: 5,
                                    marginRight: 5,
                                    marginTop: 10,}}
                 />
           <ScrollableTabView

               initialPage={1}
               renderTabBar={() => <DefaultTabBar style={styles.tabText}/>} >
                <Text tabLabel='Dentist' style={styles.tabText}>Dentist</Text>
                <Text tabLabel='Cardialogist'>Cardialogist</Text>
                <Text tabLabel='Physician'>Physician</Text>
                <Text tabLabel='Prediatric'>Prediatric</Text>
                <Text tabLabel='Surgeon'>Surgeon</Text>

             </ScrollableTabView>
            <View style={{marginTop: 20, }}>
                <Card>
                    <ListItem
                        leftElement={<UserAvatar  name="Avishay Bar" src={"https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg"} size={50}/>}
                        centerElement={{
                            primaryText: 'Mbah Enow',
                            secondaryText: 'Radiologist',
                        }}
                        rightElement={{ primary: <Image source={require('./../../resources/hard.png')} style={styles.imageHart}/>, secondaryText:'5 minutes ago'}}

                    />
                    <Image source={require('./../../resources/Bitmap.png')} style={styles.image}/>
                    <View style={styles.textContainer}>
                        <Text style={{fontWeight: 'bold'}}>
                            8 Common keto Mistakes
                        </Text>
                         <Text >
                              Avoid the following common pitfalls of keto to
                              help ensure you're following...
                         </Text>
                    </View>
                </Card>
                <Card>
                    <ListItem
                        leftElement={<UserAvatar  name="Avishay Bar" src={"https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg"} size={50}/>}
                        centerElement={{
                            primaryText: 'Ren Xue',
                            secondaryText: 'Surgeon',
                        }}
                        rightElement={<Image source={require('./../../resources/hard.png')} style={styles.imageHart}/>}

                    />
                    <Image source={require('./../../resources/Bitmap2.png')} style={styles.image}/>
                    <View style={styles.textContainer}>
                        <Text style={{fontWeight: 'bold'}}>
                            8 Common keto Mistakes
                        </Text>
                         <Text >
                              Avoid the following common pitfalls of keto to
                              help ensure you're following...
                         </Text>
                    </View>
                </Card>
            </View>

       </ScrollView >

                <BottomNavigation active={this.state.active} >
                    <BottomNavigation.Action
                        key="home"
                        icon="home"

                        onPress={() => this.setState({ active: 'home' })}
                    />
                    <BottomNavigation.Action
                        key="today"
                        icon="today"
                        onPress={() => this.setState({ active: 'today' })}
                    />
                    <BottomNavigation.Action
                        key="search"
                        icon="search"

                        onPress={() => this.setState({ active: 'search' })}
                    />
                    <BottomNavigation.Action
                        key="people"
                        icon="people"

                        onPress={() => this.setState({ active: 'people' })}
                    />
                </BottomNavigation>
                </Container>
        );

  }
}

const styles = StyleSheet.create({
  description: {
    fontSize: 18,
    textAlign: 'center',
    color: '#656565',
    marginTop: 65,
  },
  tabText: {
  color: '#fff',
  },
  searchInput: {
    height: 40,
    padding: 4,
    margin:10,
//    marginRight: 5,
                    //    marginTop :10,
    flexGrow: 1,
    fontSize: 18,
    borderWidth: 1,
    borderColor: '#48BBEC',
    borderRadius: 8,
    color: '#48BBEC',
  },
  textContainer: {
      paddingHorizontal: 16,
      paddingBottom: 16,
      marginLeft:10
  },
  image: {
      width: 350,
      height: 170,
      alignSelf: 'flex-end'
  },
  imageHart: {
    width: 20,
    height: 20,
    alignSelf: 'flex-end'
  },
  container: {
          flex: 1,
      },
});
