import React, { Component } from 'react';

export default class ListRenderer extends React.Component {
  render() {
    return (
      <div style={{lineHeight: '18px'}}>
        {this.props.value.map((v, i) => (
          <div key={i} style={{display: 'flex'}}>
            <span style={{verticalAlign: 'top', marginRight: '5px', float: 'left'}}>{i+1}.</span>
            <span className="item" style={{flex:1, verticalAlign: 'top'}}>{v}</span>
          </div>))
        }
      </div>
    )
  }
}
