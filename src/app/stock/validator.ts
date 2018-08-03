import { FormArray } from '../../../node_modules/@angular/forms';

export function categoryValidator(control: FormArray): any{
  let valid = false;
  control.controls.forEach(control => {
    if(control.value == true){
      valid = true;
    }
  })
  if(valid){
    return null;
  }else{
    return {categoriesLength:true};
  }
}