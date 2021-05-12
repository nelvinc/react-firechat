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
           <title>Firechat</title>
        <center>
        
       
        <header><h4>FIRE-CHAT</h4>
        <Button onClick={signOut}> Logout Google</Button></header>
        <br></br><br></br><br></br>
        <div class="contenedor">
        <br></br><br></br><br></br>
        
        <h4 class="ben">Bienvenidos al Chat!</h4>
        <hr></hr>
        <Channel user={user}/>
        <br></br><br></br><br></br>
        </div>
        </center>
        <br></br>
        
        </>
        
      ) : <Button onClick={signInWithGoogle} > Sign In With Google </Button>
      
      }
      
    </div>
  );
}

export default App;