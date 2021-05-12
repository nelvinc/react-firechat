import Button from "./Components/Button";
import { signInWithGoogle, signOut } from "./login";

function App() {

  return (
    <div>
      {
        user ? (
          <>
            <Button onClick={signOut} >Sign In With Google</Button>
            <p> Bienvenidos al CHAT! </p>
          </>
        ) : <Button onClick={signInWithGoogle} >Sign In With Google</Button>
      }
    </div>
  );
}

export default App;
