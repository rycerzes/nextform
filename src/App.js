import './App.css';

import {Container, Button, Form} from 'react-bootstrap';

import Amplify from "aws-amplify";
import { API } from 'aws-amplify';

import awsExports from "./aws-exports";
Amplify.configure(awsExports);

async function addReg() {
  const data = {
    body: {
      name: formState.name,
      email: formState.email,
      roll: formState.roll,
      phone: formState.phone
    }
  };

  console.log(data);
  const apiData = await API.post('formapi', '/register', data);
  console.log({ apiData });
  alert('You have registered for the event successfully! See you there :)`');
}

const formState = { name: '', email: '', roll: '', phone: '' };

function updateFormState(key, value) {
  formState[key] = value;
}

function App() {
  return (
    <Container>
    <div>
      <h3>Event Registration</h3>
      <br/>
        <Form>
          <Form.Group>
            <Form.Label>Name</Form.Label>
            <Form.Control placeholder="Name" onChange={e => updateFormState('name', e.target.value)} />
          </Form.Group>
          <Form.Group>
            <Form.Label>Email</Form.Label>
            <Form.Control placeholder="Email" onChange={e => updateFormState('email', e.target.value)} />
          </Form.Group>
          <Form.Group>
            <Form.Label>Roll</Form.Label>
            <Form.Control placeholder="Roll" onChange={e => updateFormState('roll', e.target.value)} />
          </Form.Group>
          <Form.Group>
            <Form.Label>Phone</Form.Label>
            <Form.Control placeholder="Phone" onChange={e => updateFormState('phone', e.target.value)} />
          </Form.Group>
          <Button onClick={addReg}>Register</Button>
        </Form>
      </div>
    </Container>
  );
}

export default App;
