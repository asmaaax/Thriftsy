import React from 'react';

export function userReducer(state, action){
    switch(action.type){
        case 'ADD_USER':
            alert("Success! Click 'Log in' to log in with your details")
            console.log('New user added')
            return {...state, users: [...state.users, action.payload]}
        case 'DEL_USER':
            const newUsersArray = state.users.filter(user => user !== action.payload)
            console.log('user deleted')
            return {...state, users: newUsersArray}
        case 'LOG_IN':
            console.log('checking user details ...')  
            return {...state, logged_in_user: action.payload}    
        case 'LOG_OUT':
            console.log('User logged out')
            return {...state, logged_in_user: ''}
        default:
            console.log('no changes made')
            return state

    }
};

