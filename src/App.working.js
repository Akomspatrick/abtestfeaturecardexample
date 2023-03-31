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

const GetDecision= () => { 
  return  useDecision('displaycards');
}

function DispalyCard() {
  //const [decision] = useDecision('newflag', { autoUpdate: true });
  const [decision] = useDecision('displaycards');
  //const ctx = optimizelyClient.createUserContext('123456')
  const text = decision.variables['amount'];
  return (
    <div>{
      decision.enabled
        // mocks config values with print statements like "Variation 1 shows popular products first!" 
        ?
        
        <div className='cards'>
        <CardComponent logo={faker.image.city()}></CardComponent>              
        <CardComponent logo={faker.image.avatar()}></CardComponent>
      </div>
        // default fallback if flag off for user
        :
        ` Feature ${decision.enabled}:Regular Feature`
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
        <div class="titl">AllStars/Titanium : Learning Optimizely FullStack  </div>
        
       <div> <img src={logo} className="App-logo" alt="logo" /></div>
       
      </header>
      <div className="main">
      <OptimizelyFeature feature="displaycards">
            {(enabled, variable) => (

            enabled ? <div className='cards'>
              <CardComponent logo={faker.image.city()}></CardComponent>              
              <CardComponent logo={faker.image.avatar()}></CardComponent>
            </div>
          :
            ` Feature ${enabled}:Regular Feature`
            )
              
          }
        </OptimizelyFeature> 
        

      </div>
      <div className="footer">
        
      </div>

      </OptimizelyProvider>
  );
}

export default App;
