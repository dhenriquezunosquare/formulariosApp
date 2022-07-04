import { FormControl } from '@angular/forms';
export const nombreApellidoPattern: string = '([a-zA-Z]+) ([a-zA-Z]+)';


export const noPuedeSerStrider=(control:FormControl)=>{
    const valor = control.value?.trim().toLowerCase();
    if(valor==='strider'){
      return {
        noStrider:true
      }
    }
    return null;
}