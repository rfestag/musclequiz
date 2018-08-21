import ListEditor from './components/ListEditor';
import ListRenderer from './components/ListRenderer';

export const muscles = {
  columns: [
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
      name: ["abductor digiti minimi"], 
      group: ["foot"],
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
      name: ["abductur hallucis"], 
      group: ["foot"],
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
      name: ["adductor brevis"], 
      group: ["medial thigh"],
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
      name: ["adductor hallucis"], 
      group: ["foot"],
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
      name: ["adductor longus"], 
      group: ["medial thigh"],
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
      name: ["adductor magnus"], 
      group: ["medial thigh"],
      origin: [
        "inferior pubic ramus",
        "ramus of ischium",
        "hamstring part: ischial tuberosity"
      ],
      insertion: [
        "gluteal tuberosity",
        "linea aspera",
        "medial supracondylar line"
      ],
      innervation: [
        "adductor part: obturator nerve",
        "hamstring part: sciatic nerve (tibial division)"
      ],
      bloodSupply: [
        "femoral artery",
        "profunda femoris",
        "obturator arteries"
      ],
      actions: [
        "adductor part: adducts thigh",
        "adductor part: flexes thigh",
        "hamstring part: extends thigh",
      ]
    },
    {
      name: ["articularis genus"], 
      group: ["anterior thigh"],
      origin: [
        "distal femur on anterior surface"
      ],
      insertion: [
        "suprapatellar bursa"
      ],
      innervation: [
        "femoral nerve"
      ],
      bloodSupply: [
        "femoral artery"
      ],
      actions: [
        "pulls suprapatellar bursa superiorly with extension of knee"
      ]
    },
    {
      name: ["biceps femoris"], 
      group: ["posterior thigh"],
      origin: [
        "long head: ischial tuberosity",
        "short head: linea aspera of femur",
        "short head: lateral supracondylar line of femur"
      ],
      insertion: [
        "lateral side of head of fibula"
      ],
      innervation: [
        "long head: sciatic nerve (tibial division) (L5–S2)",
        "short head: sciatic nerve (common fibular division)"
      ],
      bloodSupply: [
        "perforating branches of profunda femoris", 
        "inferior gluteal artery",
        "medial circumflex femoral artery"
      ],
      actions: [
        "flexes leg",
        "laterally rotates leg", 
        "extends thigh at hip"
      ]
    },
    {
      name: ["dorsal interossei (four muscles)"], 
      group: ["foot"],
      origin: [
        "adjacent sides of 1st through 5th metatarsals"
      ],
      insertion: [
        "1st: medial side of proximal phalanx of 2nd digit",
        "2nd through 4th: lateral sides of digits 2–4"
      ],
      innervation: [
        "lateral plantar nerve"
      ],
      bloodSupply: [
        "arcuate artery", 
        "dorsal metatarsal artery",
        "plantar metatarsal arteries"
      ],
      actions: [
        "abduct 2nd through 4th digits of foot", 
        "flex metatarsophalangeal joints",
        "extend phalangeal bones"
      ]
    },
    {
      name: ["extensor digitorum brevis and extensor hallucis brevis"], 
      group: ["foot"],
      origin: [
        "superolateral surface of calcaneus",
        "lateral talocalcaneal ligament", 
        "deep surface of inferior extensor retinaculum"
      ],
      insertion: [
        "first tendon into dorsal surface of base of proximal phalanx of great toe",
        "other three tendons into lateral sides of tendons of extensor digitorum longus to digits 2–4"
      ],
      innervation: [
        "deep fibular nerve"
      ],
      bloodSupply: [
        "dorsalis pedis artery", 
        "lateral tarsal artery", 
        "arcuate artery",
        "fibular artery"
      ],
      actions: [
        "aids extensor digitorum longus in extending of 4 medial digits at metatarsophalangeal interphalangeal joints",
      ]
    },
    {
      name: ["extensor digitorum longus"], 
      group: ["anterior leg"],
      origin: [
        "lateral condyle of tibia", 
        "proximal 3/4 of anterior surface of interosseous membrane",
        "fibula"
      ],
      insertion: [
        "middle and distal phalangeal bones of lateral four digits"
      ],
      innervation: [
        "deep fibular nerve"
      ],
      bloodSupply: [
        "anterior tibial artery"
      ],
      actions: [
        "extends lateral four digits",
        "dorsiflexes foot at ankle"
      ]
    },
    {
      name: ["extensor hallucis longus"], 
      group: ["anterior leg"],
      origin: [
        "middle part of anterior surface of fibula",
        "interosseous membrane"
      ],
      insertion: [
        "dorsal aspect of base of distal phalanx of great toe"
      ],
      innervation: [
        "deep fibular nerve"
      ],
      bloodSupply: [
        "anterior tibial artery"
      ],
      actions: [
        "extends great toe", 
        "dorsiflexes foot at ankle"
      ]
    },
    {
      name: ["fibularis brevis"], 
      group: ["lateral leg"],
      origin: [
        "distal 2/3 of lateral surface of fibula",
      ],
      insertion: [
        "dorsal surface of tuberosity on lateral side of 5th metatarsal",
      ],
      innervation: [
        "superficial fibular nerve",
      ],
      bloodSupply: [
        "anterior tibial artery",
        "fibular artery",
      ],
      actions: [
        "everts foot",
        "weakly plantarflexes foot at ankle",
      ]
    },
    {
      name: ["fibularis longus"], 
      group: ["lateral leg"],
      origin: [
        "head and proximal 2/3 of lateral fibula",
      ],
      insertion: [
        "plantar base of 1st metatarsal",
        "medial cuneiform bone",
      ],
      innervation: [
        "superficial fibular nerve",
      ],
      bloodSupply: [
        "anterior tibial artery",
        "fibular artery",
      ],
      actions: [
        "everts foot",
        "weakly plantarflexes foot at ankle",
      ]
    },
    {
      name: ["fibularis tertius"], 
      group: ["anterior leg"],
      origin: [
        "distal third of anterior surface of fibula",
        "interosseous membrane",
      ],
      insertion: [
        "dorsum of base of 5th metatarsal",
      ],
      innervation: [
        "deep fibular nerve",
      ],
      bloodSupply: [
        "anterior tibial artery",
      ],
      actions: [
        "dorsiflexes foot at ankle",
        "aids in eversion of foot",
      ]
    },
    {
      name: ["flexor digiti minimi brevis"], 
      group: ["foot"],
      origin: [
        "base of 5th metatarsal",
      ],
      insertion: [
        "lateral base of proximal phalanx of 5th digit",
      ],
      innervation: [
        "superficial branch of lateral plantar nerve",
      ],
      bloodSupply: [
        "lateral plantar artery",
        "plantar digital artery to 5th digit",
        "arcuate artery",
      ],
      actions: [
        "flexes proximal phalanx of 5th digit",
      ]
    },
    {
      name: ["flexor digitorum brevis"], 
      group: ["foot"],
      origin: [
        "medial tubercle of tuberosity of calcaneus", 
        "plantar aponeurosis", 
        "intermuscular septum",
      ],
      insertion: [
        "both sides of middle phalangeal bones of lateral four digits",
      ],
      innervation: [
        "medial plantar nerve",
      ],
      bloodSupply: [
        "medial plantar artery",
        "lateral plantar artery",
        "plantar arch artery",
        "plantar metatarsal artery",
        "plantar digital artery"
      ],
      actions: [
        "flexes 2nd through 5th digits",
      ]
    },
    {
      name: ["flexor digitorum longus"], 
      group: ["posterior leg"],
      origin: [
        "medial part of posterior tibia inferior to soleal line",
      ],
      insertion: [
        "plantar bases of distal phalangeal bones of lateral four digits",
      ],
      innervation: [
        "tibial nerve",
      ],
      bloodSupply: [
        "posterior tibial artery",
      ],
      actions: [
        "flexes lateral four digits",
        "plantarflexes foot at ankle",
        "supports longitudinal arches of foot",
      ]
    },
    {
      name: ["flexor hallucis brevis"], 
      group: ["foot"],
      origin: [
        "plantar surfaces of cuboid bone",
        "lateral cuneiform bone",
      ],
      insertion: [
        "both sides of base of proximal phalanx of 1st digit"
      ],
      innervation: [
        "medial plantar nerve",
      ],
      bloodSupply: [
        "medial plantar artery", 
        "1st plantar metatarsal artery",
      ],
      actions: [
        "flexes proximal phalanx of 1st digit",
      ]
    },
    {
      name: ["flexor hallucis longus"], 
      group: ["posterior leg"],
      origin: [
        "distal 2/3 of posterior fibula",
        "interosseous membrane",
      ],
      insertion: [
        "base of distal phalanx of great toe",
      ],
      innervation: [
        "tibial nerve",
      ],
      bloodSupply: [
        "fibular artery",
      ],
      actions: [
        "flexes all joints of great toe", 
        "weakly plantarflexes foot at ankle",
      ]
    },
    {
      name: ["gastrocnemius"], 
      group: ["posterior leg"],
      origin: [
        "lateral head: lateral aspect of lateral condyle of femur",
        "medial head: popliteal surface above medial condyle of femur",
      ],
      insertion: [
        "posterior aspect of calcaneus via calcaneal tendon",
      ],
      innervation: [
        "tibial nerve",
      ],
      bloodSupply: [
        "popliteal tibial artery",
        "posterior tibial artery",
      ],
      actions: [
        "plantarflexes foot at ankle joint", 
        "assists in flexion of knee joint",
      ]
    },
    {
      name: ["gluteus maximus"], 
      group: ["gluteal region"],
      origin: [
        "Ilium posterior to posterior gluteal line", 
        "dorsal surface of sacrum and coccyx",
        "sacrotuberous ligament",
      ],
      insertion: [
        "most fibers end in iliotibial tract that inserts into lateral condyle of tibia",
        "some fibers insert into gluteal tuberosity of femur",
      ],
      innervation: [
        "inferior gluteal nerve",
      ],
      bloodSupply: [
        "inferior gluteal arteries mainly",
        "superior gluteal arteries occasionally",
      ],
      actions: [
        "extends flexed thigh",
        "assists in lateral rotation", 
        "and abducts thigh",
      ]
    },
    {
      name: ["gluteus medius"], 
      group: ["gluteal region"],
      origin: [
        "lateral surface of ilium between anterior and posterior gluteal lines",
      ],
      insertion: [
        "lateral surface of greater trochanter of femur",
      ],
      innervation: [
        "superior gluteal nerve",
      ],
      bloodSupply: [
        "superior gluteal artery",
      ],
      actions: [
        "abducts thigh at hips",
        "medially rotates thigh at hips",
        "steadies pelvis on leg when opposite leg is raised",
      ]
    },
    {
      name: ["gluteus minimus"], 
      group: ["gluteal region"],
      origin: [
        "lateral surface of ilium between anterior and inferior gluteal lines",
      ],
      insertion: [
        "anterior surface of greater trochanter of femur",
      ],
      innervation: [
        "superior gluteal nerve",
      ],
      bloodSupply: [
        "main trunk of superior gluteal artery",
        "deep branch of superior gluteal artery",
      ],
      actions: [
        "abducts thigh at hips",
        "medially rotates thigh at hips",
        "steadies pelvis on leg when opposite leg is raised",
      ]
    },
    {
      name: ["gracilis"], 
      group: ["medial thigh"],
      origin: [
        "body ramus of pubis",
        "inferior ramus of pubis",
      ],
      insertion: [
        "superior part of medial surface of tibia",
      ],
      innervation: [
        "obturator nerve",
      ],
      bloodSupply: [
        "Profunda femoris artery", 
        "medial circumflex femoral artery",
      ],
      actions: [
        "adducts thigh", 
        "flexes leg",
        "medially rotates leg",
      ]
    },
    {
      name: ["iliacus (iliopsoas)"], 
      group: ["anterior thigh"],
      origin: [
        "superior 2/3 of iliac fossa", 
        "iliac crest", 
        "ala of sacrum", 
        "anterior sacroiliac ligaments",
      ],
      insertion: [
        "lesser trochanter of femur",
        "shaft inferior to lesser trochanter of femur",
        "to psoas major tendon",
      ],
      innervation: [
        "femoral nerve",
      ],
      bloodSupply: [
        "iliac branches of iliolumbar artery",
      ],
      actions: [
        "flexes thigh at hips",
        "stabilizes hip joint",
        "acts with psoas major",
      ]
    },
    {
      name: ["inferior gemellus"], 
      group: ["gluteal region"],
      origin: [
        "ischial tuberosity",
      ],
      insertion: [
        "medial surface of greater trochanter of femur",
      ],
      innervation: [
        "nerve to quadratus femoris muscle",
      ],
      bloodSupply: [
        "medial circumflex femoral artery",
      ],
      actions: [
        "laterally rotates extended thigh",
        "abducts flexed thigh",
      ]
    },
  ]
}
