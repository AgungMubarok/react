import React from 'react';
import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Layout from '../../layout';
import { addCounter, decCounter } from '../../redux/action/counterAction';

const About = () => {
  const dispatch = useDispatch();
  const state = useSelector(state => state.counterReducer);
  console.log(state);
  return (
    <Layout>
      <div>About</div>
      <p>Counter = {state.counterAddOne}</p>
      <Button onClick={() => dispatch(decCounter(state.counterAddOne))}>
        -
      </Button>
      <Button onClick={() => dispatch(addCounter(state.counterAddOne))}>
        +
      </Button>
    </Layout>
  );
};

export default About;
