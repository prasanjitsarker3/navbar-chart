import './App.css'
import Chart from './components/Chart/Chart'
import ChartSec from './components/Chart/ChartSec'
import Header from './components/Header/Header'
import SplitPhone from './components/SplitPhone/SplitPhone'

function App() {

  return (
    <div className="">
      <Header></Header>
      <div className='flex justify-center items-center'>
        <Chart></Chart>
        <ChartSec></ChartSec>
      </div>
      <SplitPhone/>
    </div>
  )
}

export default App
