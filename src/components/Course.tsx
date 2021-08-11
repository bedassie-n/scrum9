import './Course.css';

interface ContainerProps { }

const Course: React.FC<{name:string, sub:string[]}> = ({name, sub}) => {
	const items = sub.map((degree) => 
	<li>{degree}</li>);
  return (
    <div>
    	<p className="danger">{name}</p>
			<ol className="danger">{items}</ol>
    </div>
  );
};

export default Course;
