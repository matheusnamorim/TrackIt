import HabitsStyles from "../../styles/HabitsStyles";


export default function HabitsList({value, Habit}){

    const equal = ((value.currentSequence === value.highestSequence) &&  value.highestSequence !== 0);

    return (
        <> 
            <HabitsStyles done={+value.done} color={+equal}>
                <div>
                <p>{value.name}</p>
                <h1>Sequência atual: <b> {value.currentSequence} dias</b></h1>
                <h1>Seu recorde: <strong>{value.highestSequence} dias</strong></h1>
                </div>
                <span onClick={() => Habit(value.id, value.done)}>
                    <ion-icon name="checkbox"></ion-icon>
                </span>
            </HabitsStyles>
        </>
    );
}

