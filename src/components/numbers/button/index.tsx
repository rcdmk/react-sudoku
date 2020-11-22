import React, { FC } from 'react'

import { Button } from 'components'
import { NUMBERS } from 'typings'

interface Props {
  value: NUMBERS
}

const NumberButton: FC<Props> = ({ value }) => {
  const fill = () => {
    console.log('fill', value)
  }

  return <Button onClick={fill}>{value}</Button>
}

export default NumberButton
