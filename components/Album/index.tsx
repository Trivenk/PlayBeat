import React from "react";
import {Text,View,Image} from 'react-native';
import { Album } from "../../types";
import styles from './styles';

export type Albumprops = {
    album: Album;
}

const AlbumComponent = (props: Albumprops) => {
    return(
        <View style={styles.conatiner}>
            <Image style={styles.image} source={{uri:props.album.imageUri}} />
            <Text style={styles.title}>{props.album.artistsHeadline}</Text>
        </View>
    )
}

export default AlbumComponent;