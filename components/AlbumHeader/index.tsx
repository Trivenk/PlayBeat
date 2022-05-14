import React from 'react';
import {View,Text,Image} from 'react-native';
import {Album} from '../../types';
import styles from './styles';
export type albumheaderProps = {
    album: Album;
}
const AlbumHeader = (props: albumheaderProps) => {
    const {album} = props;
    return(
        <View>
            <Image source={{uri:album.imageUri}} style={styles.image} />
            {/* <Text>By{album.by}</Text> */}
        </View>
    )
}