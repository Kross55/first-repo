import profileReducer, {addPost, deletePost} from './profileReduser'

let state = {
    posts: [
        { id: 1, message: 'Hi everyone', likes: 13 },
        { id: 2, message: 'Hi, my friends!', likes: 40 },
        { id: 3, message: 'What am i doing here?', likes: 61 },
        { id: 4, message: 'Oops', likes: 17 },
        { id: 5, message: 'Hey', likes: 93 },
    ]
};

test('posts`s length should be incremented', () => {
    let action = addPost('first unit test')
    let newState = profileReducer(state, action)
    expect(newState.posts.length).toBe(6)
})

test('post`s message should be correct', () => {
    let action = addPost('second unit test')
    let newState = profileReducer(state, action) 
    expect(newState.posts[5].message).toBe('second unit test')
})

test('post`s message should be correct', () => {
    let action = addPost('second unit test')
    let newState = profileReducer(state, action)
    expect(newState.posts[5].likes).toBe(0)
})

test('posts`s length should be decremented', () => {// ttd - test driver development
    let action = deletePost(1)//postId = 1
    let newState = profileReducer(state, action)
    expect(newState.posts.length).toBe(4)
})

test('length shouldn`t be decremented if id is incorrect', () => {// ttd - test driver development
    let action = deletePost(1000)//postId = 1
    let newState = profileReducer(state, action)
    expect(newState.posts.length).toBe(5)
})