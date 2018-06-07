import * as actions from './actions'

describe('information actions', () => {
  it('should create an action to write an information post', () => {
    const title = 'title'
    const content = 'content'
    const hiddenExist = true
    const hiddenContent = 'hidden'
    const hiddenContentCost = 10
    const hiddenBought = true
    const due = '0001-01-01T01:01:00Z'
    const author = 'authorname'
    const sponsorCredit = 5
    const tags = 'tag'
    const expectedAction = {
      type: actions.WRITE_INFORMATION_POST,
      title,
      content,
      hiddenExist,
      hiddenContent,
      hiddenContentCost,
      hiddenBought,
      due,
      author,
      sponsorCredit,
      tags,
    }
    expect(actions.writeInformationPost(title, content, hiddenExist, hiddenContent, hiddenContentCost, hiddenBought, due, author, sponsorCredit, tags)).toEqual(expectedAction)
  })

  it('should create an action to get an information post', () => {
    const postId = 1
    const expectedAction = {
      type: actions.GET_INFORMATION_POST,
      postId,
    }
    expect(actions.getInformationPost(postId)).toEqual(expectedAction)
  })

  it('should create an action to update an information post', () => {
    const postId = 1
    const title = 'title'
    const content = 'content'
    const hiddenExist = true
    const hiddenContent = 'hidden'
    const hiddenContentCost = 10
    const hiddenBought = true
    const due = '0001-01-01T01:01:00Z'
    const author = 'authorname'
    const tags = 'tag'
    const expectedAction = {
      type: actions.UPDATE_INFORMATION_POST,
      postId,
      title,
      content,
      hiddenExist,
      hiddenContent,
      hiddenContentCost,
      hiddenBought,
      due,
      author,
      tags,
    }
    expect(actions.updateInformationPost(postId, title, content, hiddenExist, hiddenContent, hiddenContentCost, hiddenBought, due, author, tags)).toEqual(expectedAction)
  })

  it('should create an action to change route', () => {
    const route = '/'
    const expectedAction = {
      type: actions.CHANGE_ROUTE,
      route,
    }
    expect(actions.changeRoute(route)).toEqual(expectedAction)
  })

  it('should create an action to purchase an information post', () => {
    const postId = 1
    const expectedAction = {
      type: actions.PURCHASE_INFORMATION_POST,
      postId,
    }
    expect(actions.purchaseInformationPost(postId)).toEqual(expectedAction)
  })

  it('should create an action to get vote', () => {
    const postId = 1
    const expectedAction = {
      type: actions.GET_VOTE,
      postId,
    }
    expect(actions.getVote(postId)).toEqual(expectedAction)
  })

  it('should create an action to update vote', () => {
    const upVote = 1
    const downVote = 2
    const expectedAction = {
      type: actions.UPDATE_VOTE,
      upVote,
      downVote,
    }
    expect(actions.updateVote(upVote, downVote)).toEqual(expectedAction)
  })

  it('should create an action to post vote', () => {
    const postId = 1
    const voteType = 'upvote'
    const expectedAction = {
      type: actions.POST_VOTE,
      postId,
      voteType,
    }
    expect(actions.postVote(postId, voteType)).toEqual(expectedAction)
  })
})
