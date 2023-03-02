import React, {useState} from "react";

function Training() {
   const [tranings, setTranings] = useState([
        {id: 1, dat: '20.07.2019', km: 5.7},
        {id: 2, dat: '19.07.2019', km: 14.2},
        {id: 3, dat: '18.07.2019', km: 3.4}
    ]);

    const submitChange = (evt) => {
        evt.preventDefault();
    }


    return (
        <div className="contener">
            <ul>
                <li></li>
            </ul>
            <form onSubmit={submitChange}>
              

            </form>

        </div>
    )
}

export default Training;