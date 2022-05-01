import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import tw from 'twrnc';
import { Icon } from '@rneui/base';

const MenuBar = () => {
    const [connected, setConnected] = useState(false)
    return (
        <View>
            {/* Media */}
            <TouchableOpacity style={
                tw.style('flex-row mt-5 p-5', {
                    justifyContent: 'space-between'
                })
            }>
                <View style={tw`flex-row`}>
                    <Icon
                        style={
                            tw.style('p-1 w-10 mr-3', {
                                elevation: 3,
                            })
                        }
                        type='font-awesome-5'
                        name='music'
                        color='white'
                    />
                    <Text style={tw`text-2xl text-white font-extralight`}>Media</Text>
                </View>
                <Icon
                    style={
                        tw.style('w-10', {
                            elevation: 3,
                        })
                    }
                    type='font-awesome-5'
                    name='chevron-right'
                    color='white'
                />
            </TouchableOpacity>
            {/* Software Updates */}
            <TouchableOpacity style={
                tw.style('flex-row p-5', {
                    justifyContent: 'space-between'
                })
            }>
                <View style={tw`flex-row`}>
                    <Icon
                        style={
                            tw.style('p-1 w-10 mr-3', {
                                elevation: 3,
                            })
                        }
                        type='font-awesome-5'
                        name='clock'
                        color='white'
                    />
                    <View>
                        <Text style={tw`text-2xl text-white font-extralight`}>Software Updates</Text>
                        <Text style={tw`text-sm text-gray-500 font-extralight`}>Approximate time to install: 45min </Text>
                    </View>
                </View>
                <Icon
                    style={
                        tw.style('w-10', {
                            elevation: 3,
                        })
                    }
                    type='font-awesome-5'
                    name='chevron-right'
                    color='white'
                />
            </TouchableOpacity>
            {/* CLIMATE */}
            <TouchableOpacity style={
                tw.style('flex-row p-5', {
                    justifyContent: 'space-between'
                })
            }>
                <View style={tw`flex-row`}>
                    <Icon
                        style={
                            tw.style('p-1 w-10 mr-3', {
                                elevation: 3,
                            })
                        }
                        type='font-awesome-5'
                        name='thermometer-half'
                        color='white'
                    />
                    <View>
                        <Text style={tw`text-2xl text-white font-extralight`}>CLIMATE</Text>
                        <Text style={tw`text-sm text-gray-500 font-extralight`}>20°F </Text>
                    </View>
                </View>
                <Icon
                    style={
                        tw.style('w-10', {
                            elevation: 3,
                        })
                    }
                    type='font-awesome-5'
                    name='chevron-right'
                    color='white'
                />
            </TouchableOpacity>
            {/* Controls */}
            <TouchableOpacity style={
                tw.style('flex-row p-5', {
                    justifyContent: 'space-between'
                })
            }>
                <View style={tw`flex-row`}>
                    <Icon
                        style={
                            tw.style('p-1 w-10 mr-3', {
                                elevation: 3,
                            })
                        }
                        type='font-awesome-5'
                        name='car'
                        color='white'
                    />
                    <Text style={tw`text-2xl text-white font-extralight`}>Controls</Text>
                </View>
                <Icon
                    style={
                        tw.style('w-10', {
                            elevation: 3,
                        })
                    }
                    type='font-awesome-5'
                    name='chevron-right'
                    color='white'
                />
            </TouchableOpacity>
            {/* Charging */}
            <TouchableOpacity style={
                tw.style('flex-row p-5', {
                    justifyContent: 'space-between'
                })
            }>
                <View style={tw`flex-row`}>
                    <Icon
                        style={
                            tw.style('p-1 w-10 mr-3', {
                                elevation: 3,
                            })
                        }
                        type='font-awesome-5'
                        name='bolt'
                        color='white'
                    />
                    <Text style={tw`text-2xl text-white font-extralight`}>Charging</Text>
                </View>
                <Icon
                    style={
                        tw.style('w-10', {
                            elevation: 3,
                        })
                    }
                    type='font-awesome-5'
                    name='chevron-right'
                    color='white'
                />
            </TouchableOpacity>
            {/* Location */}
            <TouchableOpacity style={
                tw.style('flex-row p-5', {
                    justifyContent: 'space-between'
                })
            }>
                <View style={tw`flex-row`}>
                    <Icon
                        style={
                            tw.style('p-1 w-10 mr-3', {
                                elevation: 3,
                            })
                        }
                        type='font-awesome-5'
                        name='map-marker-alt'
                        color='white'
                    />
                    <Text style={tw`text-2xl text-white font-extralight`}>Location</Text>
                </View>
                <Icon
                    style={
                        tw.style('w-10', {
                            elevation: 3,
                        })
                    }
                    type='font-awesome-5'
                    name='chevron-right'
                    color='white'
                />
            </TouchableOpacity>
            {/* Upgrades */}
            <TouchableOpacity style={
                tw.style('flex-row p-5', {
                    justifyContent: 'space-between'
                })
            }>
                <View style={tw`flex-row`}>
                    <Icon
                        style={
                            tw.style('p-1 w-10 mr-3', {
                                elevation: 3,
                            })
                        }
                        type='font-awesome-5'
                        name='shopping-bag'
                        color='white'
                    />
                    <Text style={tw`text-2xl text-white font-extralight`}>Upgrades</Text>
                </View>
                <Icon
                    style={
                        tw.style('w-10', {
                            elevation: 3,
                        })
                    }
                    type='font-awesome-5'
                    name='chevron-right'
                    color='white'
                />
            </TouchableOpacity>
            {/* PhoneKey */}
            <TouchableOpacity style={
                tw.style('flex-row p-5', {
                    justifyContent: 'space-between'
                })
            }
                onPress={() => setConnected(!connected)}
            >
                <View style={tw`flex-row`}>
                    <Icon
                        style={
                            tw.style('p-1 w-10 mr-3', {
                                elevation: 3,
                            })
                        }
                        type='font-awesome-5'
                        name='key'
                        color='white'
                    />
                    <View>
                        <Text style={tw`text-2xl text-white font-extralight`}>Phone key</Text>
                        {connected ?
                            <Text style={tw`text-sm text-gray-500 font-extralight`}>Dissconected</Text>
                            :
                            <Text style={tw`text-sm text-gray-500 font-extralight`}>Connected</Text>
                        }
                    </View>
                </View>
                <Icon
                    style={
                        tw.style('w-10', {
                            elevation: 3,
                        })
                    }
                    type='font-awesome-5'
                    name='chevron-right'
                    color='white'
                />
            </TouchableOpacity>
            {/* Services */}
            <TouchableOpacity style={
                tw.style('flex-row p-5', {
                    justifyContent: 'space-between'
                })
            }>
                <View style={tw`flex-row`}>
                    <Icon
                        style={
                            tw.style('p-1 w-10 mr-3', {
                                elevation: 3,
                            })
                        }
                        type='font-awesome-5'
                        name='wrench'
                        color='white'
                    />
                    <Text style={tw`text-2xl text-white font-extralight`}>Services</Text>
                </View>
                <Icon
                    style={
                        tw.style('w-10', {
                            elevation: 3,
                        })
                    }
                    type='font-awesome-5'
                    name='chevron-right'
                    color='white'
                />
            </TouchableOpacity>
            {/* Roadside Assistanse */}
            <TouchableOpacity style={
                tw.style('flex-row p-5', {
                    justifyContent: 'space-between'
                })
            }>
                <View style={tw`flex-row`}>
                    <Icon
                        style={
                            tw.style('p-1 w-10 mr-3', {
                                elevation: 3,
                            })
                        }
                        type='font-awesome-5'
                        name='exclamation-triangle'
                        color='white'
                    />
                    <Text style={tw`text-2xl text-white font-extralight`}>Roadside Assistanse</Text>
                </View>
                <Icon
                    style={
                        tw.style('w-10', {
                            elevation: 3,
                        })
                    }
                    type='font-awesome-5'
                    name='chevron-right'
                    color='white'
                />
            </TouchableOpacity>
        </View>
    )
}

export default MenuBar

const styles = StyleSheet.create({})