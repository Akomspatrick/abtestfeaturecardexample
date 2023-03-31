import logo from './logo.svg';
import CardComponent from './components/CardComponent';
import './App.css';
import { faker } from "@faker-js/faker";
import {
  createInstance,
  OptimizelyFeature,
  OptimizelyProvider,
  withOptimizely,
    useDecision,
} from "@optimizely/react-sdk";
const card= '<dic>helooo</div>'
const optimizely = createInstance({
  sdkKey: "K4xszjN9gNH4SGeE6kEuL",
});

// }

const DisplayLogo = () => { 
  const [decision] = useDecision('displaycards');

  return (
    <div>{
      decision.enabled
        // mocks config values with print statements like "Variation 1 shows popular products first!" 
        ? 
        <div>
          {
            decision.variables.showlogo ? <img src={logo} className="App-logo" alt="logo" />: <></>
          }
          
        
        </div>
        : <> </>
    }
    </div>
     
  );
}

function DispalyCard() {
  //const [decision] = useDecision('newflag', { autoUpdate: true });
  const [decision] = useDecision('displaycards');
  return (
    <div>{
      decision.enabled
       
        ?
        
        <div className='cards'>
          <div>
            {
              decision.variables.firstcard ?  <CardComponent logo={faker.image.city()}>FIRST CARD</CardComponent>  :<></>
            }
          </div>
            
          <div>
            {
              decision.variables.secondcard ?  <CardComponent logo={faker.image.city()}>SECOND CARD</CardComponent>  :<></>
            }
          </div>

        </div>
        // default fallback if flag off for user
        :
        <div className='switchedoff'>
          <div>Hey !!! Please Tell me, What do You Benefit in Switching the flags off...</div>
          <div>Marc is working on your case !!&#128512;</div>

        </div>
    }
    
    </div>
     
  );
}
function App() {

  return (
   
    <OptimizelyProvider className="App"
      optimizely={optimizely}
      user={{
        id:'user1234567'
      }}>

      <header className="App-header">
        <div className="titl">AllStars/Titanium : Learning Optimizely FullStack  </div>
         
          <DisplayLogo></DisplayLogo>
        
      </header>
      <div className="main">
        {
          <DispalyCard></DispalyCard>

        }
        

      </div>
      <div className="footer">
        
      </div>

      </OptimizelyProvider>
  );
}

export default App;
