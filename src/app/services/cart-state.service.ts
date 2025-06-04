import { Injectable } from "@angular/core";
import { signalSlice } from "ngxtension/signal-slice";


interface State{
    products:[],
    loaded: boolean
}

@Injectable({
    providedIn:'root'
})

export class CartStateService{
    private initialState : State = {
        products: [],
        loaded: false
    }

    loadProducts:
    state = signalSlice({
        initialState: this.initialState
    })
}