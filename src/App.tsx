import { useRef, useState } from 'react'
import './App.css'

import FormComponent, { FormHandle } from './components/form'
import PatientComponent from './components/patient'

export type PatientState = {
  patient:string;
  place:string;
}

function App() {

  const [patientData, setPatientData] = useState<PatientState>({patient:"",place:""});
  const form = useRef<FormHandle>(null);

  function clearState() {
    setPatientData({patient:"",place:""})
form.current?.clear()
  }

  return (
    <>
    <h1 className='title' >Patient Information</h1>
     <PatientComponent clearState={clearState} patientData={patientData} >
      <FormComponent ref={form} onSave={(value:PatientState) => setPatientData(value)} />
     </PatientComponent>
    </>
  )
}

export default App
