import React from 'react';
import {View,Text,Image, TouchableOpacity} from 'react-native';
import {Album} from '../../types';
import styles from './styles';
export type albumheaderProps = {
    album: Album;
}
const AlbumHeader = (props: albumheaderProps) => {
    const {album} = props;
    return(
        <View style={styles.container}>
            <Image style = {styles.image} source={{uri:album.imageUri}}/>
            <Text style={styles.name}>{album.name}</Text>
            <View style={styles.content}>
                <Text style={styles.by}>By {album.by}</Text>
                <Text style={styles.likes}>Likes {album.numberOfLikes}</Text>
            </View>
            <TouchableOpacity>
                <View style={styles.button}>
                    <Text style={styles.buttonText}>PLAY</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default AlbumHeader;