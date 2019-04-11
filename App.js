import { createStackNavigator, createAppContainer } from 'react-navigation';
import Detalhes from './screens/Detalhes';
import Itens from './screens/Itens';

const MainNavigator = createStackNavigator({
  Itens: {screen: Itens, title: "Itens!!!!111!!11!!"},
  Detalhes: {screen: Detalhes},
});

const App = createAppContainer(MainNavigator);

export default App;