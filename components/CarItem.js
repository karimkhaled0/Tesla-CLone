import { StyleSheet, Text, View, Image, ImageBackground, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from 'react'
import tw from 'twrnc';
import { Icon } from '@rneui/base';
import MenuBar from './MenuBar';

const CarItem = () => {
    const [locked, setLocked] = useState(false)
    return (
        // BackGround Image
        <ImageBackground source={require('../icons/background.png')}
            style={{
                width: '100%', height: '100%', resizeMode: 'contain'
            }}>
            {/* Icons */}
            <View
                style={
                    tw.style('flex-row pt-10 pr-10 pl-10', {
                        justifyContent: 'space-between',
                    })
                }>
                {/* Settings Icon */}
                <TouchableOpacity>
                    <Icon
                        style={
                            tw.style('p-2 bg-white rounded-full w-10 mt-4', {
                                elevation: 3,
                            })
                        }
                        type='antdesign'
                        name='setting'
                        color='black'
                    />
                </TouchableOpacity>
                {/* Car Modal */}
                <Text style={tw`text-2xl mt-5 text-white font-bold`}>My Modal 3</Text>
                {/* Box Icon */}
                <TouchableOpacity>
                    <Icon
                        style={
                            tw.style('p-2 bg-white rounded-full w-10 mt-4', {
                                elevation: 3,
                            })
                        }
                        type='antdesign'
                        name='inbox'
                        color='black'
                    />
                </TouchableOpacity>
            </View>
            {/* Details */}
            <View
                style={tw`flex-col`}
            >
                {/* Battery */}
                <View
                    style={tw.style('flex-row pt-3', {
                        justifyContent: 'center',
                    })}
                >
                    <Image
                        source={require('../icons/battery.png')}
                        style={tw.style('w-20 h-full mr-3', {
                            resizeMode: 'contain'
                        })}
                    />
                    <Text style={tw`text-4xl text-center text-white font-bold`}>150 mi</Text>
                </View>
                {/* Status */}
                <Text style={tw`text-2xl text-center text-white font-bold pt-3`}>Parked</Text>
            </View>
            <ScrollView>
                {/* starting menue */}
                <View style={
                    tw.style('flex-row pt-10 pr-10 pl-10 mt-20', {
                        justifyContent: 'space-evenly',
                    })
                }>
                    {/* Fan */}
                    <TouchableOpacity>
                        <Icon
                            style={
                                tw.style('p-4 rounded-full border-white border w-15 mt-4', {
                                    elevation: 3,
                                })
                            }
                            type='font-awesome-5'
                            name='fan'
                            color='white'
                        />
                    </TouchableOpacity>
                    {/* Key */}
                    <TouchableOpacity>
                        <Icon
                            style={
                                tw.style('p-4 rounded-full border-white border w-15 mt-4', {
                                    elevation: 3,
                                })
                            }
                            type='font-awesome-5'
                            name='key'
                            color='white'
                        />
                    </TouchableOpacity>
                    {/* Lock */}
                    {locked ? <TouchableOpacity
                        onPress={() => setLocked(false)}
                    >
                        <Icon
                            style={
                                tw.style('p-4 rounded-full border-white border w-15 mt-4', {
                                    elevation: 3,
                                })
                            }
                            type='font-awesome-5'
                            name='lock-open'
                            color='white'
                        />
                    </TouchableOpacity>
                        :
                        <TouchableOpacity onPress={() => setLocked(true)}>
                            <Icon
                                style={
                                    tw.style('p-4 rounded-full border-white border w-15 mt-4', {
                                        elevation: 3,
                                    })
                                }
                                type='font-awesome-5'
                                name='lock'
                                color='white'
                            />
                        </TouchableOpacity>

                    }
                </View>
                <MenuBar />
            </ScrollView>
        </ImageBackground>
    )
}

export default CarItem

const styles = StyleSheet.create({})