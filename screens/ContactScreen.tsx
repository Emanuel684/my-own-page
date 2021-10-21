import * as React from 'react';
import { StyleSheet, ScrollView, TextInput } from 'react-native';

import FooterComponent from '../components/FooterComponent';
import CustomButton from '../components/CustomButton';
import { AntDesign } from '@expo/vector-icons';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

// import ShowDonutComponent from "../donut/ShowDonut"
import App from '../3dObject/App';

export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
    return (
        <ScrollView>
            <View style={[
                styles.container,
                {
                    backgroundColor: '#ededed',
                    width: '100%',
                    paddingLeft: 50,
                    paddingRight: 50
                }
            ]}>
                <View style={{
                    backgroundColor: 'white',
                    borderRadius: 10,
                    padding: 12,
                    width: '55%'
                }}>
                    <Text style={{
                        fontSize: 16,
                        color: '#1A202C',
                        textAlign: 'center'
                    }}>Send me an email</Text>
                </View>
                <View style={{
                    flex: 1, backgroundColor: 'red'
                }}>
                    <Text style={{
                        
                    }}>
                        Name
                    </Text>
                    <TextInput
                        style={{
                            height: 40,
                            margin: 12,
                            borderWidth: 1,
                            padding: 10,
                            borderRadius: 13,
                            width: '100%'
                        }}
                    // onChangeText={onChangeText}
                    // value={text}
                    />
                    <TextInput
                        style={{
                            height: 40,
                            margin: 12,
                            borderWidth: 1,
                            padding: 10,
                        }}
                        // onChangeText={onChangeNumber}
                        // value={number}
                        placeholder="useless placeholder"
                        keyboardType="numeric"
                    />
                    <TextInput
                        style={{
                            height: 40,
                            margin: 12,
                            borderWidth: 1,
                            padding: 10,
                        }}
                        // onChangeText={onChangeNumber}
                        // value={number}
                        placeholder="useless placeholder"
                        keyboardType="numeric"
                    />
                    <TextInput
                        style={{
                            height: 40,
                            margin: 12,
                            borderWidth: 1,
                            padding: 10,
                        }}
                        // onChangeText={onChangeNumber}
                        // value={number}
                        placeholder="useless placeholder"
                        keyboardType="numeric"
                    />
                    <TextInput
                        style={{
                            height: 40,
                            margin: 12,
                            borderWidth: 1,
                            padding: 10,
                        }}
                        // onChangeText={onChangeNumber}
                        // value={number}
                        placeholder="useless placeholder"
                        keyboardType="numeric"
                    />
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
                                Popular posts
                            </Text>
                            <AntDesign
                                selectable={false}
                                style={{
                                    alignSelf: 'center'
                                }} name="right" size={15} color="white" />
                        </View>
                    </CustomButton>
                </View>
                <FooterComponent path="/screens/TabTwoScreen.tsx" />
            </View>

        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        // backgroundColor: 'orange'
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
