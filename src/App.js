import DateRangePicker from './component/DateRangePicker';

function App() {
  return (
    <div className="App">
      <DateRangePicker onDateSelect={(date) => console.log(date)} />
    </div>
  );
}

export default App;
