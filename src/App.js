import './App.css';
import { store } from './redux/store';
import { Provider } from 'react-redux';
import Tasks from './Components/Tasks/Tasks';

function App() {
  return (
    <Provider store={store}>
      <div>
        <Tasks/>
      </div>
    </Provider>
  );
}

export default App;
