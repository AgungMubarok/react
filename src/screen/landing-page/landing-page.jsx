import { Alert } from 'react-bootstrap';
import ButtonBuatan from '../../component/button';
import './landing-page.css';

function AppKu() {
  return (
    <>
      <p>halo cek</p>
      <div className="background">
        <ButtonBuatan tittleButton="halo button" />
        <ButtonBuatan tittleButton="halo helo" />
      </div>
      <Alert variant="success">
        <Alert.Heading>Hey, nice to see you</Alert.Heading>
        <p>
          Aww yeah, you successfully read this important alert message. This
          example text is going to run a bit longer so that you can see how
          spacing within an alert works with this kind of content.
        </p>
        <hr />
        <p className="mb-0">
          Whenever you need to, be sure to use margin utilities to keep things
          nice and tidy.
        </p>
      </Alert>
    </>
  );
}

export default AppKu;
