import React, { PropTypes } from 'react'
import Divider from 'material-ui/Divider'
import Chip from 'material-ui/Chip'
import AutoComplete from 'material-ui/AutoComplete'
import * as colors from 'material-ui/styles/colors'

const styles = {
  chipsDiv: {
    width: '90%',
    display: 'flex',
  },
  chip: {
    margin: 10,
    labelColor: colors.amber400,
  },
  label: {
    fontSize: 16,
  },
}

class TagSelector extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      input: '',
      tags: props.haveDefaultTagList ? props.defaultTagList : [],
    }

    this.maxTags = 5
    this.hintText = props.hintText || `set tags(#), maximum ${this.maxTags} tags are available`

    this.updateInput = this.updateInput.bind(this)
    this.saveInput = this.saveInput.bind(this)
    this.resetInput = this.resetInput.bind(this)
  }

  componentDidUpdate(prevProps, prevState) {
    this.props.onUpdate(this.state.tags)
  }

  updateInput = (value) => {
    if (value.endsWith(' ')) {
      this.setState({ input: value.slice(0, value.length - 1) })
      this.saveInput()
      this.resetInput()
    } else {
      this.setState({ input: value })
    }
  }

  saveInput() {
    let tag = this.state.input
    if (tag.startsWith('#')) {
      tag = tag.slice(1, tag.length)
    }

    if (tag.length < 1) return
    if (this.state.tags.includes(tag)) return

    this.setState({
      tags:
      [
        ...this.state.tags.slice(Math.max(0, this.state.tags.length - (this.maxTags - 1)), this.state.tags.length),
        tag,
      ],
    })
  }

  resetInput() {
    this.setState({ input: '' })
  }

  deleteTag(tag) {
    const tagIdx = this.state.tags.indexOf(tag)
    const len = this.state.tags.length

    this.setState({ tags: [...this.state.tags.slice(0, tagIdx), ...this.state.tags.slice(tagIdx + 1, len)] })
  }

  render() {
    return (
      <div>
        <div style={styles.chipsDiv}>
          { this.state.tags.map((tag) => (
            <Chip
              key={tag}
              className={'tag-chip'}
              style={styles.chip}
              labelStyle={styles.label}
              onRequestDelete={() => { this.deleteTag(tag) }}
            >
              <span style={{ color: colors.amber800 }}>#</span>
              <span style={{ color: colors.grey600 }}>{tag}</span>
            </Chip>
          ))}
        </div>
        <AutoComplete
          fullWidth
          className={'tag-input'}
          hintText={this.hintText}
          dataSource={this.props.tagList}
          onUpdateInput={this.updateInput}
          onNewRequest={this.resetInput}
          searchText={this.state.input}
          maxSearchResults={5}
          onClose={this.saveInput}
        />
        <Divider />
      </div>
    )
  }
}

TagSelector.propTypes = {
  tagList: PropTypes.array,
  haveDefaultTagList: PropTypes.bool,
  hintText: PropTypes.string,
  defaultTagList: PropTypes.array,
  onUpdate: PropTypes.func,
}

export default TagSelector
