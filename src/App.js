import "bulma/css/bulma.css";
import ProfileCard from "./ProfileCard";
import AlexaImage from "./img/alexa.png";
import CortanaImage from "./img/cortana.png";
import SiriImage from "./img/siri.png";

function App() {
  return (
    <div>
        <section className="hero is-primary">
            <div className="hero-body">
                <p className="title">Your personal digital Assistants!</p>
            </div>
        </section>
      {/* <div>
        <h1></h1>
      </div> */}
      <div>
        <div className="container">
          <section className="section">
            <div className="columns">
              <div className="column is-4">
                <ProfileCard title="Alexa" handle="@Alexa" img={AlexaImage} description="Alexa is build by Amazon"/>
              </div>
              <div className="column is-4">
                <ProfileCard
                  title="Cortana"
                  handle="@Cortana"
                  img={CortanaImage}
                  description="Cortana is build by Microsoft you know!"
                />
              </div>
              <div className="column is-4">
                <ProfileCard title="Siri" handle="@siri" img={SiriImage} description="Siri is built by Apple by the way ha!" />
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default App;
