import React, {Component} from "react";
import ReactDOM from "react-dom";

export default class ListEditor extends Component {
  constructor(props) {
    super(props);

    const items = props.value.map(v => v);
    items.push("");
    const focused = items.length-1
    this.state = { items, focused }
    this.hasFocused = false;
    this.inputRefs = []
  }
  setItems(items) {
    this.inputRefs = items.map(v => React.createRef())
    this.setState({ items });
  }

  componentDidMount() {
    this.refs.container.addEventListener('keydown', this.selectInput);
    this.focus();
  }

  componentWillUnmount() {
    this.refs.container.removeEventListener('keydown', this.selectInput);
  }
  focus(idx) {
    if (idx === undefined) idx = this.inputRefs.length-1
    setTimeout(() => {
      let input = ReactDOM.findDOMNode(this.inputRefs[idx]);
      if (input) {
        input.focus();
      }
    })
  }
  selectInput = (event) => {
    if ([37, 39].indexOf(event.keyCode) > -1) { // left and right
      event.stopPropagation();
    }
    else if (event.keyCode === 38) { //up
      if (this.state.focused > 0) {
        const focused = this.state.focused - 1;
        this.setState({ focused });
        this.focus(focused);
      }
      event.stopPropagation();
    }
    else if ([9, 40].indexOf(event.keyCode) > -1) { //down and tab
      if (this.state.focused < this.state.items.length-1) {
        const focused = this.state.focused + 1;
        this.setState({ focused });
        this.focus(focused);
      }
      event.stopPropagation();
    }
  }

  getValue() {
    return this.state.items.filter(v => v.length > 0)
  }

  isPopup() {
    return true;
  }

  handleLostFocus = (idx) => (evt) => {
    if (this.state.items[idx].length === 0 && idx !== this.state.items.length-1) {
      const items = this.state.items.filter((v, i) => i !== idx)
      this.setItems(items);
    }
  } 
  handleItemChange = (idx) => (evt) => {
    const value = evt.target.value
    const items = this.state.items.map((item, sidx) => {
      if (idx !== sidx) return item;
      return value;
    });

    if (items[items.length-1].length !== 0) {
      items.push("")
    }

    this.setItems(items);
  }

  render() {
    return (
      <div ref="container"
        tabIndex={1} // important - without this the keypresses wont be caught
        style={{width: '500px'}}
      >
        <form onSubmit={this.handleSubmit} style={{padding: '5px', paddingRight: '9px'}}>
          {this.state.items.map((item, idx) => (
            <div key={idx}>
              <input
                type="text"
                placeholder={`Answer #${idx + 1}`}
                value={item}
                onBlur={this.handleLostFocus(idx)}
                onChange={this.handleItemChange(idx)}
                ref={c => this.inputRefs[idx] = c}
                style={{borderRadius: 0, border: '1px solid #BDC3C7', boxShadow: 'none', width: '100%', marginTop: '-1px'}}
              />
            </div>
          ))}
        </form>
      </div>
    );
  }
}
