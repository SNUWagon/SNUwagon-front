import React from 'react'
import { shallow } from 'enzyme'
import SearchCell from '.'

const wrap = (props = {}) => shallow(<SearchCell {...props} />)

it('renders', () => {
  const props = {
    onClick: jest.fn(),
    items: {
      test: 'test',
    },
  }

  wrap(props)
})

