import { MyFirstApp } from './MyFirstApp'
import  MySecondApp from './MySecondApp'
import  MyThirdApp from './MyThirdApp'

export function LearningComponent(){
    return(
        <div>
            <MyFirstApp></MyFirstApp>
            <MySecondApp></MySecondApp>
            <MyThirdApp></MyThirdApp>
        </div>
    );
}