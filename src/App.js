import Button from "./Components/Button";
import { signInWithGoogle, signOut } from "./login";
import { useAuthState} from "./hooks";
import { firebase } from "./config/firebase";
import { Channel } from "./Components";

function App() {

  const { user, initializing } = useAuthState(firebase.auth());

  const renderLoading = () => {
    if (initializing) {
      return <div>
        <h1>Loading ...</h1>
      </div>
    }
  }

  return (
    <div>
      { renderLoading()}
      {
        user ? (
          <>
            <Button onClick={signOut} >Logout</Button>
            <p> Bienvenidos al CHAT! </p>
            <Channel user={user} />
          </>
        ) : <Button onClick={signInWithGoogle} >Sign In With Google</Button>
      }
    </div>
  );
}

export default App;
