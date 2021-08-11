import {IonCard, IonCardContent, IonCardTitle, IonCardHeader, IonCardSubtitle, IonButton} from '@ionic/react';
import './Course.css';

interface ContainerProps {name:string, sub:string[]}

const Course: React.FC<ContainerProps> = ({name, sub}) => {
	const items = sub.map((degree) => 
	<li><IonCardSubtitle className="danger">{degree}</IonCardSubtitle></li>);
  return (
			<IonCard className="course">
				<IonCardContent>
					<IonCardHeader>
						<IonCardTitle className="danger">{name}</IonCardTitle>
					</IonCardHeader>
					<ol className="danger">{items}</ol>
					<div className="ion-text-right">
						<IonButton className="ion-margin-end" color="light">View Info</IonButton>
						<IonButton color="primary">Apply</IonButton>
					</div>
				</IonCardContent>
			</IonCard>
  );
};

export default Course;
