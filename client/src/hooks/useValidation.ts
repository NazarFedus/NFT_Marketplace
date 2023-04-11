export function useValidation(){

     function validate(address: string){
          return /^0x[a-fA-F0-9]{40}$/.test(address);
     }

     return {validate}
}