import './Result.css';
import Spring_Warm from '../Result_Data/Spring_Warm';
import Summer_Cool from '../Result_Data/Summer_Cool';
import Autumn_Warm from '../Result_Data/Autumn_Warm';
import Winter_Cool from '../Result_Data/Winter_Cool';
import { useParams } from 'react-router-dom';

function Result() {
    let {PersonalColor} = useParams();
    
    if(PersonalColor == 'SpringWarm'){
        return <Spring_Warm></Spring_Warm>
    }
    else if(PersonalColor == 'SummerCool'){
        return <Summer_Cool></Summer_Cool>
    }
    else if(PersonalColor == 'AutumnWarm'){
        return <Autumn_Warm></Autumn_Warm>
    }
    else if(PersonalColor == 'WinterCool'){
        return <Winter_Cool></Winter_Cool>
    }
}

export default Result;