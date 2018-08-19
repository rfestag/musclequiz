import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { muscles } from './data';

import { AgGridReact } from 'ag-grid-react';
import 'ag-grid/dist/styles/ag-grid.css';
import 'ag-grid/dist/styles/ag-theme-balham.css';

class App extends Component {
  constructor(props) {
    super(props);

    let columnDefs = muscles.columns.map(c => ({...c, editable: true, autoHeight: true}))
    let rowData = muscles.items

    this.state = {
      columnDefs,
      rowData
    }
  }
  resetHeights(params) {
    var allColumnIds = [];
    params.columnApi.getAllColumns().forEach(function(column) {
        allColumnIds.push(column.colId);
    });
    params.columnApi.autoSizeColumns(allColumnIds);
    setTimeout(() => params.api.resetRowHeights())
  }

  render() {
    return (
      <div>
        <div
          className="ag-theme-balham"
          style={{width: '100%' }}
	      >
          <AgGridReact
            gridAutoHeight={true}
            onGridReady={this.resetHeights}
            onCellValueChanged={this.resetHeights}
            columnDefs={this.state.columnDefs}
            rowData={this.state.rowData}>
          </AgGridReact>
        </div>
      </div>
    );
  }
}

export default App;
