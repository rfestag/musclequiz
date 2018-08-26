import ListEditor from './components/ListEditor';
import ListRenderer from './components/ListRenderer';

export const columns = [
  {
    headerName: "Muscle",
    field: "name",
    cellEditorFramework: ListEditor,
    cellRendererFramework: ListRenderer,
    maxWidth: 150
  },
  {
    headerName: "Muscle Group",
    field: "group",
    cellEditorFramework: ListEditor,
    cellRendererFramework: ListRenderer,
    maxWidth: 100
  },
  {
    headerName: "Innervation",
    field: "innervation",
    cellEditorFramework: ListEditor,
    cellRendererFramework: ListRenderer,
    autoHeight: true,
    maxWidth: 350
  },
  {
    headerName: "Main Actions",
    field: "actions",
    cellEditorFramework: ListEditor,
    cellRendererFramework: ListRenderer,
    autoHeight: true,
    maxWidth: 350
  },
  {
    headerName: "Blood Supply",
    field: "bloodSupply",
    cellEditorFramework: ListEditor,
    cellRendererFramework: ListRenderer,
    autoHeight: true,
    maxWidth: 350
  },
  {
    headerName: "Proximal Attachment (Origin)",
    field: "origin",
    cellEditorFramework: ListEditor,
    cellRendererFramework: ListRenderer,
    autoHeight: true,
    maxWidth: 350
  },
  {
    headerName: "Distal Attachment (Insertion)",
    field: "insertion",
    cellEditorFramework: ListEditor,
    cellRendererFramework: ListRenderer,
    autoHeight: true,
    maxWidth: 350
  },
]
