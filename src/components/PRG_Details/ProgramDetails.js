import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";

const ProgramDetails = ({history}) => {
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

    const program = useSelector(state => state.program);
    console.log(program);

    if(!program) return <Redirect to="/"/>

    return ( <div>{JSON.stringify(programs[program])}</div> );
}

export default ProgramDetails;