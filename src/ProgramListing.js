import ProgramItem from "./ProgramItem";
const ProgramListing = (props) => {

    let list = []
    list = props.list.map((program) => {
        return(<ProgramItem title={program.displayName} uid={program.id} key={program.id}/> );
    });

    return (
    <div style={{display: "block", margin: "20px" }}>
        {list}
    </div>
    )
    
}

export default ProgramListing;