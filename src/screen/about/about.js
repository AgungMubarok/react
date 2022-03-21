// context method
import React from 'react';
import { Button } from 'react-bootstrap';
import Layout from '../../layout';
import { addCounter, decCounter } from '../../context/actions/actionCounter';
import { useAuthState, useAuthDispatch } from '../../context/store';

const About = () => {
  const dispatch = useAuthDispatch();
  const state = useAuthState();

  console.log(state);
  return (
    <Layout>
      <div>About</div>
      <p>Counter = {state.counterAddOne}</p>
      <Button onClick={() => decCounter(dispatch, state.counterAddOne)}>
        -
      </Button>
      <Button onClick={() => addCounter(dispatch, state.counterAddOne)}>
        +
      </Button>
    </Layout>
  );
};

export default About;

// redux method
// import React from 'react';
// import { Button } from 'react-bootstrap';
// import { useDispatch, useSelector } from 'react-redux';
// import Layout from '../../layout';
// import { addCounter, decCounter } from '../../redux/action/counterAction';

// const About = () => {
//   const dispatch = useDispatch();
//   const state = useSelector(state => state.counterReducer);
//   return (
//     <Layout>
//       <div>About</div>
//       <p>Counter = {state.counterAddOne}</p>
//       <Button onClick={() => dispatch(decCounter(state.counterAddOne))}>
//         -
//       </Button>
//       <Button onClick={() => dispatch(addCounter(state.counterAddOne))}>
//         +
//       </Button>
//     </Layout>
//   );
// };

// export default About;
