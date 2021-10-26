import './App.css';
import { AppLayout } from 'components/layout/AppLayout';
import { ShougiBoard } from 'components/board/ShougiBan';
import { getAllKomas } from 'master/koma';
import { Koma } from 'components/koma/Koma';

function App() {
  const komas = getAllKomas()
  return (
    <AppLayout>
      <ShougiBoard />
      <ul>
        {komas.map((it, index) => <Koma key={index} name={it.name} />)}
      </ul>
    </AppLayout>
  );
}

export default App;
