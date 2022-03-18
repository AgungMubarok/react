/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Layout from '../../layout';
import { getMovie } from '../../redux/action/movieAction';
import './landing-page.css';

function AppKu() {
  const dispatch = useDispatch();
  const state = useSelector(state => state.movieReducer);
  useEffect(() => {
    dispatch(getMovie());
  }, []);

  console.log(state);
  return (
    <Layout>
      <Container>
        {state.loading ? (
          <p>loading</p>
        ) : (
          <div style={{ display: 'flex', justifyContent: 'space-around' }}>
            {state.content.map(item => (
              <div>
                <img width={50} height={50} src={item.Poster} alt="poster" />
                <p>{item.Title}</p>
              </div>
            ))}
          </div>
        )}
      </Container>
    </Layout>
  );
}

export default AppKu;
