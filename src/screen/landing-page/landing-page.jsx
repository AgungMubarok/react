import { Avatar } from '../../components/avatar';
import { Card } from '../../components/card';
import './landing-page.css';

function AppKu() {
  return (
    <div>
      <Avatar imageAvatar="https://images.unsplash.com/photo-1644982652063-1a9b8d24f0f3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxzZWFyY2h8MXx8cGVvcGxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" />
      <div className="layouting">
        <Card
          textCard="html"
          avatarPicture="https://images.unsplash.com/photo-1644982652063-1a9b8d24f0f3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxzZWFyY2h8MXx8cGVvcGxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
          locationText="right"
        />
        <Card
          textCard="css"
          avatarPicture="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cGVvcGxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
        />
      </div>
    </div>
  );
}

export default AppKu;
