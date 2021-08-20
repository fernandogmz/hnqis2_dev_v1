import ProgramDetails from '../PRG_Details/ProgramDetails';
import './ProgramItem.css';

// https://clone.psi-mis.org/api/29/programs/pezQRuP6DE2.json?fields=id,name,programStages[id,name]
const programs = {
    "pezQRuP6DE2": {
        "name": "ZW VMMC Program",
        "id": "pezQRuP6DE2",
        "programStages": [
            {
                "name": "Redeem / Procedure",
                "id": "kl3LXy6fj9J"
            },
            {
                "name": "Incoming Messages",
                "id": "Pv0wXiEcPLA"
            },
            {
                "name": "Providers´ visit",
                "id": "crEQbjpo20K"
            }
        ]
    },
    "Tt0YR2Fe282": {
        "name": "CwS - ET - DHS",
        "id": "Tt0YR2Fe282",
        "programStages": [
            {
                "name": "CwS - ET - Self Counselling",
                "id": "EIAO30FwhY9"
            },
            {
                "name": "CwS - ET - Self Referral",
                "id": "lT7pIodxISb"
            },
            {
                "name": "CwS - ET - Service Provision",
                "id": "mlMN6VhIbb1"
            },
            {
                "name": "CwS - ET - Reminders",
                "id": "G2bq8Rkvuq4"
            }
        ]
    }
};

const ProgramItem = ({ title, uid, setMainContent }) => {

    const goToProgramDetails = (programId) => {
        // vvv Use Query HERE vvv
        const programData = programs[programId];

        //Change container data [HTML]
        setMainContent(<ProgramDetails programData={programData}  setMainContent={setMainContent} />);
    };


    return (
        <div class="programItem">
            <div class="title">
                <h4>{title}</h4>
            </div>
            <div class="uid">
                <h4>{uid}</h4>
            </div>
            <div class="action">
                <button data-key={uid} onClick={() => goToProgramDetails(uid)}>View details</button>
            </div>

        </div>
    )
}

export default ProgramItem;