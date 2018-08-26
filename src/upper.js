import ListEditor from './components/ListEditor';
import ListRenderer from './components/ListRenderer';

export const upper = [
  {
    name: ["abductor digiti minimi"], 
    group: ["hand"],
    origin: [
      "pisiform bone",
      "tendon of flexor carpi ulnaris",
    ],
    insertion: [
      "medial side of base of proximal phalanx of little finger (5th digit)"
    ],
    innervation: [
      "ulnar nerve (deep branch)"
    ],
    bloodSupply: [
      "deep palmar branch of ulnar artery",
    ],
    actions: [
      "abducts little finger",
    ]
  },
  {
    name: ["abductor pollicis brevis"], 
    group: ["hand"],
    origin: [
      "flexor retinaculum",
      "tubercles of scaphoid bone",
      "tubercles of trapezium bone",
    ],
    insertion: [
      "base of proximal phalanx of thumb"
    ],
    innervation: [
      "median nerve (recurrent branch)"
    ],
    bloodSupply: [
      "superficial palmar branch of radial artery",
    ],
    actions: [
      "abducts thumb",
    ]
  },
  {
    name: ["abductor pollicis longus"], 
    group: ["posterior forearm"],
    origin: [
      "posterior surface of ulna, radius, and interosseous membrane",
    ],
    insertion: [
      "base of 1st metacarpal"
    ],
    innervation: [
      "radial nerve (posterior interosseous)"
    ],
    bloodSupply: [
      "posterior interosseous artery",
    ],
    actions: [
      "abducts thumb at carpometacarpal joint",
      "extends thumb at carpometacarpal joint",
    ]
  },
  {
    name: ["adductor pollicis"], 
    group: ["hand"],
    origin: [
      "oblique head: bases of 2nd and 3rd metacarpals and capitate bone and adjacent bones",
      "transverse head: anterior surface of 3rd metacarpal",
    ],
    insertion: [
      "base of proximal phalanx of thumb"
    ],
    innervation: [
      "ulnar nerve (deep branch)"
    ],
    bloodSupply: [
      "deep palmar arch",
    ],
    actions: [
      "adducts thumb",
    ]
  },
  {
    name: ["anconeus"], 
    group: ["arm"],
    origin: [
      "posterior surface of lateral epicondyle of humerus",
    ],
    insertion: [
      "lateral surface of olecranon",
      "posterior proximal ulna"
    ],
    innervation: [
      "radial nerve"
    ],
    bloodSupply: [
      "deep brachial artery",
    ],
    actions: [
      "assists triceps brachii in extending elbow",
      "abducts ulna in pronation",
    ]
  },
  {
    name: ["biceps brachii"], 
    group: ["arm"],
    origin: [
      "long head: supraglenoid tubercle of scapula",
      "short head: coracoid process of scapula",
    ],
    insertion: [
      "radial tuberosity",
      "fascia of forearm via bicipital aponeurosis"
    ],
    innervation: [
      "musculocutaneous nerve"
    ],
    bloodSupply: [
      "muscular branches of brachial artery",
    ],
    actions: [
      "flexes forearm at elbow",
      "supinates forearm at elbow",
    ]
  },
  {
    name: ["brachialis"], 
    group: ["arm"],
    origin: [
      "distal half of anterior surface of humerus",
    ],
    insertion: [
      "coronoid process",
      "tuberosity of ulna"
    ],
    innervation: [
      "musculocutaneous nerve",
      "radial nerve"
    ],
    bloodSupply: [
      "radial recurrent artery",
      "muscular branches of brachial artery",
    ],
    actions: [
      "flexes forearm at elbow",
    ]
  },
  {
    name: ["brachioradialis"], 
    group: ["posterior forearm"],
    origin: [
      "proximal 2/3 of lateral supracondylar ridge of humerus",
    ],
    insertion: [
      "lateral side of distal end of radius"
    ],
    innervation: [
      "radial nerve"
    ],
    bloodSupply: [
      "radial recurrent artery",
    ],
    actions: [
      "weak flexion of forearm when forearm is midpronated",
    ]
  },
  {
    name: ["coracobrachialis"], 
    group: ["arm"],
    origin: [
      "coracoid process of scapula",
    ],
    insertion: [
      "middle third of medial surface of humerus"
    ],
    innervation: [
      "musculocutaneous nerve"
    ],
    bloodSupply: [
      "muscular branches of brachial artery",
    ],
    actions: [
      "flexes arm at shoulder",
      "adducts arm at shoulder",
    ]
  },
  {
    name: ["deltoid"], 
    group: ["shoulder"],
    origin: [
      "lateral third of clavicle",
      "acromion", 
      "spine of scapula",
    ],
    insertion: [
      "deltoid tuberosity of humerus"
    ],
    innervation: [
      "axillary nerve"
    ],
    bloodSupply: [
      "posterior circumflex humeral artery",
      "deltoid branch of thoracoacromial artery",
    ],
    actions: [
      "clavicular part: flexes arm",
      "clavicular part: medially rotates arm",
      "acromial part: abducts arm beyond initial 15 degrees done by supraspinatus",
      "spinous part: extends arm",
      "spinous part: laterally rotates arm",
    ]
  },
  {
    name: ["dorsal interosseous muscles"], 
    group: ["hand"],
    origin: [
      "sides of two adjacent metacarpal bones",
    ],
    insertion: [
      "base of proximal phalangeal bones",
      "extensor expansion of digits 2–4"
    ],
    innervation: [
      "ulnar nerve (deep branch)"
    ],
    bloodSupply: [
      "deep palmar arch",
    ],
    actions: [
      "abduct digits",
      "flex digits at metacarpophalangeal joint",
      "extend interphalangeal joints",
    ]
  },
  {
    name: ["extensor carpi radialis brevis"], 
    group: ["posterior forearm"],
    origin: [
      "lateral epicondyle of humerus",
    ],
    insertion: [
      "base of 3rd metacarpal",
      "slip to 2nd metacarpal"
    ],
    innervation: [
      "radial nerve (deep branch)"
    ],
    bloodSupply: [
      "radial artery", 
      "radial recurrent artery",
    ],
    actions: [
      "extends hand at wrist",
      "abducts hand at wrist",
    ]
  },
  {
    name: ["extensor carpi radialis longus"], 
    group: ["posterior forearm"],
    origin: [
      "distal third of lateral supracondylar ridge of humerus",
    ],
    insertion: [
      "Base of 2nd metacarpal",
      "slip to 3rd metacarpal"
    ],
    innervation: [
      "radial nerve"
    ],
    bloodSupply: [
      "radial artery", 
      "radial recurrent artery",
    ],
    actions: [
      "extends hand at wrist",
      "abducts hand at wrist",
    ]
  },
  {
    name: ["extensor carpi ulnaris"], 
    group: ["posterior forearm"],
    origin: [
      "Lateral epicondyle of humerus",
      "posterior border of ulna",
    ],
    insertion: [
      "base of 5th metacarpal"
    ],
    innervation: [
      "radial nerve (posterior interosseous nerve)"
    ],
    bloodSupply: [
      "posterior interosseous artery",
    ],
    actions: [
      "extends hand at wrist",
      "adducts hand at wrist",
    ]
  },
  {
    name: ["extensor digiti minimi"], 
    group: ["posterior forearm"],
    origin: [
      "lateral epicondyle of humerus",
    ],
    insertion: [
      "extensor expansion of 5th digit"
    ],
    innervation: [
      "radial nerve (posterior interosseous nerve)"
    ],
    bloodSupply: [
      "posterior interosseous artery",
    ],
    actions: [
      "extends 5th digit",
    ]
  },
  {
    name: ["extensor digitorum"], 
    group: ["posterior forearm"],
    origin: [
      "lateral epicondyle of humerus",
    ],
    insertion: [
      "extensor expansions of medial four digits"
    ],
    innervation: [
      "radial nerve (posterior interosseous nerve)"
    ],
    bloodSupply: [
      "posterior interosseous artery",
    ],
    actions: [
      "extends medial four digits", 
      "assists in wrist extension",
    ]
  },
  {
    name: ["extensor indicis"], 
    group: ["posterior forearm"],
    origin: [
      "posterior surface of ulna",
      "interosseous membrane",
    ],
    insertion: [
      "extensor expansion of 2nd digit"
    ],
    innervation: [
      "radial nerve (posterior interosseous nerve)"
    ],
    bloodSupply: [
      "posterior interosseous artery",
    ],
    actions: [
      "extends 2nd digit",
      "helps extend hand at wrist",
    ]
  },
  {
    name: ["extensor pollicis brevis"], 
    group: ["posterior forearm"],
    origin: [
      "posterior surface of radius",
      "interosseous membrane",
    ],
    insertion: [
      "dorsal base of proximal phalanx of thumb"
    ],
    innervation: [
      "radial nerve (posterior interosseous nerve)"
    ],
    bloodSupply: [
      "posterior interosseous artery",
    ],
    actions: [
      "extends proximal phalanx of thumb at carpometacarpal joint",
    ]
  },
  {
    name: ["extensor pollicis longus"], 
    group: ["posterior forearm"],
    origin: [
      "posterior surface of middle third of ulna", 
      "interosseous membrane",
    ],
    insertion: [
      "dorsal base of distal phalanx of thumb"
    ],
    innervation: [
      "radial nerve (posterior interosseous nerve)"
    ],
    bloodSupply: [
      "posterior interosseous artery",
    ],
    actions: [
      "extends distal phalanx of thumb at interphalangeal",
      "metacarpophalangeal joints",
    ]
  },
  {
    name: ["flexor carpi radialis"], 
    group: ["anterior forearm"],
    origin: [
      "medial epicondyle of humerus",
    ],
    insertion: [
      "base of 2nd metacarpal"
    ],
    innervation: [
      "median nerve"
    ],
    bloodSupply: [
      "radial artery",
    ],
    actions: [
      "flexes hand at wrist",
      "abducts hand at wrist",
    ]
  },
  {
    name: ["flexor carpi ulnaris"], 
    group: ["anterior forearm"],
    origin: [
      "superficial head: medial epicondyle of humerus",
      "deep head: olecranon",
      "deep head: posterior border of ulna",
    ],
    insertion: [
      "pisiform bone", 
      "hook of hamate bone", 
      "base of 5th metacarpal"
    ],
    innervation: [
      "ulnar nerve"
    ],
    bloodSupply: [
      "posterior ulnar recurrent artery",
    ],
    actions: [
      "flexes hand at wrist",
      "adducts hand at wrist",
    ]
  },
  {
    name: ["flexor digiti minimi brevis"], 
    group: ["hand"],
    origin: [
      "flexor retinaculum",
      "hook of hamate bone",
    ],
    insertion: [
      "medial side of base of proximal phalanx of little finger"
    ],
    innervation: [
      "ulnar nerve (deep branch)"
    ],
    bloodSupply: [
      "deep palmar branch of ulnar artery",
    ],
    actions: [
      "flexes proximal phalanx of little finger",
    ]
  },
  {
    name: ["flexor digitorum profundus"], 
    group: ["anterior forearm"],
    origin: [
      "medial surface of proximal 3/4 of ulna",
      "anterior surface of proximal 3/4 of ulna",
      "interosseous membrane",
    ],
    insertion: [
      "palmar base of distal phalangeal bones of medial four digits"
    ],
    innervation: [
      "medial part: ulnar nerve",
      "lateral part: median nerve"
    ],
    bloodSupply: [
      "anterior interosseous artery", 
      "muscular branches of ulnar artery",
    ],
    actions: [
      "flexes distal phalangeal bones of medial four digits", 
      "assists with flexion of hand at wrist",
    ]
  },
  {
    name: ["flexor digitorum superficialis"], 
    group: ["anterior forearm"],
    origin: [
      "humeroulnar head: medial epicondyle of humerus",
      "humeroulnar head: coronoid",
      "humeroulnar head: process of ulna",
      "humeroulnar head: ulnar collateral ligament",
      "radial head: superior half of anterior radius"
    ],
    insertion: [
      "bodies of middle phalangeal bones of medial four digits"
    ],
    innervation: [
      "median nerve"
    ],
    bloodSupply: [
      "ulnar and radial arteries",
    ],
    actions: [
      "flexes middle phalangeal bones of medial four digits", 
      "flexes proximal phalangeal bones of medial four digits", 
      "flexes hand at wrist",
    ]
  },
  {
    name: ["flexor pollicis brevis"], 
    group: ["hand"],
    origin: [
      "flexor retinaculum",
      "tubercle of trapezium bone",
    ],
    insertion: [
      "lateral side of base of proximal phalanx of thumb"
    ],
    innervation: [
      "median nerve (recurrent branch)"
    ],
    bloodSupply: [
      "superficial palmar branch of radial artery",
    ],
    actions: [
      "flexes proximal phalanx of thumb",
    ]
  },
  {
    name: ["flexor pollicis longus"], 
    group: ["anterior forearm"],
    origin: [
      "anterior surface of radius",
      "interosseous membrane",
    ],
    insertion: [
      "palmar base of distal phalanx of thumb"
    ],
    innervation: [
      "median nerve (anterior interosseous nerve)"
    ],
    bloodSupply: [
      "anterior interosseous artery",
    ],
    actions: [
      "flexes phalangeal bones of thumb",
    ]
  },
  {
    name: ["infraspinatus"], 
    group: ["shoulder"],
    origin: [
      "infraspinous fossa of scapula",
      "deep fascia",
    ],
    insertion: [
      "greater tubercle of humerus"
    ],
    innervation: [
      "suprascapular nerve"
    ],
    bloodSupply: [
      "suprascapular artery",
    ],
    actions: [
      "lateral rotation of arm",
    ]
  },
  {
    name: ["latissimus dorsi"], 
    group: ["shoulder"],
    origin: [
      "spinous processes of T7–L5",
      "thoracolumbar fascia", 
      "iliac crest", 
      "last three ribs",
    ],
    insertion: [
      "intertubercular sulcus of humerus"
    ],
    innervation: [
      "thoracodorsal nerve"
    ],
    bloodSupply: [
      "thoracodorsal artery", 
      "dorsal perforating branches of 9th, 10th, and 11th posterior intercostal artertt", 
      "subcostal artery",
      "first three lumbar arteries",
    ],
    actions: [
      "extends, humerus",
      "adducts humerus",
      "medially rotates humerus",
    ]
  },
  {
    name: ["levator scapulae"], 
    group: ["superficial back"],
    origin: [
      "posterior tubercles of transverse processes of C1–C4",
    ],
    insertion: [
      "medial border of scapula from superior angle to spine"
    ],
    innervation: [
      "anterior rami of C3–C4 and dorsal scapular nerve"
    ],
    bloodSupply: [
      "dorsal scapular artery",
      "transverse cervical artery", 
      "ascending cervical artery",
    ],
    actions: [
      "elevates scapula medially", 
      "inferiorly rotates glenoid fossa",
    ]
  },
  {
    name: ["lumbrical, first and second"], 
    group: ["hand"],
    origin: [
      "lateral two tendons of flexor digitorum profundus",
    ],
    insertion: [
      "lateral sides of extensor expansion of digits 2 and 3"
    ],
    innervation: [
      "median nerve (digital branches)"
    ],
    bloodSupply: [
      "superficial palmar arch",
      "deep palmar arch",
    ],
    actions: [
      "extend digits at interphalangeal joints", 
      "flex metacarpophalangeal joints",
    ]
  },
  {
    name: ["lumbrical, third and fourth"], 
    group: ["hand"],
    origin: [
      "medial three tendons of flexor digitorum profundus",
    ],
    insertion: [
      "lateral sides of extensor expansion of digits 4 and 5"
    ],
    innervation: [
      "ulnar nerve (deep branch)"
    ],
    bloodSupply: [
      "superficial and deep palmar arches",
    ],
    actions: [
      "extend digits at interphalangeal joints", 
      "flex metacarpophalangeal joints",
    ]
  },
  {
    name: ["opponens digiti minimi"], 
    group: ["hand"],
    origin: [
      "flexor retinaculum",
      "hook of hamate bone",
    ],
    insertion: [
      "palmar surface of 5th metacarpal"
    ],
    innervation: [
      "ulnar nerve (deep branch)"
    ],
    bloodSupply: [
      "deep palmar branch of ulnar artery",
    ],
    actions: [
      "draws 5th metacarpal anteriorly",
      "rotates 5th metacarpal to face thumb",
    ]
  },
  {
    name: ["opponens pollicis"], 
    group: ["hand"],
    origin: [
      "flexor retinaculum",
      "tubercle of trapezium bone",
    ],
    insertion: [
      "lateral side of 1st metacarpal"
    ],
    innervation: [
      "median nerve (recurrent branch)"
    ],
    bloodSupply: [
      "superficial palmar branch of radial artery",
    ],
    actions: [
      "draws 1st metacarpal forward",
      "rotates 1st metacarpal medially",
    ]
  },
  {
    name: ["palmar interosseous muscles"], 
    group: ["hand"],
    origin: [
      "sides of metacarpal bones 2, 4, and 5",
    ],
    insertion: [
      "bases of proximal phalanx",
      "extensor expansion of digits 2, 4, and 5"
    ],
    innervation: [
      "ulnar nerve (deep branch)"
    ],
    bloodSupply: [
      "deep palmar arch",
    ],
    actions: [
      "adducts digits",
      "flexes digits",
      "extends interphalangeal joints",
    ]
  },
  {
    name: ["palmaris brevis"], 
    group: ["hand"],
    origin: [
      "palmar aponeurosis",
      "flexor retinaculum",
    ],
    insertion: [
      "skin of medial border of palm"
    ],
    innervation: [
      "superficial branch of ulnar nerve"
    ],
    bloodSupply: [
      "superficial palmar arch",
    ],
    actions: [
      "deepens hollow of hand", 
      "assists grip",
    ]
  },
  {
    name: ["palmaris longus"], 
    group: ["anterior forearm"],
    origin: [
      "medial epicondyle of humerus",
    ],
    insertion: [
      "distal half of flexor retinaculum",
      "palmar aponeurosis"
    ],
    innervation: [
      "median nerve"
    ],
    bloodSupply: [
      "posterior ulnar recurrent artery",
    ],
    actions: [
      "flexes hand at wrist",
      "tenses palmar aponeurosis",
    ]
  },
  {
    name: ["pectoralis major"], 
    group: ["Pectoral/axillary regions"],
    origin: [
      "sternal half of clavicle",
      "sternum to 7th rib",
      "cartilages of true ribs", 
      "aponeurosis of external abdominal oblique muscle",
    ],
    insertion: [
      "lateral lip of intertubercular sulcus of humerus"
    ],
    innervation: [
      "medial pectoral nerves",
      "lateral pectoral nerves"
    ],
    bloodSupply: [
      "pectoral branch of thoracoacromial artery", 
      "perforating branches of internal thoracic artery",
    ],
    actions: [
      "flexes arm",
      "adducts arm",
      "medially rotates arm",
    ]
  },
  {
    name: ["pectoralis minor"], 
    group: ["pectoral/axillary regions"],
    origin: [
      "outer surface of upper margin of ribs 3–5",
    ],
    insertion: [
      "coracoid process of scapula"
    ],
    innervation: [
      "medial pectoral nerve"
    ],
    bloodSupply: [
      "pectoral branch of thoracoacromial artery", 
      "superior thoracic artery",
      "lateral thoracic artery",
    ],
    actions: [
      "lowers lateral angle of scapula",
      "protracts scapula",
    ]
  },
  {
    name: ["pronator quadratus"], 
    group: ["anterior forearm"],
    origin: [
      "distal fourth of anterior ulna",
    ],
    insertion: [
      "distal fourth of anterior radius"
    ],
    innervation: [
      "median nerve (anterior interosseous nerve)"
    ],
    bloodSupply: [
      "anterior interosseous artery",
    ],
    actions: [
      "pronates forearm",
    ]
  },
  {
    name: ["pronator teres"], 
    group: ["anterior forearm"],
    origin: [
      "medial epicondyle of humerus",
      "coronoid process of ulna",
    ],
    insertion: [
      "midway along lateral surface of radius"
    ],
    innervation: [
      "median nerve"
    ],
    bloodSupply: [
      "anterior ulnar recurrent artery",
    ],
    actions: [
      "pronates forearm elbow",
      "weakly flexes elbow",
    ]
  },
  {
    name: ["rhomboid major"], 
    group: ["superficial back"],
    origin: [
      "spinous processes of T2–T5 vertebrae",
    ],
    insertion: [
      "medial border of scapula below base of spine of scapula"
    ],
    innervation: [
      "dorsal scapular nerve"
    ],
    bloodSupply: [
      "dorsal scapular OR deep branch of transverse cervical artery", 
      "dorsal perforating branches of upper five or six posterior intercostal arteries",
    ],
    actions: [
      "fixes scapula to thoracic wall",
      "retracts scapula to depress glenoid cavity",
      "rotates scapula to depress glenoid cavity",
    ]
  },
  {
    name: ["rhomboid minor"], 
    group: ["superficial back"],
    origin: [
      "nuchal ligament", 
      "spines of C7 and T1 vertebrae",
    ],
    insertion: [
      "medial border of scapula at spine of scapula"
    ],
    innervation: [
      "dorsal scapular nerve"
    ],
    bloodSupply: [
      "dorsal scapular artery OR deep branch of transverse cervical artery", 
      "dorsal perforating branches of upper five or six posterior intercostal arteries",
    ],
    actions: [
      "fixes scapula to thoracic wall",
      "retracts scapula to depress glenoid cavity",
      "rotates scapula to depress glenoid cavity",
    ]
  },
  {
    name: ["serratus anterior"], 
    group: ["shoulder"],
    origin: [
      "lateral surfaces of upper 8–9 ribs",
    ],
    insertion: [
      "costal surface of medial border of scapula"
    ],
    innervation: [
      "long thoracic nerve"
    ],
    bloodSupply: [
      "lateral thoracic artery",
    ],
    actions: [
      "protracts scapula",
      "rotates scapula",
      "holds scapula against thoracic wall",
    ]
  },
  {
    name: ["subclavius"], 
    group: ["shoulder"],
    origin: [
      "upper border of 1st rib and its cartilage",
    ],
    insertion: [
      "inferior surface of middle third of clavicle"
    ],
    innervation: [
      "nerve to subclavius"
    ],
    bloodSupply: [
      "clavicular branch of thoracoacromial artery",
    ],
    actions: [
      "anchors clavicle",
      "depresses clavicle",
    ]
  },
  {
    name: ["subscapularis"], 
    group: ["shoulder"],
    origin: [
      "subscapular fossa",
    ],
    insertion: [
      "lesser tubercle of humerus"
    ],
    innervation: [
      "upper subscapular nerve",
      "lower subscapular nerve"
    ],
    bloodSupply: [
      "subscapular artery",
      "lateral thoracic artery",
    ],
    actions: [
      "medially rotates arm",
      "adducts arm",
      "helps hold humeral head in glenoid fossa",
    ]
  },
  {
    name: ["supinator"], 
    group: ["posterior forearm"],
    origin: [
      "lateral epicondyle of humerus", 
      "radial collateral ligament",
      "anular ligament", 
      "supinator fossa",
      "crest of ulna",
    ],
    insertion: [
      "lateral surface of proximal third of radius",
      "posterior surface of proximal third of radius",
      "anterior surfaces of proximal third of radius"
    ],
    innervation: [
      "radial nerve (deep branch)"
    ],
    bloodSupply: [
      "radial recurrent artery",
      "posterior interosseous arteries",
    ],
    actions: [
      "supinates forearm",
    ]
  },
  {
    name: ["supraspinatus"], 
    group: ["shoulder"],
    origin: [
      "supraspinous fossa of scapula",
      "deep fascia",
    ],
    insertion: [
      "greater tubercle of humerus"
    ],
    innervation: [
      "suprascapular nerve"
    ],
    bloodSupply: [
      "suprascapular artery",
    ],
    actions: [
      "initiates arm abduction",
    ]
  },
  {
    name: ["teres major"], 
    group: ["shoulder"],
    origin: [
      "posterior surface of inferior angle of scapula",
    ],
    insertion: [
      "medial lip of intertubercular sulcus of humerus"
    ],
    innervation: [
      "lower subscapular nerve"
    ],
    bloodSupply: [
      "circumflex scapular artery",
    ],
    actions: [
      "adducts arm",
      "medially rotates arm",
    ]
  },
  {
    name: ["teres minor"], 
    group: ["shoulder"],
    origin: [
      "upper 2/3 of posterior surface of lateral border of scapula",
    ],
    insertion: [
      "inferior facet of greater tubercle of humerus"
    ],
    innervation: [
      "axillary nerve"
    ],
    bloodSupply: [
      "circumflex scapular artery",
    ],
    actions: [
      "laterally rotates arm",
    ]
  },
  {
    name: ["trapezius"], 
    group: ["superficial back"],
    origin: [
      "superior nuchal line",
      "external occipital protuberance",
      "nuchal ligament",
      "spinous processes of C7–T12",
    ],
    insertion: [
      "lateral third of clavicle", 
      "acromion", 
      "spine of scapula"
    ],
    innervation: [
      "accessory nerve (cranial nerve XI)"
    ],
    bloodSupply: [
      "transverse cervical artery", 
      "dorsal perforating branches of posterior intercostal arteries",
    ],
    actions: [
      "elevates scapula",
      "retracts scapula",
      "rotates scapula",
      "lower fibers depress scapula",
    ]
  },
  {
    name: ["triceps brachii"], 
    group: ["arm"],
    origin: [
      "long head: infraglenoid tubercle of scapula",
      "lateral head: upper half of posterior humerus",
      "medial head: distal 2/3 of medial and posterior humerus",
    ],
    insertion: [
      "posterior surface of olecranon process of ulna"
    ],
    innervation: [
      "radial nerve"
    ],
    bloodSupply: [
      "branch of profunda brachii artery",
    ],
    actions: [
      "extends forearm at elbow",
      "long head stabilizes head of abducted humerus",
      "extends arm",
      "stabilizes adducts arm",
    ]
  },
]
