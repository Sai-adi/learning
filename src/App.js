import React from 'react';
import Message from './components/Message';
import Counter from './components/Counter';
import Usercard from './components/Usercard';
import 'bootstrap/dist/css/bootstrap.min.css';
import Toggle from './components/toggle';

function App() {
  return (
    <div className=" flex-row">
      <h1>Hello</h1>
      <Message title="Welcome to react" description="This is my first react project" />
      <Message title="Learning Props" description="Props help to pass data between components" />
      <Counter />
      <div className='d-flex flex-row justify-content-center align-items-center'>
        <Usercard name="John Doe" bio="I am a web developer" designation="Frontend Developer" />
        <Usercard name="Jane" bio="I am a software engineer" designation="Backend" />
        <Usercard image="/images/pic.jpg" name="Doe" bio="I am a full stack developer" designation="Fullstack" />
      </div>
      <div className="container text-center mt-5 mb-5">
      <Toggle />
    </div>

    </div>
  );
}

export default App;