import { Dimensions, FlatList, Image } from "react-native";

import { formatPhotoUri } from "../../api/picsum";

export default function PhotoGrid({ photos, numColumns, onEndReached}) {
    const { width } = Dimensions.get('window');

    const size = width / numColumns;

    const showImg = ({ item }) => (
        <Image 
            source={{
                width: size,
                height: size,
                uri: formatPhotoUri(item.id, size, size), 
                // width: size,
                // height: size,          
                // uri: formatPhotoUri(item.id, size, size),
            }}
        />
    );

    return (
        <FlatList 
            data={photos}
            keyExtractor={(item) => item.id}
            numColumns={numColumns}
            onEndReached={onEndReached}
            renderItem={showImg} 
        />
    );

    // ...
}