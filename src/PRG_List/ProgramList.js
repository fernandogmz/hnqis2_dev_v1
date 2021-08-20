import ProgramItem from "./ProgramItem";

const ProgramList = ({list,setMainContent}) => {
    list = list.map((program) => {
        return(<ProgramItem title={program.name} uid={program.id} key={program.id} setMainContent={setMainContent} /> );
    });

    return (
    <div style={{display: "block", margin: "20px" }}>
        {list}
    </div>
    )
    
}

export default ProgramList;