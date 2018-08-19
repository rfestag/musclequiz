import ListEditor from './components/ListEditor';
import ListRenderer from './components/ListRenderer';

export const muscles = {
  columns: [
    {
      headerName: "Muscle",
      field: "name",
      maxWidth: 150
    },
    {
      headerName: "Muscle Group",
      field: "group",
      maxWidth: 100
    },
    {
      headerName: "Proximal Attachment (Origin)",
      field: "origin",
      cellEditorFramework: ListEditor,
      cellRendererFramework: ListRenderer,
      maxWidth: 350
    },
    {
      headerName: "Distal Attachment (Insertion)",
      field: "insertion",
      cellEditorFramework: ListEditor,
      cellRendererFramework: ListRenderer,
      maxWidth: 350
    },
    {
      headerName: "Innervation",
      field: "innervation",
      cellEditorFramework: ListEditor,
      cellRendererFramework: ListRenderer,
      maxWidth: 350
    },
    {
      headerName: "Blood Supply",
      field: "bloodSupply",
      cellEditorFramework: ListEditor,
      cellRendererFramework: ListRenderer,
      maxWidth: 350
    },
    {
      headerName: "Main Actions",
      field: "actions",
      cellEditorFramework: ListEditor,
      cellRendererFramework: ListRenderer,
      maxWidth: 350
    }
  ],
  items: [
    {
      name: "abductor digiti minimi", 
      group: "foot",
      origin: [
        "medial tubercles of tuberosity of calcaneus",
        "lateral tubercles of tuberosity of calcaneus",
        "plantar aponeurosis",
        "intermuscular septim"
      ],
      insertion: [
        "lateral side of base of proximal phalanx of 5th digit"
      ],
      innervation: [
        "lateral plantar nerve"
      ],
      bloodSupply: [
        "mediolateral plantar artery",
        "plantar digital arteries to 5th digit"
      ],
      actions: [
        "abducts 5th digit",
        "flexes 5th digit"
      ]
    },
    {
      name: "abductur hallucis", 
      group: "foot",
      origin: [
        "medial tubercles of tuberosity of calcaneus",
        "lateral tubercles of tuberosity of calcaneus",
        "flexor retinaculum",
        "plantar aponeurosis",
      ],
      insertion: [
        "medial side of base of proximal phalanx of 1st digit"
      ],
      innervation: [
        "medial plantar nerve"
      ],
      bloodSupply: [
        "medial plantar artery",
        "1st plantar metatarsal artery",
      ],
      actions: [
        "abducts 1st digit",
        "flexes 1st digit"
      ]
    },
    {
      name: "adductor brevis", 
      group: "medial thigh",
      origin: [
        "body pubic ramus",
        "inferior pubic ramus",
      ],
      insertion: [
        "pectineal line",
        "proximal part of linea aspera of femur",
      ],
      innervation: [
        "obturator nerve"
      ],
      bloodSupply: [
        "profunda femoris",
        "medial circumflex femoral",
        "obturator arteries",
      ],
      actions: [
        "adducts thigh at hip",
        "weak hip flexor",
      ]
    },
    {
      name: "adductor hallucis", 
      group: "foot",
      origin: [
        "oblique head: bases of 2nd through 4th metatarsals",
        "transverse head: ligaments of metatarsophalangeal joints of digits 3–5"
      ],
      insertion: [
        "tendons of both heads lateral to side of base of proximal phalanx of 1st digit"
      ],
      innervation: [
        "deep branch of lateral plantar nerve"
      ],
      bloodSupply: [
        "medial plantar arteries",
        "lateral plantar arteries",
        "medial plantar arch",
        "lateral plantar arch",
        "plantar metatarsal arteries",
      ],
      actions: [
        "adducts 1st digit",
        "maintains transverse arch of foot"
      ]
    },
    {
      name: "adductor longus", 
      group: "medial thigh",
      origin: [
        "body of pubis inferior to pubic crest",
      ],
      insertion: [
        "middle third of linea aspera of femur"
      ],
      innervation: [
        "obturator nerve (anterior division)"
      ],
      bloodSupply: [
        "Profunda femoris artery",
        "medial circumflex femoral artery",
      ],
      actions: [
        "adducts thigh at hip"
      ]
    },
    {
      name: "", 
      group: "",
      origin: [
      ],
      insertion: [
      ],
      innervation: [
      ],
      bloodSupply: [
      ],
      actions: [
      ]
    },
    {
      name: "", 
      group: "",
      origin: [
      ],
      insertion: [
      ],
      innervation: [
      ],
      bloodSupply: [
      ],
      actions: [
      ]
    },
    {
      name: "", 
      group: "",
      origin: [
      ],
      insertion: [
      ],
      innervation: [
      ],
      bloodSupply: [
      ],
      actions: [
      ]
    },
    {
      name: "", 
      group: "",
      origin: [
      ],
      insertion: [
      ],
      innervation: [
      ],
      bloodSupply: [
      ],
      actions: [
      ]
    },
    {
      name: "", 
      group: "",
      origin: [
      ],
      insertion: [
      ],
      innervation: [
      ],
      bloodSupply: [
      ],
      actions: [
      ]
    },
    {
      name: "", 
      group: "",
      origin: [
      ],
      insertion: [
      ],
      innervation: [
      ],
      bloodSupply: [
      ],
      actions: [
      ]
    },
    {
      name: "", 
      group: "",
      origin: [
      ],
      insertion: [
      ],
      innervation: [
      ],
      bloodSupply: [
      ],
      actions: [
      ]
    },
    {
      name: "", 
      group: "",
      origin: [
      ],
      insertion: [
      ],
      innervation: [
      ],
      bloodSupply: [
      ],
      actions: [
      ]
    },
    {
      name: "", 
      group: "",
      origin: [
      ],
      insertion: [
      ],
      innervation: [
      ],
      bloodSupply: [
      ],
      actions: [
      ]
    },
    {
      name: "", 
      group: "",
      origin: [
      ],
      insertion: [
      ],
      innervation: [
      ],
      bloodSupply: [
      ],
      actions: [
      ]
    },
    {
      name: "", 
      group: "",
      origin: [
      ],
      insertion: [
      ],
      innervation: [
      ],
      bloodSupply: [
      ],
      actions: [
      ]
    },
    {
      name: "", 
      group: "",
      origin: [
      ],
      insertion: [
      ],
      innervation: [
      ],
      bloodSupply: [
      ],
      actions: [
      ]
    },
    {
      name: "", 
      group: "",
      origin: [
      ],
      insertion: [
      ],
      innervation: [
      ],
      bloodSupply: [
      ],
      actions: [
      ]
    },
    {
      name: "", 
      group: "",
      origin: [
      ],
      insertion: [
      ],
      innervation: [
      ],
      bloodSupply: [
      ],
      actions: [
      ]
    },
    {
      name: "", 
      group: "",
      origin: [
      ],
      insertion: [
      ],
      innervation: [
      ],
      bloodSupply: [
      ],
      actions: [
      ]
    },
    {
      name: "", 
      group: "",
      origin: [
      ],
      insertion: [
      ],
      innervation: [
      ],
      bloodSupply: [
      ],
      actions: [
      ]
    },
    {
      name: "", 
      group: "",
      origin: [
      ],
      insertion: [
      ],
      innervation: [
      ],
      bloodSupply: [
      ],
      actions: [
      ]
    },
    {
      name: "", 
      group: "",
      origin: [
      ],
      insertion: [
      ],
      innervation: [
      ],
      bloodSupply: [
      ],
      actions: [
      ]
    },
    {
      name: "", 
      group: "",
      origin: [
      ],
      insertion: [
      ],
      innervation: [
      ],
      bloodSupply: [
      ],
      actions: [
      ]
    },
    {
      name: "", 
      group: "",
      origin: [
      ],
      insertion: [
      ],
      innervation: [
      ],
      bloodSupply: [
      ],
      actions: [
      ]
    },
    {
      name: "", 
      group: "",
      origin: [
      ],
      insertion: [
      ],
      innervation: [
      ],
      bloodSupply: [
      ],
      actions: [
      ]
    },
  ]
}
