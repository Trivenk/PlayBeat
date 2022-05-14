import React from 'react';
import {Text,View,Image} from 'react-native';
import { Song } from '../../types';
import styles from './styles';
export type songListProps = {
    song:Song;
}
const SongList = (props:songListProps) => {
    return(
        <View style={styles.container}>
            <Image source={{uri:props.song.imageUri}} style={styles.image} />
            <View style={styles.right}>
                <Text style={styles.title}>{props.song.title}</Text>
                <Text style={styles.artist}>{props.song.artist}</Text>
            </View>
        </View>
    )
}

export default SongList;