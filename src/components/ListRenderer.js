import React, { Component } from 'react';
import _ from 'lodash';

const answerStyle = (answer) => {
  if (_.isString(answer)) return {}
  if (answer.noMatch) {
    return {textDecoration: 'line-through solid red'}
  }
  else if (answer.matchedAnswer) {
    console.log(answer.matchedAnswer)
    //TODO: Set color based on how right it is
    if (answer.matchedAnswer[0] === 1) return {}
    return {color: answer.matchedAnswer[0] > 0.9 ? 'green' : 'blue'}
  }
  else {
    return {textDecoration: 'underline wavy red'}
  }
}
const title = (answer) => {
  if (_.isString(answer)) return undefined
  if (answer.matchedAnswer && answer.matchedAnswer[0] !== 1) {
    return `${answer.matchedAnswer[1]} (${(answer.matchedAnswer[0]*100).toFixed(2)}%)`
  }
}
export default class ListRenderer extends Component {
  render() {
    return (
      <div>
        { this.props.value && this.props.value.map((v, i) => (
          <div key={i} style={{display: 'flex'}} >
            <span style={{verticalAlign: 'top', marginRight: '5px', float: 'left'}}>{i+1}.</span>
            <span className="item" style={{flex:1, verticalAlign: 'top', ...answerStyle(v)}} title={title(v)}>{_.isObject(v) ? v.answer : v}</span>
          </div>))
        }
      </div>
    )
  }
}
