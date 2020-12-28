import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { Icon, SearchBar, TabBar } from '@ant-design/react-native';


const App = () => {
  const [selectedTab, setSelectedTab] = useState('redTab');

  const renderContent = (pageText) => {
    return (
      <View style={{ flex: 1, backgroundColor: 'white', }}>
        <SearchBar placeholder="Search" showCancelButton cancelText="Cancel" />
        <Text style={{ margin: 50 }}>{pageText}</Text>
      </View>
    );
  }

  return (
    <TabBar
      unselectedTintColor="#949494"
      tintColor="#33A3F4"
      barTintColor="#f5f5f5"
    >
      <TabBar.Item
        title="Life"
        icon={<Icon name="home" />}
        selected={selectedTab === 'blueTab'}
        onPress={() => setSelectedTab('blueTab')}
      >
        {renderContent('Life Tab')}
      </TabBar.Item>
      <TabBar.Item
        icon={<Icon name='ordered-list' />}
        title="Koubei"
        badge={2}
        selected={selectedTab === 'redTab'}
        onPress={() => setSelectedTab('redTab')}
      >
        {renderContent('Koubei Tab')}
      </TabBar.Item>
      <TabBar.Item
        icon={<Icon name="like" />}
        title="Friend"
        selected={selectedTab === 'greenTab'}
        onPress={() => setSelectedTab('greenTab')}
      >
        {renderContent('Friend Tab')}
      </TabBar.Item>
      <TabBar.Item
        icon={<Icon name="user" />}
        title="My"
        selected={selectedTab === 'yellowTab'}
        onPress={() => setSelectedTab('yellowTab')}
      >
        {renderContent('My Tab')}
      </TabBar.Item>
    </TabBar>
  );
}


export default App;