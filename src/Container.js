import { useState, useEffect } from 'react';
import ProgramList from './PRG_List/ProgramList';

const programList = [
    {
        "id": "pezQRuP6DE2",
        "name": "ZW VMMC Program"
    },
    {
        "id": "Tt0YR2Fe282",
        "name": "CwS - ET - DHS"
    }
];

const Container = () => {
    // Use a global mainContent
    const [mainContent, setMainContent] = useState(null);

    // First time render: Program Listing (Default - Home)
    useEffect(() => {
        setMainContent(<ProgramList list={programList} setMainContent={setMainContent} />);
    }, []);

    // Renders whatever is on mainContent
    return ( mainContent );

}

export default Container;