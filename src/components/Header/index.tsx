import * as S from './styles'

import cesta from '../../assets/cesta.png'
import { paraReal } from '../Produto'

import { useSelector } from 'react-redux'
import { RootState } from '../../store'

const Header = () => {
  const favoritos = useSelector((state: RootState) => state.favoritar.favoritos)
  const produto = useSelector((state: RootState) => state.carrinho.carrinho)

  const valorTotal = produto.reduce((acc, item) => {
    acc += item.preco
    return acc
  }, 0)

  return (
    <S.Header>
      <h1>EBAC Sports</h1>
      <div>
        <span>{favoritos.length} favoritos</span>
        <img src={cesta} />
        <span>
          {produto.length} itens, valor total: {paraReal(valorTotal)}
        </span>
      </div>
    </S.Header>
  )
}

export default Header
