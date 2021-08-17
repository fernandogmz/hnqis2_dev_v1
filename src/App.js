import './App.css';
import Navbar from './Navbar';
import ProgramListing from './ProgramListing';

const appConfig = {
  baseUrl: 'http://localhost:3020/https://play.dhis2.org/dev',
  apiVersion: 33,
}

const programList = [
  {
    "id": "SAuAGeeWGIW",
    "displayName": "(NOT IN USE) KE HNQIS Tuberculosis"
  },
  {
    "id": "Iu0vZhB1Dlk",
    "displayName": "(NOT IN USE) KH Medical Abortion"
  },
  {
    "id": "miWVdYsFioJ",
    "displayName": "(NOT IN USE) NG HNQIS Cervical Cancer v2"
  },
  {
    "id": "pgYfyV0plx1",
    "displayName": "(NOT IN USE) NG HNQIS Family Planning v2"
  },
  {
    "id": "KxRH7Lh3ZZ1",
    "displayName": "(NOT IN USE) NG HNQIS HIV SIMS v2"
  },
  {
    "id": "flmbmo4b4Dh",
    "displayName": "(NOT IN USE) NG HNQIS Hypertension v2"
  },
  {
    "id": "wvu5KTGbiLA",
    "displayName": "(NOT IN USE) NG HNQIS IMCI v2"
  },
  {
    "id": "apaiA1EKbR5",
    "displayName": "(NOT IN USE) NG HNQIS Malaria v2"
  },
  {
    "id": "BJZ0124I3HJ",
    "displayName": "(NOT IN USE) NG HNQIS Maternal and Newborn Health v2"
  },
  {
    "id": "LhXeALRL6bd",
    "displayName": "(NOT IN USE) NG HNQIS Newborn Resuscitation v2"
  }
];

const App = () => {
  return (
    <>
    <Navbar/>
    <ProgramListing list={programList} />
    </>
  );
}

export default App;
