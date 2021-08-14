import { useDataQuery } from '@dhis2/app-runtime';


const Home = () => {
    
    const query = {
        programs: {
            resource: 'programs.json',
            params: {
                //order: 'shortName:desc',
                pageSize: 10,
            },
        },
    }
    const { loading, error, data } = useDataQuery(query);
    console.log(data);
    console.log(error);
    console.log(loading);

    return (
    <div>
        {loading && <p>Loading</p>}
        {error && <p>error</p>}
    </div>
    )
    
}

export default Home;