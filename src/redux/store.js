import React from 'react';


export const state = {
    logged_in_user: '',
    users: [

    {userName: 'Ada', passWord: 'abcd', userEmail: 'ada@hotmail.com'},
    {userName: 'Asa', passWord: '1234', userEmail: 'asa@hotmail.com'},
    {userName: 'Test', passWord: 'test', userEmail: 'test@hotmail.com'}
    ],
    items: [
        {'userName': 'Ada', 
        'title': 'Food Parcel', 
        'description': 'Food parcel for family, available for collection from nearby community centre or delivery to home address', 
        'location': 'SA61 1BB', 
        'category': 'Food', 
        'URI': require('../../assets/card1.jpeg')},
        {'userName': 'Asa', 
        'title': 'Short Home Stay', 
        'description': 'Double bedroom to rent for free for a weekend in the Hackney area. Click view now to enquire about accomodation.', 
        'location': 'SA31 2AF', 
        'category': 'Accommodation', 
        'URI': require('../../assets/card2.jpeg')},
        {'userName': 'Ada', 
        'title': 'Trainers', 
        'description': 'Size 6 junior boys black trainers. Like new condition, available for collection or delivery.', 
        'location': 'SA31 2AU', 
        'category': 'Clothing', 
        'URI': require('../../assets/card3.jpeg')},
        {'userName': 'Ada', 
        'title': 'Sanitary', 
        'description': 'Sanitary parcel for one person ready for collection or delivery.', 
        'location': 'SA61 1BB', 
        'category': 'Sanitary', 
        'URI': require('../../assets/card4.jpeg')}
    ],
    image_uri: null,
    avatar: ''

}
