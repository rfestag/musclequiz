import React, { Component } from 'react';
import './App.css';
import { muscles } from './data';

import { AgGridReact } from 'ag-grid-react';
import 'ag-grid/dist/styles/ag-grid.css';
import 'ag-grid/dist/styles/ag-theme-balham.css';

import { Button, Form, FormGroup } from 'reactstrap';
import Select from 'react-select'
import _ from 'lodash';
import FuzzySet from 'fuzzyset';

const styleEditable = (params) => {
  if (params.colDef.editable) {
    return {fontWeight: 600}
  }

  return null
}
const tokenize = (str) => {
  return _.chain(str.split(/\s+/))
          .map(t => t.toLowerCase())
          .reject(t => ['', 'of', 'and', 'the', 'at', 'through'].includes(t))
          .join(' ')
          .value()
}
const normalize = (items) => {
  return items.map(item => {
    return _.reduce(item, (item, v, k) => {
      item[k] = _.isArray(v) ? v.map(d => tokenize(d)) : [tokenize(v)]
      return item
    }, {})
  })
}
const createFuzzySet = (values) => {
  return new FuzzySet(values, true)
  /*return values.reduce((set, v) => {
    set.add(v);
    return set;
  }, new FuzzySet())
  */
}
const createAnswerKey = (items) => {
  const normalized = normalize(items);
  return normalized.map(item => {
    return _.reduce(item, (item, v, k) => {
      item[k] = createFuzzySet(v)
      return item;
    }, {})
  })
}
class App extends Component {
  constructor(props) {
    super(props);

    let columnDefs = muscles.columns.map(c => ({...c, autoHeight: true, cellStyle: styleEditable}))
    let rowData = JSON.parse(JSON.stringify(muscles.items)) //Deep clone
    this.answerKey = createAnswerKey(muscles.items)

    let types = [
      { value: 'columns', label: "Hide Columns" },
      { value: 'random', label: "Hide Random Entries" }
    ]
    let columnOptions = columnDefs.map(({field, headerName}) => ({value: field, label: headerName}))

    let type = types[0]
    let hiddenColumns = []
    let inQuiz = false

    this.state = {
      columnDefs,
      columnOptions,
      hiddenColumns,
      inQuiz,
      rowData,
      types,
      type
    }
  }
  setType = (type) => {
    this.setState({ type })
  }
  setHiddenColumns = (hiddenColumns) => {
    this.setState({ hiddenColumns });
  }
  resetData = () => {
    let columnDefs = muscles.columns.map(c => {
      const idx = this.state.hiddenColumns.findIndex(({value}) => value === c.field)
      if (idx >= 0) return {...c, editable: true, autoHeight: true, cellStyle: styleEditable}
      else return {...c, autoHeight: true, cellStyle: styleEditable}
    })
    let rowData = JSON.parse(JSON.stringify(muscles.items)) //Deep clone
    if (this.state.type.value === 'columns') {
      const fields = this.state.hiddenColumns.map(({value}) => value)
      rowData = rowData.map(d => {
        return fields.reduce((d, field) => {
          if (_.isArray(d[field])) d[field] = []
          else d[field] = ""
          return d
        }, d)
      })
    }
    else if (this.state.type.value === 'random') {
      console.log("TODO: Hide random cells")
    }
    else {
      return
    }
    //Do action
    //rowData = _.shuffle(rowData);
    this.setState({ rowData, columnDefs, inQuiz: true })
  }
  resetHeights(params) {
    var allColumnIds = [];
    params.columnApi.getAllColumns().forEach(function(column) {
        allColumnIds.push(column.colId);
    });
    params.columnApi.autoSizeColumns(allColumnIds);
    setTimeout(() => params.api.resetRowHeights())
  }
  validate = () => {
    const columnDefs = muscles.columns.map(c => ({...c, autoHeight: true, cellStyle: styleEditable}))
    const answers = normalize(this.state.rowData)
    const results = answers.map((row, i) => {
      const correctRow = this.answerKey[i]
      const newRow = _.reduce(row, (item, v, field) => {
        const correctAnswer = correctRow[field]
        const noMatch = [] //Each answer provided by user that did not match
        const foundAnswers = [] //each correct answer that did match a user answer
        _.each(v, (answer, i) => {
          const retval = {answer}
          const match = correctAnswer.get(answer, null, 0.8);
          if (match && match[0][0] > 0.7) {
            retval.matchedAnswer = match[0]
            foundAnswers.push(retval)
          }
          else {
            retval.noMatch = true
            noMatch.push(retval)
          }
          return results
        })
        const missedAnswers = _.difference(correctAnswer.values(), foundAnswers.map(v => v.matchedAnswer[1])).map(answer => ({answer}))
        item[field] = foundAnswers.concat(noMatch, missedAnswers)
        return item
      }, {})
      return newRow
    })
    this.setState({ rowData: results, columnDefs, inQuiz: false })
  }

  render() {
    return (
      <div style={{display: 'flex', flexDirection: 'column', height: '100vh'}}>
        <Form inline>
          <FormGroup className="mb-2 mr-sm-2 mb-sm-0" style={{padding: '10px', paddingRight: 0}}>
            <div style={{display: 'block', width: '200px'}}>
              <Select options={this.state.types} value={this.state.type} onChange={this.setType}/>
            </div>
          </FormGroup>
          { this.state.type.value === 'columns' && 
            (
              <FormGroup className="mb-2 mr-sm-2 mb-sm-0" style={{padding: '10px'}}>
                <div style={{display: 'block', width: '600px'}}>
                  <Select options={this.state.columnOptions} value={this.state.hiddenColumns} onChange={this.setHiddenColumns} isMulti={true} placeholder="Select Columns To Hide..."/>
                </div>
              </FormGroup>
            )
          }
          { !this.state.inQuiz && (<Button onClick={this.resetData}>Start</Button>) }
          { this.state.inQuiz && (<Button onClick={this.validate}>Validate</Button>) }
        </Form>
        <div
          className="ag-theme-balham"
          style={{width: '100%', flex: 1 }}
	      >
          <AgGridReact
            onGridReady={this.resetHeights}
            onCellValueChanged={this.resetHeights}
            onNewColumnsLoaded={this.resetHeights}
            columnDefs={this.state.columnDefs}
            rowData={this.state.rowData}>
          </AgGridReact>
        </div>
      </div>
    );
  }
}

export default App;
