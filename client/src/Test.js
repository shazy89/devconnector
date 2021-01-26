import React, {useState, Fragment} from 'react'

const Test = () => {
   const [showName, setName] = useState(false);

    return (
        <div>
            <div>
               <button onClick={() => setName(!showName)} type="button">Show Name</button>
            </div>
            <div>
               {showName && <Fragment><p>ERDO</p></Fragment>}
            </div>
        </div>
    )
}

export default Test
