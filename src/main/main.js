/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Image, StyleSheet} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import {Home} from "../home/home";
import {Mine} from "../mine/mine";
import {Shop} from "../shop/shop";
import {More} from "../more/more";


export class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'home'
        };
    }


    render() {
        return (

            <TabNavigator>
                <TabNavigator.Item
                    selected={this.state.selectedTab === 'home'}
                    title="Home"
                    renderIcon={() => <Image style={styles.iconStyle}
                                             source={require("../../img/icon_tabbar_homepage.png")}/>}
                    renderSelectedIcon={() => <Image
                        style={styles.iconStyle} source={require("../../img/icon_tabbar_homepage_selected.png")}/>}
                    onPress={() => this.setState({selectedTab: 'home'})}
                >
                    <Home/>
                </TabNavigator.Item>
                <TabNavigator.Item
                    selected={this.state.selectedTab === 'shop'}
                    title="Shop"
                    renderIcon={() => <Image style={styles.iconStyle}
                                             source={require("../../img/icon_tabbar_mine.png")}/>}
                    renderSelectedIcon={() => <Image style={styles.iconStyle}
                                                     source={require("../../img/icon_tabbar_mine_selected.png")}/>}
                    onPress={() => this.setState({selectedTab: 'shop'})}
                >
                    <Shop/>
                </TabNavigator.Item>

                <TabNavigator.Item
                    selected={this.state.selectedTab === 'mine'}
                    title="Mine"
                    renderIcon={() => <Image style={styles.iconStyle}
                                             source={require("../../img/icon_tabbar_mine.png")}/>}
                    renderSelectedIcon={() => <Image style={styles.iconStyle}
                                                     source={require("../../img/icon_tabbar_mine_selected.png")}/>}
                    onPress={() => this.setState({selectedTab: 'mine'})}
                >
                    <Mine/>
                </TabNavigator.Item>

                <TabNavigator.Item
                    selected={this.state.selectedTab === 'more'}
                    title="More"
                    renderIcon={() => <Image style={styles.iconStyle}
                                             source={require("../../img/icon_tabbar_mine.png")}/>}
                    renderSelectedIcon={() => <Image style={styles.iconStyle}
                                                     source={require("../../img/icon_tabbar_mine_selected.png")}/>}
                    onPress={() => this.setState({selectedTab: 'more'})}
                >
                    <More/>
                </TabNavigator.Item>
            </TabNavigator>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    iconStyle: {
        width: 32,
        height: 32,
    }
});
