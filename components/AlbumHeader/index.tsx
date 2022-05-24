import React,{useContext, useEffect, useState} from 'react';
import {View,Text,Image, TouchableOpacity} from 'react-native';
import {Album} from '../../types';
import styles from './styles';
import { AppContext } from '../../AppContext';
export type albumheaderProps = {
    album: Album;
}
const AlbumHeader = (props: albumheaderProps) => {
    const {album} = props;
    const {setSongId,setIsPlay,isPlay} = useContext(AppContext);
    // const {isPlay,setIsPlay} = useState<Boolean|null>(false);
    const onPlaySong = () => {
        if(isPlay)
        {
            setIsPlay(false);
        }else{
        setSongId(album.songs[0].id);
        setIsPlay(true);
        }
        
    }
 useEffect(()=>{
 },[isPlay])
    return(
        <View style={styles.container}>
            <Image style = {styles.image} source={{uri:album.imageUri}}/>
            <Text style={styles.name}>{album.name}</Text>
            <View style={styles.content}>
                <Text style={styles.by}>By {album.by}</Text>
                <Text style={styles.likes}>Likes {album.numberOfLikes}</Text>
            </View>
            <TouchableOpacity onPress={onPlaySong}>
                <View style={styles.button}>
                    <Text style={styles.buttonText}>{isPlay?"PAUSE":"PLAY"}</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default AlbumHeader;