import React,{useContext} from 'react';
import {Text,View,Image,TouchableOpacity} from 'react-native';
import { Song } from '../../types';
import styles from './styles';
import { AppContext } from '../../AppContext';
export type songListProps = {
    song:Song;
}
const SongList = (props:songListProps) => {
    const {song} = props;
    const {setSongId,setIsPlay} = useContext(AppContext);
    const onPlay = () => {
        // console.log(song.id);
        setSongId(song.id);
        setIsPlay(true);
    }
    return(
        <TouchableOpacity onPress={onPlay}>
        <View style={styles.container}>
            <Image source={{uri:song.imageUri}} style={styles.image} />
            <View style={styles.right}>
                <Text style={styles.title}>{song.title}</Text>
                <Text style={styles.artist}>{song.artist}</Text>
            </View>
        </View>
        </TouchableOpacity>
    )
}

export default SongList;