import './ProgramItem.css';

const ProgramItem = (props) => {

    const programDetails = (programId) => {
        alert(`Program is: ${programId}`);
    };


    return (
        <div class="programItem">
            <div class="title">
                <h4>{props.title}</h4>
            </div>
            <div class="uid">
                <h4>{props.uid}</h4>
            </div>
            <div class="action">
                <button data-key={props.uid} onClick={() => programDetails(props.uid)}>View details</button>
            </div>
            
        </div>
    )
}

export default ProgramItem;