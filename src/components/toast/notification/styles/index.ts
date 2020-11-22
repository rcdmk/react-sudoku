import styled, { css } from 'styled-components'

import { Position, Type } from '../../typings'

interface Props {
  position?: Position
  type?: Type
}

const typeColor: Record<Type, string> = {
  danger: '#d9534f',
  info: '#5bc0de',
  success: '#5cb85c',
  warning: '#f0ad4e',
}

export const Container = styled.div<Props>`
  ${({ theme, type }) => css`
    background: ${type ? typeColor[type] : '#fff'};
    border-radius: 4px;
    box-shadow: 0 0 10px #999;
    color: ${theme.colors.white};
    margin-bottom: 10px;
    max-height: 100px;
    opacity: 0.9;
    overflow: hidden;
    padding: 15px 15px 15px 10px;
    position: relative;
    transition: ${theme.transition};
    width: 365px;

    &:hover {
      box-shadow: 0 0 12px ${theme.colors.white};
      cursor: pointer;
      opacity: 1;
    }
  `}
`

export const Button = styled.button`
  ${({ theme }) => css`
    border: none;
    background: transparent;
    color: ${theme.colors.white};
    cursor: pointer;
    float: right;
    font-size: 16px;
    font-weight: 700;
    line-height: 1;
    opacity: 0.8;
    outline: none;
    padding: 0;
    position: relative;
    right: -0.3em;
    text-shadow: 0 1px 0 ${theme.colors.white};
    top: -0.3em;
  `}
`

export const Image = styled.div`
  float: left;
  margin-right: 15px;

  img {
    height: 30px;
    width: 30px;
  }
`

export const Message = styled.p`
  margin: 0 0 0 -1px;
  overflow: hidden;
  text-align: left;
  text-overflow: ellipsis;
  white-space: nowrap;
`

export const Title = styled.p`
  font-weight: 700;
  font-size: 16px;
  text-align: left;
  margin-top: 0;
  margin-bottom: 6px;
  width: 300px;
`
