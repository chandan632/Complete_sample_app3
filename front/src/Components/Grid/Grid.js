import React, { Component } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-enterprise";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";
import Button from "./Button";

class Grid extends Component {
  constructor(props) {
    super(props);

    this.state = {
      deleteId: "",
      editedId: "",
      columnDefs: [
        {
          headerName: "Fullname",
          children: [
            {
              field: "firstname",
              filter: "agTextColumnFilter",
              minWidth: 150,
            },
            {
              field: "lastname",
              filter: "agTextColumnFilter",
              minWidth: 150,
            },
          ],
        },
        {
          headerName: "Details",
          children: [
            {
              field: "dob",
              minWidth: 100,
            },
            {
              field: "number",
              minWidth: 150,
            },
            {
              field: "email",
              minWidth: 150,
            },
          ],
        },
        {
          headerName: "Others",
          children: [
            {
              field: "gender",
              minWidth: 100,
            },
            {
              field: "language",
              minWidth: 150,
            },
            {
              field: "comments",
              minWidth: 250,
            },
          ],
        },
        {
          headerName: "Address",
          children: [
            {
              field: "address",
              minWidth: 150,
            },
            {
              field: "country",
              minWidth: 150,
            },
            {
              field: "city",
              minWidth: 150,
            },
          ],
        },
        {
          field: "actions",
          cellRenderer: "button",
          cellRendererParams: {
            deleteClicked: (id) => {
              this.setState(
                {
                  deleteId: id,
                },
                () => {
                  this.props.deleteId(this.state.deleteId);
                }
              );
            },
            editBtnClickHandler: (id) => {
              this.setState(
                {
                  editedId: id,
                },
                () => {
                  this.props.editedId(this.state.editedId);
                }
              );
            },
          },
          minWidth: 100,
        },
      ],
      paginationPageSize: 10,
      defaultColDef: {
        flex: 1,
        minWidth: 100,
        enableValue: true,
        enableRowGroup: true,
        enablePivot: true,
        sortable: true,
        filter: true,
      },
      sideBar: "columns",
      rowData: [...this.props.data],
      frameworkComponents: {
        button: Button,
      },
    };
  }
  onGridReady = (params) => {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
  };
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        rowData: [...this.props.data],
      });
    }, 2000);
  }

  render() {
    return (
      <div style={{ width: "100%", height: 600 }}>
        <div
          id="myGrid"
          style={{
            height: "100%",
            width: "100%",
          }}
          className="ag-theme-alpine"
        >
          <AgGridReact
            columnDefs={this.state.columnDefs}
            defaultColDef={this.state.defaultColDef}
            sideBar={this.state.sideBar}
            frameworkComponents={this.state.frameworkComponents}
            pagination={true}
            paginationPageSize={this.state.paginationPageSize}
            rowData={this.state.rowData}
            onGridReady={this.onGridReady}
            enableCellChangeFlash={true}
            animateRows={true}
          />
        </div>
      </div>
    );
  }
}

export default Grid;
