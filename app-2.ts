import {
  decrementadorAction,
  dividirAction,
  incrementadorAction,
  multiplicarAction,
  resetAction,
} from "./contador/contador.action";
import { contadorReducer } from "./contador/contador.reducer";
import { Action } from "./ngrx-fake/ngrx";

console.log(contadorReducer(10, incrementadorAction));
console.log(contadorReducer(10, decrementadorAction));
console.log(contadorReducer(10, multiplicarAction));
console.log(contadorReducer(10, dividirAction));
console.log(contadorReducer(10, resetAction));
