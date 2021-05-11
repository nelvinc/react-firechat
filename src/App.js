import {
  db,
  googleAuthProvider,
  firebase
} from "./config/firebae";
import Button from "./Components/Button";

function App() {
  const singInWithGoogle = async () => {
    firebase.auth().useDeviceLanguaje();

    try {
      await firebase.auth().singInWithPopup(googleAuthProvider);

    } catch (e) {
      console.error(e.message);
    }

  };


  return (
    <div>
      <Button onClick={singInWithGoogle} > Sign In With Google </Button>
    </div>
  );
}

export default App;
