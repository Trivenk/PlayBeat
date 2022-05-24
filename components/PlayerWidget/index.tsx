import { AntDesign, FontAwesome } from "@expo/vector-icons";
import React,{useState,useEffect, useContext} from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import styles from "./styles";
import {Sound} from "expo-av/build/Audio/Sound";
import { AppContext } from "../../AppContext";
import data from '../../data/albumDetails';
const PlayerWidget = () => {
    // const [isPlaying, setIsPlaying] = useState<Boolean | null>(true);
    const [sound, setSound] = useState<Sound|null>(null);
    const [postion,setPostion] = useState<number>(0);
    const [duration,setDuration] = useState<number>(0);
    const [song,setSong] = useState<object|null>(null);
    const {songId,isPlay,setIsPlay} = useContext(AppContext);
    const onPlayBackStatusUpdate = (status:any) => {
        // console.log(status)
        // setIsPlaying(status.isPlaying);
        setDuration(status.durationMillis);
        setPostion(status.positionMillis);
        setIsPlay(status.isPlaying);
        // if(status.durationMillis===status.positionMillis){
        //     status.durationMillis=0;
        // }
    }
    useEffect(() => {
        data.songs.forEach(element => {
          if(element.id===songId){
          setSong(element);
        
        }})
        // console.log(song);
      }, [songId])
    const getProgress = () => {
        if (sound === null || duration === null || postion === null) {
            return 0;
          }
        let width = (postion / duration) * 100;
        if(width==100)
        {
            setPostion(0);

        }
        return width;
    }
    const onPlayPause = async () => {
        if(!sound)
        return;
        if(isPlay)
        {
            await sound.pauseAsync();
        }
        else{
            await sound.playAsync();
        }
    }
    const playSong = async() => {
        if(sound)
        {
            await sound.unloadAsync();
        }
        const {sound: newSound} = await Sound.createAsync(
            { uri: song.uri },
            {shouldPlay : isPlay},
            onPlayBackStatusUpdate
        )
        setSound(newSound);

    }
    useEffect(()=>{
        if(song){
        playSong();
        }
    },[song]);

    if(!song)
    {
        return null;
    }
    return(
        <View style={styles.container}>
            <View style={[styles.progress,{width:`${getProgress()}%`}]} />
            <View style={styles.row}>
            <Image source={{uri:song.imageUri}} style={styles.image} />
            <View style={styles.rightContainer}>
            <View style={styles.nameContainer}>
                <Text style={styles.title}>{song.title}</Text>
                <Text style={styles.artist}>{song.artist}</Text>
            </View>
            <View style={styles.iconsContainer}>
            <AntDesign name="hearto" size={30} color={"white"}/>
            <TouchableOpacity onPress={onPlayPause}>
            <FontAwesome name={isPlay ? 'pause' : 'play'} size={30} color={"white"}/>
            </TouchableOpacity>
            </View>
            </View>
            </View>
        </View>
    )
}

export default PlayerWidget;