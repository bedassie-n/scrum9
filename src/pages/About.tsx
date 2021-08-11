import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonImg, IonThumbnail
, IonButtons, IonBackButton, IonCardHeader, IonCardContent, IonCardSubtitle, IonCardTitle } from '@ionic/react';
import photo from '../img/profile_pic.jpeg';
import './About.css'

const About: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
					<IonButtons slot="start">
						<IonBackButton defaultHref="/home" />
					</IonButtons>
					<IonTitle>About Me</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">About Me</IonTitle>
          </IonToolbar>
        </IonHeader>
				<IonCard>
					<IonImg src={photo} />
          <IonCardHeader>
						<IonCardTitle>Who Am I?</IonCardTitle>
            <IonCardSubtitle>Nathaniel Bedassie</IonCardSubtitle>
          </IonCardHeader>
          <IonCardContent>
            I am a young man who seeks to understand the truth of this world. In my short time on this earth, I have come to the conclusion that life is characterized by the balance between selflessness and selfishness. <strong>Selflessness</strong> is the expression of true love, while <strong>Selfishness</strong> leads to <em>sin</em>. Unfortunately, it is apart of the human condition to be selfish, since we are just <i>dust</i>. We have to eat, sleep and breathe. However,...<br/>
						<blockquote>
							<q>... we also need to be <i>loved.</i></q>
						</blockquote>						
      	</IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default About;
