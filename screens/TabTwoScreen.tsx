import React, { useEffect } from 'react';
import {Text,View,FlatList, SafeAreaView} from 'react-native';
import {useRoute} from '@react-navigation/native';
// import { RootTabScreenProps } from '../types';
import SongList from '../components/SongList';
import data from '../data/albumDetailsFM';
import AlbumHeader from '../components/AlbumHeader';
const TabTwoScreen = () => {

    // const {album} = route.params;
    return(
        <View>
           <FlatList
           data={data.songs}
            renderItem={({item}) => <SongList song={item} />}
            keyExtractor={item => item.id}
            ListHeaderComponent={()=><AlbumHeader album={data}/>}
            />
        </ View>
    )
}

export default TabTwoScreen;