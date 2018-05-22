import React, { PropTypes } from 'react'
import AutoComplete from 'material-ui/AutoComplete'
import Button from '../../atoms/BaseButton'

const SearchInput = ({ titleSearch, tagSearch, tagList, searched }) => {
  let searchQuery = ''

  const updateQuery = (value) => {
    searchQuery = value
  }

  const onClickSearch = () => {
    if (searchQuery.length > 0) {
      searched()

      if (searchQuery.startsWith('#')) {
        tagSearch(searchQuery)
      } else {
        titleSearch(searchQuery)
      }
    }
  }

  const isQueryTag = (searchText, key) => {
    let ret
    if (!searchQuery.startsWith('#')) {
      ret = false
    } else {
      ret = key.indexOf(searchText) !== -1
    }

    return ret
  }

  return (
    <div>
      <AutoComplete
        className={'search-input'}
        hintText={'search title or tag(#)'}
        dataSource={tagList}
        onUpdateInput={updateQuery}
        maxSearchResults={5}
        filter={isQueryTag}
      />
      {' '}
      <Button className={'search-button'} onClick={onClickSearch}>Search</Button>
    </div>
  )
}

SearchInput.propTypes = {
  titleSearch: PropTypes.func,
  tagSearch: PropTypes.func,
  tagList: PropTypes.array,
  searched: PropTypes.func,
}

export default SearchInput
