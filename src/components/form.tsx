import {
    type FormEvent,
    type ComponentPropsWithoutRef,
    useRef,
    useImperativeHandle,
    forwardRef,
  } from 'react';
import { PatientState } from '../App';
  
  export type FormHandle = {
    clear: () => void;
  };
  
  type FormProps = ComponentPropsWithoutRef<'form'> & {
    onSave: (value: PatientState) => void;
  };
  
  const FormComponent = forwardRef<FormHandle, FormProps>(function FormComponent(
    { onSave },
    ref
  ) {
    const form = useRef<HTMLFormElement>(null);
  
    useImperativeHandle(ref, () => {
      return {
        clear() {
          console.log('CLEARING');
          form.current?.reset();
        },
      };
    });
  
    function handleSubmit(event: FormEvent<HTMLFormElement>) {
      event.preventDefault();
  
      const formData = new FormData(event.currentTarget);
      const data = Object.fromEntries(formData) as PatientState;
      onSave(data);
    }
  
    return (
        <div className='container' >
        <h2>Form Component inside Patient Component</h2>
      <form onSubmit={handleSubmit} ref={form}>
      <div className='form-bx' >
<label htmlFor='patient' >Name: </label>
<input type='text' id='patient' name='patient'  />
</div>
<div className='form-bx' >
  <label htmlFor='place' >Place: </label>
<input type='text' id='place' name='place' />
</div>
<div>

<button>Display</button>
</div>
      </form>
      </div>
    );
  });
  
  export default FormComponent;
  