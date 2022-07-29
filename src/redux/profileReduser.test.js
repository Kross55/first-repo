import profileReducer, {addPost} from './profileReduser'

test('posts`s length post should be incremented', () => {
    // 1. start data
    let action = addPost('first unit test')
    let state = {
        posts: [
            { id: 1, message: 'Hi everyone', likes: 13 },
            { id: 2, message: 'Hi, my friends!', likes: 40 },
            { id: 3, message: 'What am i doing here?', likes: 61 },
            { id: 4, message: 'Oops', likes: 17 },
            { id: 5, message: 'Hey', likes: 93 },
        ]
    };
    // 2. action
    let newState = profileReducer(state, action)
    // 3. expactation
    expect(newState.posts.length).toBe(6)
})