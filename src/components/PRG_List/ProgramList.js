import ProgramItem from "./ProgramItem";

const ProgramList = () => {
    
    const programs = [
        {
            "id": "pezQRuP6DE2",
            "name": "ZW VMMC Program"
        },
        {
            "id": "Tt0YR2Fe282",
            "name": "CwS - ET - DHS"
        }
    ];

    var programList = programs.map((program) => {
        return(<ProgramItem title={program.name} uid={program.id} key={program.id} /> );
    });

    return (
    <div style={{display: "block", margin: "20px" }}>
        {programList}
    </div>
    )
    
}

export default ProgramList;