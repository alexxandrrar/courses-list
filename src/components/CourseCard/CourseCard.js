import Button from '../Button/Button';

const CourseCard = (props) => (
	<div className='courseCard'>
		<strong>{props.course.title}</strong>
		<div className='description'></div>
		<div className='info'></div>
		<Button text='Show course' size='medium' />
	</div>
);
export default CourseCard;
