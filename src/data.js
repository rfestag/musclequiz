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
      headerName: "Innervation",
      field: "innervation",
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
    },
    {
      headerName: "Blood Supply",
      field: "bloodSupply",
      cellEditorFramework: ListEditor,
      cellRendererFramework: ListRenderer,
      maxWidth: 350
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
        "obturator artery"
      ],
      actions: [
        "adducts thigh at hip", 
        "medially rotates thigh",
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
        "lateral plantar nerve"
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
        "obturator artery"
      ],
      actions: [
        "adducts thigh",
        "medially rotates thigh"
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
        "obturator nerve",
        "sciatic nerve"
      ],
      bloodSupply: [
        "obturator artery"
      ],
      actions: [
        "adducts thigh",
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
        "long head: sciatic nerve (tibial division)",
        "short head: sciatic nerve (common fibular division)"
      ],
      bloodSupply: [
        "perforating branches of profunda femoris", 
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
        "superior gluteal artery",
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
        "obturator artery", 
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
        "laterally rotates hip",
      ]
    },
    {
      name: ["lumbricals"], 
      group: ["foot"],
      origin: [
        "tendons of flexor digitorum longus",
      ],
      insertion: [
        "medial side of dorsal digital expansions of lateral four digits",
      ],
      innervation: [
        "medial one: medial plantar nerve",
        "lateral three: lateral plantar nerve",
      ],
      bloodSupply: [
        "lateral plantar artery",
        "plantar metatarsal arteries",
      ],
      actions: [
        "flexes proximal phalangeal bones at metatarsophalangeal joint", 
        "extends phalangeal bones at proximal interphalangeal",
        "extends phalangeal bones at distal interphalangeal joints",
      ]
    },
    {
      name: ["obturator externus"], 
      group: ["medial thigh"],
      origin: [
        "margins of obturator foramen", 
        "obturator membrane",
      ],
      insertion: [
        "trochanteric fossa of femur",
      ],
      innervation: [
        "obturator nerve",
      ],
      bloodSupply: [
        "obturator artery",
      ],
      actions: [
        "laterally rotates thigh",
      ]
    },
    {
      name: ["obturator internus"], 
      group: ["gluteal region"],
      origin: [
        "pelvic surface of obturator membrane and surrounding bone",
      ],
      insertion: [
        "medial surface of greater trochanter of femur",
      ],
      innervation: [
        "nerve to obturator internus muscle",
      ],
      bloodSupply: [
        "internal pudendal artery",
        "obturator artery",
      ],
      actions: [
        "laterally rotates thigh", 
      ]
    },
    {
      name: ["pectineus"], 
      group: ["medial thigh"],
      origin: [
        "superior ramus of pubis",
      ],
      insertion: [
        "pectineal line of femur",
      ],
      innervation: [
        "femoral nerve",
      ],
      bloodSupply: [
        "obturator artery",
      ],
      actions: [
        "adducts thigh at hip",
        "flexes thigh at hip",
      ]
    },
    {
      name: ["piriformis"], 
      group: ["gluteal region"],
      origin: [
        "anterior surface of sacral segments 2-4",
        "sacrotuberous ligament (inconstant)"
      ],
      insertion: [
        "superior body of the greater trochanter of femur",
      ],
      innervation: [
        "ventral rami of L5, S1, S2",
      ],
      bloodSupply: [
        "superior gluteal artery",
        "inferior gluteal artery",
        "internal pudendal artery",
      ],
      actions: [
        "laterally rotates extended thigh", 
        "abducts flexed thigh at hip",
      ]
    },
    {
      name: ["plantar interossei (three muscles)"], 
      group: ["foot"],
      origin: [
        "bases and medial sides of 3rd through 5th metatarsals",
      ],
      insertion: [
        "medial sides of bases of proximal phalangeal bones of 3rd through 5th digits",
      ],
      innervation: [
        "lateral plantar nerve",
      ],
      bloodSupply: [
        "lateral plantar artery",
        "lateral plantar arch",
        "plantar metatarsal artery",
        "plantar digital artery",
      ],
      actions: [
        "adduct digits (3-5)",
        "flex metatarsophalangeal joint",
        "extend phalangeal bones",
      ]
    },
    {
      name: ["plantaris"], 
      group: ["posterior leg"],
      origin: [
        "inferior end of lateral supracondylar line of femur",
        "oblique popliteal ligament",
      ],
      insertion: [
        "posterior aspect of calcaneus via calcaneal tendon",
      ],
      innervation: [
        "tibial nerve",
      ],
      bloodSupply: [
        "popliteal artery",
      ],
      actions: [
        "weakly assists gastrocnemius",
      ]
    },
    {
      name: ["popliteus"], 
      group: ["posterior leg"],
      origin: [
        "lateral aspect of lateral condyle of femur", 
        "lateral meniscus",
      ],
      insertion: [
        "posterior tibia superior to soleal line",
      ],
      innervation: [
        "tibial nerve (L4–S1)",
      ],
      bloodSupply: [
        "posterior tibial artery",
      ],
      actions: [
        "weakly flexes knee",
        "unlocks knee by rotating femur on fixed tibia",
      ]
    },
    {
      name: ["psoas major (iliopsoas)"], 
      group: ["anterior thigh"],
      origin: [
        "transverse processes of lumbar vertebrae",
        "sides of bodies of T12–L5 vertebrae",
        "intervening intervertebral discs",
      ],
      insertion: [
        "lesser trochanter of femur",
      ],
      innervation: [
        "anterior rami of first three lumbar nerves",
      ],
      bloodSupply: [
        "lumbar branches of iliolumbar artery",
      ],
      actions: [
        "acting superiorly with iliacus, flexes hip", 
        "acting inferiorly, flexes vertebral column laterally",
        "used to balance trunk in sitting position",
        "acting inferiorly with iliacus, flexes trunk",
      ]
    },
    {
      name: ["quadratus femoris"], 
      group: ["gluteal region"],
      origin: [
        "lateral margin of ischial tuberosity",
      ],
      insertion: [
        "quadrate tubercle on intertrochanteric crest of femur",
      ],
      innervation: [
        "nerve to quadratus femoris muscle",
      ],
      bloodSupply: [
        "medial circumflex femoral artery",
      ],
      actions: [
        "laterally rotates thigh",
      ]
    },
    {
      name: ["quadratus plantae"], 
      group: ["foot"],
      origin: [
        "medial sides of plantar surface of calcaneus",
        "lateral sides of plantar surface of calcaneus",
      ],
      insertion: [
        "posterolateral edge of flexor digitorum longus tendon",
      ],
      innervation: [
        "lateral plantar nerve",
      ],
      bloodSupply: [
        "medial plantar artery",
        "lateral plantar artery",
        "deep plantar arterial arch",
      ],
      actions: [
        "Corrects for oblique pull of flexor digitorum longus tendon, thus assisting in flexion of digits of foot",
      ]
    },
    {
      name: ["rectus femoris (quadriceps)"], 
      group: ["anterior thigh"],
      origin: [
        "anterior inferior iliac spine",
        "ilium superior to acetabulum",
      ],
      insertion: [
        "base of patella",
        "tibial tuberosity via patellar ligament",
      ],
      innervation: [
        "femoral nerve",
      ],
      bloodSupply: [
        "femoral artery",
      ],
      actions: [
        "extends leg at knee joint",
        "flexes thigh at hip joint",
      ]
    },
    {
      name: ["sartorius"], 
      group: ["anterior thigh"],
      origin: [
        "anterior superior iliac spine",
        "superior part of notch below it",
      ],
      insertion: [
        "superior part of medial surface of tibia",
      ],
      innervation: [
        "femoral nerve",
      ],
      bloodSupply: [
        "femoral artery",
      ],
      actions: [
        "abducts thigh",
        "laterally rotates thigh", 
        "flexes thigh",
        "flexes knee joint",
      ]
    },
    {
      name: ["semimembranosus"], 
      group: ["posterior thigh"],
      origin: [
        "ischial tuberosity",
      ],
      insertion: [
        "posterior part of medial condyle of tibia",
      ],
      innervation: [
        "sciatic nerve (tibial division)",
      ],
      bloodSupply: [
        "profunda femoris artery",
      ],
      actions: [
        "flexes leg",
        "extends thigh",
      ]
    },
    {
      name: ["semitendinosus"], 
      group: ["posterior thigh"],
      origin: [
        "ischial tuberosity",
      ],
      insertion: [
        "superior part of medial surface of tibia",
      ],
      innervation: [
        "sciatic nerve (tibial division)",
      ],
      bloodSupply: [
        "profunda femoris artery",
      ],
      actions: [
        "flexes leg", 
        "extends thigh",
      ]
    },
    {
      name: ["soleus"], 
      group: ["posterior leg"],
      origin: [
        "posterior aspect of head of fibula",
        "proximal 1/4 of posterior surface of fibula", 
        "soleal line of tibia",
      ],
      insertion: [
        "posterior aspect of calcaneus via calcaneal tendon",
      ],
      innervation: [
        "tibial nerve",
      ],
      bloodSupply: [
        "posterior tibial artery", 
      ],
      actions: [
        "plantarflexes foot at ankle", 
        "stabilizes leg over foot",
      ]
    },
    {
      name: ["superior gemellus"], 
      group: ["gluteal region"],
      origin: [
        "outer surface of ischial spine",
      ],
      insertion: [
        "medial surface of greater trochanter of femur",
      ],
      innervation: [
        "nerve to obturator internus muscle",
      ],
      bloodSupply: [
        "inferior gluteal artery",
        "internal pudendal artery",
      ],
      actions: [
        "laterally rotates extended thigh",
        "abducts flexed thigh",
      ]
    },
    {
      name: ["tensor fasciae latae"], 
      group: ["gluteal region"],
      origin: [
        "anterior superior iliac spine and anterior part of iliac crest",
      ],
      insertion: [
        "iliotibial tract that attaches to lateral condyle of tibia",
      ],
      innervation: [
        "superior gluteal nerve",
      ],
      bloodSupply: [
        "ascending branch of lateral circumflex femoral artery",
      ],
      actions: [
        "abducts thigh at hip",
        "medially rotates thigh at hip",
        "flexes thigh at hip",
        "helps to keep knee extended",
      ]
    },
    {
      name: ["tibialis anterior"], 
      group: ["anterior leg"],
      origin: [
        "lateral condyle", 
        "proximal half of lateral tibia",
        "interosseous membrane",
      ],
      insertion: [
        "medial plantar surfaces of medial cuneiform bone",
        "base of 1st metatarsal bone",
      ],
      innervation: [
        "deep fibular nerve",
      ],
      bloodSupply: [
        "anterior tibial artery",
      ],
      actions: [
        "dorsiflexes foot at ankle",
        "inverts foot",
      ]
    },
    {
      name: ["tibialis posterior"], 
      group: ["posterior leg"],
      origin: [
        "posterior tibia below soleal line",
        "interosseous membrane",
        "proximal half of posterior fibula",
      ],
      insertion: [
        "tuberosity of navicular bone", 
        "all cuneiforms, cuboid, and bases of 2nd through 4th metatarsal bones",
      ],
      innervation: [
        "tibial nerve",
      ],
      bloodSupply: [
        "posterior fibular artery",
      ],
      actions: [
        "plantarflexes foot at ankle",
        "inverts foot",
      ]
    },
    {
      name: ["vastus intermedius (quadriceps)"], 
      group: ["anterior thigh"],
      origin: [
        "anterior surface of body of femur",
        "lateral surface of body of femur",
      ],
      insertion: [
        "base of patella",
        "tibial tuberosity via patellar ligament",
      ],
      innervation: [
        "femoral nerve",
      ],
      bloodSupply: [
        "femoral artery",
      ],
      actions: [
        "extends leg at knee joint",
      ]
    },
    {
      name: ["vastus lateralis (quadriceps)"], 
      group: ["anterior thigh"],
      origin: [
        "greater trochanter, lateral lip of gluteal tuberosity", 
        "lateral lip of linea aspera",
      ],
      insertion: [
        "base of patella",
        "tibial tuberosity via patellar ligament",
      ],
      innervation: [
        "femoral nerve",
      ],
      bloodSupply: [
        "femoral artery",
      ],
      actions: [
        "extends leg at knee joint",
      ]
    },
    {
      name: ["vastus medialis (quadriceps)"], 
      group: ["anterior thigh"],
      origin: [
        "intertrochanteric line, greater trochanter, lateral lip of gluteal tuberosity", 
        "lateral lip of linea aspera",
      ],
      insertion: [
        "base of patella",
        "tibial tuberosity via patellar ligament",
      ],
      innervation: [
        "femoral nerve",
      ],
      bloodSupply: [
        "femoral artery",
      ],
      actions: [
        "extends leg at knee joint",
      ]
    },
  ]
}
