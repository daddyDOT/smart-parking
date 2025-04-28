import { View } from 'react-native';
import MapView, { UrlTile } from 'react-native-maps';

export const Map = () => {
    return (
        <View style={{ flex: 1, width: '100%', height: '100%' }}>
            <MapView
                style={{ flex: 1, backgroundColor: 'white' }}
                initialRegion={{
                    latitude: 44.2017,
                    longitude: 17.9079,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
            >
                <UrlTile
                    urlTemplate="https://cartodb-basemaps-a.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png"
                    maximumZ={19}
                />
            </MapView>
        </View>
    );
};
