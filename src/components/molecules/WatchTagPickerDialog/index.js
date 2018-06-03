import React, { PropTypes } from 'react'
import Dialog from 'material-ui/Dialog'
import FlatButton from 'material-ui/FlatButton'
import TagSelector from '../../../components/molecules/TagSelector'

const style = {
  width: '60%',
  textAlign: 'center',
}

const WatchTagPickerDialog = ({ open, tagList, watchTagList, onClick, onClose }) => {
  let watchTags = []

  const onTagUpdate = (tags) => {
    watchTags = tags.slice()
  }

  const onSubmit = () => {
    onClick(watchTags)
    onClose()
  }

  const actions = [
    <FlatButton
      className={'close-button'}
      label={'Cancel'}
      onClick={onClose}
    />,
    <FlatButton
      className={'submit-button'}
      label={'Submit'}
      onClick={onSubmit}
    />,
  ]

  return (
    <Dialog
      contentStyle={style}
      title={'Tag Notification'}
      actions={actions}
      modal
      open={open}
    >
      <TagSelector
        className={'tag-selector'}
        tagList={tagList}
        haveDefaultTagList
        hintText={'#301 #컴공 #소개원실'}
        defaultTagList={watchTagList}
        onUpdate={onTagUpdate}
      />
    </Dialog>
  )
}

WatchTagPickerDialog.propTypes = {
  open: PropTypes.bool,
  tagList: PropTypes.array,
  watchTagList: PropTypes.array,
  onClick: PropTypes.func,
  onClose: PropTypes.func,
}

export default WatchTagPickerDialog
