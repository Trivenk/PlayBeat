import { FlatList, StyleSheet,View } from 'react-native';
import AlbumCategory from '../components/AlbumCategory';
import { RootTabScreenProps } from '../types';
import data from '../data/albumCategories';
export default function Home({ navigation }: RootTabScreenProps<'Home'>) {
  return (
    <View style={styles.container}>
       <FlatList 
       data={data}
       renderItem = {({item}) => <AlbumCategory title={item.title} albums={item.albums}/>}
        keyExtractor={item => item.id}
       />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
