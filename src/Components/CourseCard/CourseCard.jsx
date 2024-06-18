import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CourseInfo from './CourseInfo';

/**
 * The CourseCard component.
 */
function CourseCard({registro,categorias}) {


	return (
		<Card className="flex flex-col h-384 shadow" style={{width:'45%',minWidth:'300px'}}>
			<CardContent className="flex flex-col flex-auto p-24">
				<CourseInfo registro={registro} categorias={categorias}/>
			</CardContent>
		</Card>
	);
}

export default CourseCard;
