import React, {useState} from "react";

function Training() {
    const [trainings, setTrainings] = useState([
        {id: 1, dat: '20.07.2019', passed: 5.7},
        {id: 1, dat: '19.07.2019', passed: 14.2},
        {id: 1, dat: '18.07.2019', passed: 3.4}
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
         const newTraining = {id: 3, dat: form.dat, passed: form.passed};
         setTrainings((prevTrainings) => [...prevTrainings, newTraining]);
         setForm({name: ""})
    };

    const hangleRemove = (training) => {
        setTrainings(prevTrainings => prevTrainings.filter(o => o.id !== training.id) );
    }

   return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type="text" name="dat" value={form.dat} onChange={handleFormChange} />
            <input type="text" name="passed" value={form.passed} onChange={handleFormChange} />
            <button>Добавить</button>
        </form>
        <ul>
            {trainings.map((training) => (
                <li key={training.id}>
                    <span>{training.dat}</span>
                    <span>{training.passed}</span>
                    <button onClick={() => hangleRemove(training)}>удалить</button>
                </li>
            ))}
        </ul>
    </div>
   )
}

export default Training;