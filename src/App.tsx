import { BrowserRouter } from 'react-router-dom';
import PageHeader from './Common/PageHeader';
import PokeCardList from './List/PokeCardList';

function App() {
  return (
    <BrowserRouter>
      <PageHeader/>
      <PokeCardList/>
    </BrowserRouter>
  );
}

export default App;
