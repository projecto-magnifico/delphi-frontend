import React from 'react';
import './css/ThreadCard.css'

class ThreadCard extends React.Component {
  render() {
    return (
      <div className='threadCard'>
        <div class="uk-card uk-card-body uk-card large uk-card-hover">
          <h3 class="uk-card-title">HEADLINE</h3>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
          <div id="threadPoints">
            <ul>
              <li>Question 1</li>
              <li>Question 2</li>
              <li>Question 3</li>
            </ul>
          </div>
          <button class="uk-button uk-button-default uk-width-1-1 uk-margin-small-bottom">Read More...</button>
        </div>
      </div>
    )
  }
}

export default ThreadCard;
