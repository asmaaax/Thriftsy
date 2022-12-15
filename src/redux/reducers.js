import React from 'react';

export function userReducer(state, action){
    switch(action.type){
        case 'ADD_USER':
            alert("Success! Click 'Log in' to log in with your details")
            console.log('New user added')
            return {...state, users: [...state.users, action.payload]}
        case 'DEL_USER':
            const newUsersArray = state.users.filter(user => user.userName !== action.payload.userName)
            console.log('user deleted')
            return {...state, users: newUsersArray}
        case 'LOG_IN':
            console.log('checking user details ...')  
            return {...state, logged_in_user: action.payload}    
        case 'LOG_OUT':
            console.log('User logged out')
            return {...state, logged_in_user: ''}
        case 'ADD_ITEM':
            console.log('Adding item...')
            return {...state, items: [...state.items, action.payload], image_uri: null}
        case 'RESET_PASSWORD':
            console.log('Reseting password...')
            const user = state.users.filter(item => item.userEmail === action.payload.userEmail)
            user[0].passWord = action.payload.passWord
            return state
        case 'ADD_IMAGE':
            console.log('Adding image URI...')
            return {...state, image_uri: action.payload}
        default:
            console.log('no changes made')
            return state

    }
};

