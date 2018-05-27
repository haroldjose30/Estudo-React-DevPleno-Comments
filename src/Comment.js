import React, { Component } from 'react'

const Comment = props => 
                            <div className='card'>
                                <p className='card-body'>{props.comment.comment}</p>
                            </div>

export default Comment


