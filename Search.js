'use strict';

import React, {
  StyleSheet,
  View,
  Text,
  Component
} from 'react-native';

const styles = StyleSheet.create({
  description: {
    fontSize: 20,
    backgroundColor: 'white'
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

class Search extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.description}>
          Search tab
        </Text>
      </View>
    );
  }
}

module.exports = Search;
