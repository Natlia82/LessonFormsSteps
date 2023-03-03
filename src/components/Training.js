import React, {useState} from "react";
import { v4 as uuidv4 } from 'uuid';


function Training() {
    const [trainings, setTrainings] = useState([
        {id: uuidv4(), dat: '2019-07-20', passed: 5.7},
        {id: uuidv4(), dat: '2019-07-19', passed: 14.2},
        {id: uuidv4(), dat: '2019-07-18', passed: 3.4}
    ]);
    const [form, setForm] = useState({
        dat: "",
        passed: ""
    });

    const handleFormChange = (evt) => {
        const {name, value} = evt.target;
        setForm((prevForm) => ({...prevForm, [name] : value}));
    }
    const handleSubmit = (evt) => {
         evt.preventDefault();
         const newTraining = {id: uuidv4(), dat: form.dat, passed: form.passed};
         setTrainings((prevTrainings) => [...prevTrainings, newTraining]);
         setForm({dat: "",
                 passed: ""})
    };

    const hangleRemove = (training) => {
        setTrainings(prevTrainings => prevTrainings.filter(o => o.id !== training.id) );
    }

   return (
    <div>
        <form onSubmit={handleSubmit}>
            <div className="title">Дата (дд.мм.гггг.)    Пройдено км</div>
                        
            <input required className="input" type="date" name="dat" value={form.dat} onChange={handleFormChange} />
            <input required className="input" type="text" name="passed" value={form.passed} onChange={handleFormChange} />
            
            <button className="spanLi">ОК</button>
        </form>
        <ul>
            {trainings.sort(function(a, b) {
                if (a.dat > b.dat) {
                    return 1;
                }
                if (a.dat < b.dat) {
                   return -1;
                }
                return 0
            }).map((training) => (
                <li key={training.id}>
                    <span className="spanLi">{training.dat}</span>
                    <span className="spanLi">{training.passed}</span>
                    <button className="spanLi" onClick={() => hangleRemove(training)}>X</button>
                </li>
            ))}
        </ul>
    </div>
   )
}

export default Training;