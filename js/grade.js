var grade = parseInt(prompt("Enter the mark of the student");
switch(true)
{
	case(grade >=90 && grade <=100):
	alert ("O");
	break;
	
	case(grade >=75&& grade<=89):
	alert ("A");
	break;
	
	case(grade >=60 && grade<=74):
	alert ("B");
	break;
	
	case(grade >=50 && grade<=59):
	alert ("C");
	break;
	
	default:
	alert ("Failed!");	
}

