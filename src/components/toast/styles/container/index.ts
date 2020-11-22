import styled, { css, keyframes } from 'styled-components'

import { Position } from '../../typings'

interface Props {
  position?: Position
}

const toastInLeft = keyframes`
  from {
		transform: translateX(-100%);

	}
	to {
		transform: translateX(0);
	}
`

const toastInRight = keyframes`
  from {
	  transform: translateX(100%);

	}
	to {
	  transform: translateX(0);
	}
`

export const Container = styled.div<Props>`
  font-size: 14px;
  box-sizing: border-box;
  position: fixed;
  z-index: 999999;

  &.top-right,
  .top-right {
    top: 12px;
    right: 12px;
    transition: transform 0.6s ease-in-out;
    animation: ${toastInRight} 0.7s;
  }

  &.bottom-right,
  .bottom-right {
    bottom: 12px;
    right: 12px;
    transition: transform 0.6s ease-in-out;
    animation: ${toastInRight} 0.7s;
  }

  &.top-left,
  .top-left {
    top: 12px;
    left: 12px;
    transition: transform 0.6s ease-in;
    animation: ${toastInLeft} 0.7s;
  }

  &.bottom-left,
  .bottom-left {
    bottom: 12px;
    left: 12px;
    transition: transform 0.6s ease-in;
    animation: ${toastInLeft} 0.7s;
  }
`
