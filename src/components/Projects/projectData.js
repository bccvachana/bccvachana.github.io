import shelfOfYou_1 from "../../assets/Projects/Shelf of You/1.svg";
import shelfOfYou_2 from "../../assets/Projects/Shelf of You/2.jpg";
import shelfOfYou_3 from "../../assets/Projects/Shelf of You/3.jpg";

import eaterEgg_1 from "../../assets/Projects/Eater Egg/1.jpg";
import eaterEgg_2 from "../../assets/Projects/Eater Egg/2.jpg";

import wooBin_1 from "../../assets/Projects/WooBIN/1.jpg";
import wooBin_2 from "../../assets/Projects/WooBIN/2.jpg";
import wooBin_3 from "../../assets/Projects/WooBIN/3.jpg";
import wooBin_4 from "../../assets/Projects/WooBIN/4.jpg";

import bodogemuShoppu_1 from "../../assets/Projects/BodogemuShoppu/1.jpg";
import bodogemuShoppu_2 from "../../assets/Projects/BodogemuShoppu/2.jpg";

import nooRec_1 from "../../assets/Projects/NooRec/1.png";
import nooRec_2 from "../../assets/Projects/NooRec/2.png";
import nooRec_3 from "../../assets/Projects/NooRec/3.png";
import nooRec_4 from "../../assets/Projects/NooRec/4.png";
import nooRec_5 from "../../assets/Projects/NooRec/5.png";

export default [
  {
    title: "NooRec",
    caption: "Web Application and Device for Basic Medical Data Recording",
    link: [
      { name: "NooRec-Website", to: "https://noorec-kmutt.web.app/" },
      {
        name: "GitHub-Website",
        to: "https://github.com/bccvachana/noorec-kmutt",
      },
      {
        name: "GitHub-Electron",
        to: "https://github.com/bccvachana/noorec-electron",
      },
      {
        name: "GitHub-Arduino",
        to: "https://github.com/bccvachana/noorec-arduino",
      },
    ],
    detail:
      "NooRec is a web application and device for basic medical data recording. The device can record weight, height, body temperature, blood pressure, rate and oxygen saturation. Web application consists of user page and admin page. The collected data will be analyzed and visualized on web application.",
    year: "2019 - 2020",
    cover: nooRec_1,
    hash: ["React", "Electron", "Firebase", "Arduino"],
    images: [nooRec_1, nooRec_2, nooRec_3, nooRec_4, nooRec_5],
  },
  {
    title: "BodogemuShoppu",
    caption: "Board Games E-commerce Website",
    link: [
      {
        to:
          "https://github.com/bccvachana/Bodogemushoppu-Board-Game-Online-Shop",
      },
    ],
    detail:
      "BodogemuShoppu is a board games e-commerce website. Users can buy or sell board games through this website.",
    year: "2019",
    cover: bodogemuShoppu_1,
    hash: ["PHP", "SQL"],
    images: [bodogemuShoppu_1, bodogemuShoppu_2],
  },
  {
    title: "WooBIN",
    caption: "Interactive Waste-Sorting Assistant",
    link: [
      {
        to: "https://github.com/bccvachana/WOOBIN",
      },
    ],
    detail:
      "WooBIN is an interactive waste-sorting assistant which can identify what type of waste by using camera and display different emotional faces to respond users' behavior.",
    year: "2018 - 2019",
    cover: wooBin_1,
    hash: ["Unity", "Tensorflow", "ObjectDetection", "Arduino"],
    images: [wooBin_1, wooBin_2, wooBin_3, wooBin_4],
  },
  {
    title: "Eater Egg",
    caption: "Restaurant-Finding Mobile Application Concept",
    link: [
      {
        name: "Prototype",
        to:
          "https://xd.adobe.com/view/389268ed-8382-4e0a-614b-3e559eaf29c1-4ea3",
      },
    ],
    detail:
      "Eater Egg is an augmented reality restaurant-finding mobile application concept.",
    year: "2018",
    cover: eaterEgg_2,
    hash: ["Startup", "Pitching", "UX/UI"],
    images: [eaterEgg_1, eaterEgg_2],
  },
  {
    title: "Shelf of You",
    caption: "Smart Shelf",
    link: [
      {
        to: "https://github.com/bccvachana/SHELF-OF-YOU",
      },
    ],
    detail:
      "Shelf of You is a smart shelf which can detect the number of goods on it by using load cell sensors and send the result to android smartphone by using bluetooth to display on mobile application.",
    year: "2017",
    cover: shelfOfYou_1,
    hash: ["Arduino", "Android"],
    images: [shelfOfYou_1, shelfOfYou_2, shelfOfYou_3],
  },
];
