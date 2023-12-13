import EditIcon from '@mui/icons-material/Edit'
import styled from 'styled-components'

export const Container = styled.div``

export const Img = styled.img`
  width: 70px;
  height: 70px;
  border-radius: 5px;
`
export const EditIconStyles = styled(EditIcon)`
  cursor: pointer;
  color: #323050;

  &:hover {
    opacity: 0.8;
    transform: scale3d(1.1, 1.1, 1);
  }

  &:active {
    opacity: 0.6;
  }
`
