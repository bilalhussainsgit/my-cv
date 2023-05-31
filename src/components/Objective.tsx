import React, { useState } from 'react'
import ContentEditable from 'react-contenteditable';
import InfoService from '../services/InfoService';
import '../assets/styles/Objective.css';

const Objective = () => {

    const [objective, setObjective] = useState('Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit doloribus facere modi perspiciatis magni cum unde culpa inventore sed error esse maiores quidem animi. <br><br> Fugit quisquam debitis voluptate nam, aperiam nobis tempora totam soluta vel corrupti facilis. Autem, aliquam quam laudantium voluptas enim asperiores reprehenderit quasi sit dolores facere esse, maiores maxime quod in voluptatum adipisci totam quae eaque nesciunt suscipit! Veritatis delectus fugiat iure unde ea exercitationem fugit reprehenderit.');
    const handleBlur = () => {
        const personal = { objective: objective };
        InfoService.postPersonalInfo(personal)
        .then((res: any) => {
            console.log("Below is the response of postPersonalInfo");
            console.log(res);
        })
        .catch((error) => console.log(`Error => ${error}`));
    }


    return (
        <div className='objective-body'>
            <h2 className='title'>Objective</h2>
            <ContentEditable
                onChange={e => setObjective(e.currentTarget.innerHTML)}
                html={objective}
                onBlur={handleBlur}
            />
        </div>
    )
}

export default Objective
