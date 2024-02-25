//importing:
import Alert from 'react-bootstrap/Alert';

function Alertgrad() {
  return (
    <Alertgrad variant="RSVP">
      <Alert.Heading>RSVP Here</Alert.Heading>
      <p>
       Dont Forget
      </p>
      <hr />
      <p className="mb-0">
       text here 
      </p>
    </Alertgrad>
  );
}

//this it is the default return .'export default' matches component & file name.
export default Alertgrad;