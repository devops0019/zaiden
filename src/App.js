import {Header} from './component/Header'
import {Masthead} from './component/Masthead'
import {LiveCelebLife} from './component/LiveCelebLife'
import { GlobalLocation } from './component/GlobalLocation'
import {Amenities} from './component/Amenities'
import {Location} from './component/Location'
import {Footer} from './component/Footer'

function App() {
  return (
    <div className="App">
      <Header />
      <Masthead />
      <LiveCelebLife />
      <GlobalLocation />
      <Amenities />
      <Location />
      <Footer />
    </div>
  );
}

export default App;
