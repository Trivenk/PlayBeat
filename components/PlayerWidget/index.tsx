import { AntDesign, FontAwesome } from "@expo/vector-icons";
import React,{useState,useEffect} from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import styles from "./styles";
import {Sound} from "expo-av/build/Audio/Sound";
const PlayerWidget = () => {
    const song = {
        id: '1',
      imageUri: 'https://cache.boston.com/resize/bonzai-fba/Globe_Photo/2011/04/14/1302796985_4480/539w.jpg',
      title: 'High on You',
      artist: 'Helen',
      uri:"https://s3.amazonaws.com/exp-us-standard/audio/playlist-example/Comfort_Fit_-_03_-_Sorry.mp3",
    } ;
    const [isPlaying, setIsPlaying] = useState<Boolean | null>(false);
    const [sound, setSound] = useState<Sound|null>(null);
    const [postion,setPostion] = useState<number>(0);
    const [duration,setDuration] = useState<number>(0);
    const onPlayBackStatusUpdate = (status) => {
        console.log(status)
        setIsPlaying(status.isPlaying);
        setDuration(status.durationMillis);
        setPostion(status.positionMillis);
    }
    const getProgress = () => {
        if (sound === null || duration === null || postion === null) {
            return 0;
          }
        return (postion / duration) * 100;
        return (postion / duration) * 100;
    }
    const onPlayPause = async () => {
        if(!sound)
        return;
        if(isPlaying)
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
            {shouldPlay : isPlaying},
            onPlayBackStatusUpdate
        )
        setSound(newSound);

    }
    useEffect(()=>{
        playSong();
    },[]);
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
            <FontAwesome name={isPlaying ? 'pause' : 'play'} size={30} color={"white"}/>
            </TouchableOpacity>
            </View>
            </View>
            </View>
        </View>
    )
}

export default PlayerWidget;