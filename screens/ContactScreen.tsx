import * as React from 'react';
import { StyleSheet, ScrollView, TextInput } from 'react-native';

import FooterComponent from '../components/FooterComponent';
import CustomButton from '../components/CustomButton';
import { AntDesign } from '@expo/vector-icons';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

export default function ContactScreen({ navigation }: RootTabScreenProps<'Contact'>) {
    return (
        <ScrollView>
            <View style={[
                styles.container,
                {
                    backgroundColor: 'transparent',
                    width: '100%',
                    marginTop: 50,
                    paddingLeft: 50,
                    paddingRight: 50
                }
            ]}>
                <View style={{
                    backgroundColor: 'transparent',
                    borderRadius: 10,
                    padding: 12,
                    width: '55%'
                }}>
                    <Text
                        selectable={false}
                        style={{
                            fontSize: 16,
                            color: '#1A202C',
                            textAlign: 'center'
                        }}>Send me an email</Text>
                </View>
                <View style={{
                    flex: 1,
                    backgroundColor: 'transparent'
                }}>
                    <View style={{
                        backgroundColor: 'transparent'
                    }}>
                        <Text
                            selectable={false}
                            style={{
                                fontSize: 14,
                                color: '#1A202C',
                            }}>
                            Name
                        </Text>
                        <TextInput
                            style={{
                                height: 40,
                                marginBottom: 12,
                                borderWidth: 2,
                                padding: 14,
                                borderRadius: 13,
                                borderColor: '#a8a8a8',
                                color: '#1A202C',
                                fontFamily: 'MPLUSRounded1c-Bold'
                            }}
                        />
                    </View>

                    <View style={{
                        backgroundColor: 'transparent'
                    }}>
                        <Text
                            selectable={false}
                            style={{
                                fontSize: 14,
                                color: '#1A202C',
                            }}>
                            Email address
                        </Text>
                        <TextInput
                            style={{
                                height: 40,
                                marginBottom: 12,
                                borderWidth: 2,
                                padding: 14,
                                borderRadius: 13,
                                borderColor: '#a8a8a8',
                                color: '#1A202C',
                                fontFamily: 'MPLUSRounded1c-Bold'
                            }}
                        />
                    </View>

                    <View style={{
                        backgroundColor: 'transparent'
                    }}>
                        <Text
                            selectable={false}
                            style={{
                                fontSize: 14,
                                color: '#1A202C',
                            }}>
                            Subject
                        </Text>
                        <TextInput
                            style={{
                                height: 40,
                                marginBottom: 12,
                                borderWidth: 2,
                                padding: 14,
                                borderRadius: 13,
                                borderColor: '#a8a8a8',
                                color: '#1A202C',
                                fontFamily: 'MPLUSRounded1c-Bold'
                            }}
                        />
                    </View>

                    <View style={{
                        backgroundColor: 'transparent'
                    }}>
                        <Text
                            selectable={false}
                            style={{
                                fontSize: 14,
                                color: '#1A202C',
                            }}>
                            Reason
                        </Text>
                        <TextInput
                            style={{
                                height: 40,
                                marginBottom: 12,
                                borderWidth: 2,
                                padding: 14,
                                borderRadius: 13,
                                borderColor: '#a8a8a8',
                                color: '#1A202C',
                                fontFamily: 'MPLUSRounded1c-Bold'
                            }}
                        />
                    </View>

                    <View style={{
                        backgroundColor: 'transparent'
                    }}>
                        <Text
                            selectable={false}
                            style={{
                                fontSize: 14,
                                color: '#1A202C',
                            }}>
                            Message
                        </Text>
                        <TextInput
                            style={{
                                height: 100,
                                marginBottom: 12,
                                borderWidth: 2,
                                padding: 14,
                                borderRadius: 13,
                                borderColor: '#a8a8a8',
                                color: '#1A202C',
                                fontFamily: 'MPLUSRounded1c-Bold'
                            }}
                            multiline={true}
                            numberOfLines={20}
                            maxLength={300}
                            placeholder="Message"
                        />
                    </View>

                    <View style={{
                        backgroundColor: 'transparent',
                        marginBottom: 20
                    }}>
                        <CustomButton
                            style={{
                                padding: 11,
                                borderRadius: 13,
                                width: 150,
                                alignSelf: 'center'
                            }}
                            onPress={() => console.log('hg')}
                            initialColor='#319795'
                            hoverColor='#277a79'
                            pressColor='#3db3b0' >
                            <View style={{
                                flexDirection: 'row',
                                backgroundColor: 'transparent',
                            }}>
                                <Text
                                    selectable={false}
                                    style={{
                                        textAlign: 'center',
                                        alignSelf: 'center',
                                        color: 'white',
                                        fontSize: 16,
                                        fontFamily: 'MPLUSRounded1c-Medium'
                                    }}>
                                    Submit
                                </Text>
                                <AntDesign
                                    selectable={false}
                                    style={{
                                        alignSelf: 'center'
                                    }} name="right" size={15} color="white" />
                            </View>
                        </CustomButton>
                    </View>
                </View>
            </View>
            <FooterComponent path="/screens/TabTwoScreen.tsx" />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: '80%',
    },
});
