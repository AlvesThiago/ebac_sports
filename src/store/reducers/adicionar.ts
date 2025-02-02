import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Produto } from '../../App'

type CarrinhoState = {
  carrinho: Produto[]
}

const initialState: CarrinhoState = {
  carrinho: []
}

const carrinhoSlice = createSlice({
  name: 'carrinho',
  initialState,
  reducers: {
    adicionar: (state, action: PayloadAction<Produto>) => {
      const loja = action.payload

      if (state.carrinho.find((p) => p.id === loja.id)) {
        alert('Item já adicionado')
      } else {
        state.carrinho.push(loja)
      }
    }
  }
})

export const { adicionar } = carrinhoSlice.actions
export default carrinhoSlice.reducer
