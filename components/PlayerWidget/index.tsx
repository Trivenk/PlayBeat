import { AntDesign, FontAwesome } from "@expo/vector-icons";
import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import styles from "./styles";
const PlayerWidget = () => {
    const song = {
        id: '1',
      imageUri: 'https://cache.boston.com/resize/bonzai-fba/Globe_Photo/2011/04/14/1302796985_4480/539w.jpg',
      title: 'High on You',
      artist: 'Helen',
    } ;
    const isPlaying = false;
    return(
        <View style={styles.container}>
            <Image source={{uri:song.imageUri}} style={styles.image} />
            <View style={styles.mainR}>
            <View style={styles.right}>
                <Text style={styles.title}>{song.title}</Text>
                <Text style={styles.artist}>{song.artist}</Text>
            </View>
            <View style={styles.icons}>
            <AntDesign name="hearto" size={30} color={"white"}/>
            <TouchableOpacity>
            <FontAwesome name={isPlaying ? 'pause' : 'play'} size={30} color={"white"}/>
            </TouchableOpacity>
            </View>
            </View>
        </View>
    )
}

export default PlayerWidget;