import React from 'react'
import { storiesOf, action } from '@kadira/storybook'
import { BaseModal } from 'components'

storiesOf('BaseModal', module)
  .add('default', () => (
    <BaseModal onClose={action('closed')} isOpen>
      Ullamco et reprehenderit magna cillum ullamco consectetur et enim aliqua.
    </BaseModal>
  ))
  .add('with title', () => (
    <BaseModal onClose={action('closed')} title="Hello" isOpen>
      Ullamco et reprehenderit magna cillum ullamco consectetur et enim aliqua.
    </BaseModal>
  ))
  .add('closeable', () => (
    <BaseModal onClose={action('closed')} closeable isOpen>
      Ullamco et reprehenderit magna cillum ullamco consectetur et enim aliqua.
    </BaseModal>
  ))
  .add('reverse', () => (
    <BaseModal onClose={action('closed')} reverse isOpen>
      Ullamco et reprehenderit magna cillum ullamco consectetur et enim aliqua.
    </BaseModal>
  ))
