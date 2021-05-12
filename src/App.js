import Button from "./Components/Button";
import useAuthState from "./hooks/useAuthState";
import { signInWithGoogle, signOut } from "./login";

function App() {

  const { user, initializing } = useAuthState(firebase.auth());

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
