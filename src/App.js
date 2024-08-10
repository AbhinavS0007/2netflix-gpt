
import { Provider } from 'react-redux';
import Body from './components.js/Body';
import appStore from './utils.js/appStore';

function App() {
  return (
    <div>

      <Provider store={appStore}><Body /></Provider>
     
    </div>
  );
}

export default App;
