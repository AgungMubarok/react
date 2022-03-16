import { useState } from 'react';
import { Container } from 'react-bootstrap';
import Layout from '../../layout';
import './landing-page.css';

function AppKu() {
  const [nama, setNama] = useState('yudi');
  const [button, setButton] = useState('ubah nama');
  console.log(nama);
  function onClickButton() {
    if (nama === 'rizki') {
      setNama('yudi');
      setButton('ubah nama');
    } else {
      setNama('rizki');
      setButton('kembali');
    }
  }
  return (
    <Layout>
      <Container>
        <div>ini nama yang tampil : {nama}</div>
        <button onClick={onClickButton}>{button}</button>
      </Container>
    </Layout>
  );
}

export default AppKu;
