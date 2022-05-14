import { useNavigation } from "@react-navigation/native";
import React from "react";
import {Text,View,Image,TouchableWithoutFeedback} from 'react-native';
import { Album } from "../../types";
import styles from './styles';

export type Albumprops = {
    album: Album;
}

const AlbumComponent = (props: Albumprops) => {
    const navigation = useNavigation();
    const onPress = () => {
        navigation.navigate('Album');
    }
    return(
        <TouchableWithoutFeedback onPress={onPress}>
        <View style={styles.conatiner}>
            <Image style={styles.image} source={{uri:props.album.imageUri}} />
            <Text style={styles.title}>{props.album.artistsHeadline}</Text>
        </View>
        </TouchableWithoutFeedback>
    )
}

export default AlbumComponent;