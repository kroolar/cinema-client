import { useState } from 'react';
import { Button, Card, Input, Rate } from './components'

const App = () => {
  const [rate, setRate] = useState(4)
  const [text, setText] = useState('Kupa')
  return (
    <div className="p-10 bg-gray-100 h-screen">
      <Card>
        <Button text="Sample Button" />
        <Input onChange={e => setText(e.target.value)} value={text} />
        <Rate onClick={setRate} value={rate} scale={5} />
      </Card>
    </div>
  );
}

export default App;
