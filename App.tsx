import React from 'react';
import {StyleSheet, View} from 'react-native';
import {WebView} from 'react-native-webview';

export default function App() {
  return (
    <View style={styles.container}>
      <WebView
        source={{uri: 'https://disneyplus-self.vercel.app/'}}
        style={{flex: 1}}
        scalesPageToFit={true} // Prevents zooming on Android
        javaScriptEnabled={true} // Ensures JavaScript runs in WebView
        domStorageEnabled={true} // Enables DOM storage
        setBuiltInZoomControls={false} // Disables zoom controls on Android
        automaticallyAdjustContentInsets={false} // Prevents auto-adjustments
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
