import React, { PropTypes } from 'react'
import styled, { css } from 'styled-components'
import ReactModal from 'react-modal'
import { font, palette } from 'styled-theme'
import Button from '../../../components/atoms/BaseButton'

const overlayStyles = css`
  position: fixed;
  background-color: rgba(0, 0, 0, 0.5);
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 9999;
  transition: opacity 250ms ease-in-out;
  opacity: 0;
  &[class*="after-open"] {
    opacity: 1;
  }
  &[class*="before-close"] {
    opacity: 0;
  }
`

const ModalBox = styled(ReactModal)`
  position: absolute;
  display: flex;
  flex-direction: column;
  font-family: ${font('primary')};
  font-size: 1rem;
  background-color: ${palette('grayscale', 0, true)};
  border-radius: 0.125em;
  color: ${palette('grayscale', 0)};
  top: calc(50% - 1rem);
  left: calc(50% - 1rem);
  right: auto;
  bottom: auto;
  margin: 1rem calc(-50% + 1rem) 1rem 1rem;
  transform: translate(-50%, 100%);
  transition: transform 250ms ease-in-out;
  outline: none;
  box-sizing: border-box;
  min-width: 320px;
  max-width: calc(640px - 1rem);
  max-height: calc(100% - 1rem);
  @media screen and (max-width: 640px) {
    width: calc(100% - 1rem);
    min-width: 0;
  }
  &[class*="after-open"] {
    transform: translate(-50%, -50%);
  }
  &[class*="before-close"] {
    transform: translate(-50%, 100%);
  }
`

const Content = styled.div`
  overflow: auto;
  padding: 0 1rem;
  margin-bottom: 1rem;
`

const StyledReactModal = styled(({ className, ...props }) =>
  <ModalBox overlayClassName={className} closeTimeoutMS={250} {...props} />
)`${overlayStyles}`


class BaseModal extends React.Component {
  constructor(props) {
    super(props)
    this.handleOnClick = this.handleOnClick.bind(this)
  }

  handleOnClick() {
    this.props.onClose(this.props.content)
  }

  render() {
    return (
      <StyledReactModal
        isOpen={this.props.modalState}
        contentLabel={'modal'}
        onRequestClose={this.handleCloseModal}
      >
        <Content>
          <p>{this.props.content}</p>
        </Content>
        <Button className={'modal-button'} onClick={this.handleOnClick}>Close</Button>
      </StyledReactModal>
    )
  }
}

BaseModal.propTypes = {
  modalState: PropTypes.any,
  content: PropTypes.string,
  onClose: PropTypes.func,
  reverse: PropTypes.bool,
}

export default BaseModal
