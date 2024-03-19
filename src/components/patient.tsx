import { ReactNode } from 'react'
import { PatientState } from '../App';


type PatientProps= {
    patientData : PatientState ;
    children:ReactNode,
    clearState:() =>void
}

function PatientComponent({children,patientData,clearState}:PatientProps) {

  return (
    <div className='container'>
<h2>Patient Component</h2>
<h4>Name: <span>{patientData?.patient}</span> </h4>
<h4>Place: <span>{patientData?.place}</span> </h4>
<button onClick={clearState} >Clear</button>
{children}
    </div>
  )
}

export default PatientComponent