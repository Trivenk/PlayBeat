import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import PlayerWidget from './components/PlayerWidget';
import { useState } from 'react';
import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';
import { AppContext } from './AppContext';
export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();
const [songId,setSongId] = useState<string|null>();
const [isPlay,setIsPlay] = useState<Boolean|null>();
  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <AppContext.Provider value={{
            songId,
            setSongId: (id: string) =>setSongId(id),
            isPlay,
            setIsPlay:(is:Boolean)=>setIsPlay(is),
        }}>
        <Navigation colorScheme={colorScheme} />
        <StatusBar />
        <PlayerWidget />
        </AppContext.Provider>
      </SafeAreaProvider>
    );
  }
}
