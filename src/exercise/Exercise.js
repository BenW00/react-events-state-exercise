import { useState } from 'react';

function Exercise() {

    const [num, setNum] = useState(1);

    const addNum = () => setNum(num + 1);

    return (
        <section id="Exercise">
            <button onClick={() => alert(`Congrats! You have clicked the button.`)}>CLICK HERE</button>
            <button onClick={addNum}>STATE</button>
            <h1>{num}</h1>
        </section>
    );
}

export default Exercise;
