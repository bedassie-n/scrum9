import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonList, IonItem, IonLabel
	, IonButtons, IonBackButton, IonListHeader } from '@ionic/react';
	import Course from '../components/Course';
	import './Programmes.css';
	
	const Programmes: React.FC = () => {
		return (
			<IonPage>
				<IonHeader>
					<IonToolbar>
						<IonButtons slot="start">
							<IonBackButton defaultHref="/home" />
						</IonButtons>
						<IonTitle>Programmes</IonTitle>
					</IonToolbar>
				</IonHeader>
				<IonContent fullscreen>
					<IonHeader collapse="condense">
						<IonToolbar>
							<IonTitle size="large">Programmes</IonTitle>
						</IonToolbar>
					</IonHeader>
					{/*-- List of Programmes --*/}
					<IonListHeader lines="none">
						<IonLabel color="dark">Undergraduate Programs Offered by The Department of Computing.</IonLabel>
					</IonListHeader>
					<IonList>
						<IonItem>
							<Course name="BSc. General" sub={['Computer Science Major','Software Engineering Major']} />
						</IonItem>
						<IonItem>
							<Course name="BSc Information Technology" sub={[]}/>
						</IonItem>
						<IonItem>
							<Course name="BSc Computer Studies Option" sub={[]} />
						</IonItem>
						<IonItem>
							<Course name="BSc. Software Engineering (Mobile Application Technologies)" sub={[]} />
						</IonItem>
						<IonItem>
							<Course name="Minors are offered as follows:" sub={['Minor in Computer Science','Minor in Software Engineering','Minor in Information Technology']} />
						</IonItem>
						<IonItem>
							<Course name="Course Listing" sub={[]} />
						</IonItem>
					</IonList>

				</IonContent>
			</IonPage>
		);
	};
	
	export default Programmes;
	