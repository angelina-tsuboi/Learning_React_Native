import * as React from 'react';
import { BottomNavigation, Text } from 'react-native-paper';

const ItemsRoute = () => <Text>Music</Text>;

const FavsRoute = () => <Text>Albums</Text>;

const SettingsRoute = () => <Text>Recents</Text>;

const BottomNav = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'items', title: 'Items', icon: 'clipboard' },
    { key: 'favorites', title: 'Favorites', icon: 'heart' },
    { key: 'settings', title: 'Settings', icon: 'gear' },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    items: ItemsRoute,
    favorites: FavsRoute,
    settings: SettingsRoute,
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
};

export default BottomNav;