import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import { useEffect, useReducer, useCallback } from 'react';
import { getList } from './api/picsum';
import { actionCreators, initialState, reducer } from './reducers/photos';
import PhotoGrid from './components/PhotoGrid/PhotoGrid';

export default function App() {

  const [state, dispatch] = useReducer(reducer, initialState);

  const { photos, nextPage, loading, error } = state;

  const fetchPhotos = useCallback(async () => {
       dispatch(actionCreators.loading())

       try {
        const nextPhotos = await getList(nextPage);
        dispatch(actionCreators.success(nextPhotos, nextPage));
       }
       catch (e) {
        dispatch(actionCreators.failure());
       }
  }, [nextPage])

  useEffect(() => {
    fetchPhotos();
  }, []);

  if (photos.length === 0) {
    if (loading) {
      return (
        <View style={styles.container}>
            <ActivityIndicator animating={true} />
        </View>
      )
    }

    if (error) {
      return (
        <View style={styles.container}>
              <Text>Failed to load photos!</Text>
        </View>
      )
    }
  }

  return (
    <View style={styles.container}>
      <PhotoGrid numColumns={2} photos={photos}></PhotoGrid>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
