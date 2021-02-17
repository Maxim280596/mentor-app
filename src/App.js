
import './App.css';
import styled from "styled-components";

const Container = styled.div `
height: 40em;
    position: relative
`

const Button = styled.button `
color: palevioletred;
  font-size: 20px;
  margin: 10px;
  padding: 5px 20px;
  border: 2px solid palevioletred;
  border-radius: 3px;
`

const Form = styled.form `
margin: 0;

    position: absolute;
    top: 50%;
    left: 50%;
    margin-right: -50%;
    transform: translate(-50%, -50%)

`
const Input = styled.input `
color: palevioletred;
  font-size: 20px;
  margin: 10px;
  padding: 5px 20px;
  border: 2px solid palevioletred;
  border-radius: 3px;
  width: 100%;
  box-sizing: border-box;
`

const Div = styled.div `

`





function App() {
  return (
    <Container className="App">

      <Form action= "/" method = "post">
       <Div className="username">

      <Input type="text" id="name" name="user_name" placeholder="Name"></Input>
      </Div>
      <Div className="userSurname">
      <Input type="text" id="name" name="user_name" placeholder="Surname"></Input>
      </Div>
    <Div className="usermail">
      <Input type="email" id="mail" name="user_mail" placeholder="Email"></Input>
      </Div>
    <Div className = "userpassword">
      <Input type="password" id="pass" name="user_pass" placeholder="Password"></Input>
      </Div>
    <div className="button">
    <Button type="reset">reset</Button>
  <Button type="submit">Send</Button>
</div>

  </Form>

    </Container>
  );
}

export default App;
