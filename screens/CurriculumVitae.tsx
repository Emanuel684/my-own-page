import * as React from 'react';
import { StyleSheet, ScrollView, TextInput } from 'react-native';

import FooterComponent from '../components/FooterComponent';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

export default function CurriculumVitaeScreen({ navigation }: RootTabScreenProps<'Contact'>) {
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
                        }}>Professional skills</Text>
                    <View style={{
                        backgroundColor: 'transparent'
                    }}>
                        <Text>
                            JavaScript
                        </Text>
                        <Text>
                            JavaScript
                        </Text>
                        <Text>
                            JavaScript
                        </Text>
                        <Text>
                            JavaScript
                        </Text>
                        <Text>
                            JavaScript
                        </Text>
                        <Text>
                            JavaScript
                        </Text>
                        <Text>
                            JavaScript
                        </Text>
                        <Text>
                            JavaScript
                        </Text>
                        <Text>
                            JavaScript
                        </Text>
                        <Text>
                            JavaScript
                        </Text>
                        <Text>
                            JavaScript
                        </Text>
                        <Text>
                            JavaScript
                        </Text>
                        <Text>
                            JavaScript
                        </Text>
                        <Text>
                            JavaScript
                        </Text>
                    </View>
                </View>

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
                        }}>Personal skills</Text>
                    <View style={{
                        backgroundColor: 'transparent'
                    }}>
                        <Text>
                            Espitiru creativo
                        </Text>
                        <Text>
                            Espitiru creativo
                        </Text>
                        <Text>
                            Espitiru creativo
                        </Text>
                        <Text>
                            Espitiru creativo
                        </Text>
                        <Text>
                            Espitiru creativo
                        </Text>

                    </View>
                </View>


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
                        }}>About me</Text>
                    <View style={{
                        backgroundColor: 'transparent'
                    }}>
                        <Text>
                            Desarrollador web backend junior que busca un puesto de trabajo; busco aplicar mis conocimientos en el mundo laborar para crecer como persona, al igual que busco superarme a mí mismo. Ofreciendo mis conocimientos a aquellos problemas que los requieren. Estoy abierto a nuevas oportunidades.

                        </Text>
                    </View>
                </View>

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
                        }}>Education</Text>
                    <View style={{
                        backgroundColor: 'transparent'
                    }}>
                        <Text>
                            desarrollador web backend
                        </Text>
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
