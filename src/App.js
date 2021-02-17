
import './App.css';

function App() {
  return (
    <div className="App">
       <form class="form" action="">
  <fieldset className="field">
    <label for="default-text">Имя </label>
    <input type="text" id="default-text" className="text" />
  </fieldset>
  <fieldset className="field">
    <label for="default-text">Фамилия </label>
    <input type="text" id="default-text" className="text" />
  </fieldset>
  <fieldset className="field">
    <label for="default-text">Email </label>
    <input type="email" id="default-text" className="email" />
  </fieldset>
  <fieldset className="field">
    <label for="default-text">Пароль </label>
    <input type="password" id="default-text" className="pass" />
  </fieldset>

  <fieldset className="field submit">
    <input type="submit" value="Send" />
    <input type="reset" value="Clear" />
  </fieldset>
</form>

    </div>
  );
}

export default App;
