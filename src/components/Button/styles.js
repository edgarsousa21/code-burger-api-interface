import styled from 'styled-components'

export const ContainerButton = styled.button`
  width: 182.81px;
  height: 36.13px;
  background: #9758a6;
  border-radius: 20px;
  border: none;
  cursor: pointer;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  color: #eeeeee;

  &:hover {
    opacity: 0.8;
    transform: scale3d(1.1, 1.1, 1);
    transition: 0.5s;
  }

  &:active {
    opacity: 0.6;
  }
`
