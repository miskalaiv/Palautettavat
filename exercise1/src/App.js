import React from 'react';
import styles from './App.module.css';
import Header from './components/Header';
import NewsNotifications from './components/NewsNotifications';
import MainSection from './components/MainSection';
import SideSection from './components/SideSection';



const sidedata = [

  {
    number: '1',
    topic: 'Puukkosarja',
    body: 'Eipä ollu Kairaajilta puukkoa tuolla. "Erikoisen näköinen".'
  },

  {
    number: '2',
    topic: 'Rakentaminen',
    body: 'Ukkoja tarvitaan kaveriksi. "Pitäs viiä piipunpelti, palovillat, patja jne pikkukivaa kämpälle."'
  },

  {
    number: '3',
    topic: 'Hirvenmetsästys',
    body: 'Ran­nik­ko-Poh­jan­maal­la myönnettiin tulevalle met­säs­tys­kau­del­le viime kautta vähemmän hir­ven­met­säs­tys­lu­pia'
  },

  {
    number: '4',
    topic: 'Hirvikolarit',
    body: 'Lapin hirvikolarit vähentyneet lähes puoleen'
  },
  
  {
    number: '5',
    topic: 'Salametästys',
    body: 'Poliisi tutkii epäiltyä hirven salakaatoa Inarissa'
  },

  {
    number: '6',
    topic: 'Vesilinnut',
    body: 'Vesilinnuille perustetaan le­väh­dys­paik­ko­ja, joissa ei saa metsästää – metsästäjät ehdottaneet alueita itse'
  },

  {
    number: '7',
    topic: 'Uhanalaiset lajit',
    body: 'Kiljuhanhet pysähtyivät Li­min­gan­lah­del­le, lin­tu­har­vi­nai­suus poikkesi alueelle myös viime syksynä'
  },

]

const maindata=[
  {
    topic:'HUUTOKAUPPA',
    body:'Halti Passi eräreppu (kätevä vaikka passi metsästyksessä, pystyy ilmeisesti hyödyntämään muissakin metsästysmuodoissa) tilavuus kymmeniä litroja. ',
    kuva: 'reppu.png',
    timeplace: 'WhatsApp 11.18'
  },

  {
    topic:'LUONTO',
    body:'Turistit rakentelivat omituisen näyn yhdelle Suomen kuuluisimmista tuntureista – sosiaalisessa mediassa alkoi vääntö siitä, mitä perinne­maisemassa saa tehdä',
    kuva: 'maisema.png',
    timeplace: 'Lappi 14:23',

  }
]


function App() {
//div sidebyside tekkee boksin ja MainSection ja SideSection on bokseja sen sisällä. Uutiset boksien sisälle?
  return (

    <div>   
      <Header />
      <NewsNotifications topic='Investointiriihi' body='Oisko siinä Kairaajille seuraava hankinta! "Kyllähän tuohon Tauskia laulais Posiolla lammen rannalla."' />
      <NewsNotifications topic='Mutjun kämppä valmistui vauhdilla' body='"Sehän on tehyn näköinen kokonaisuus"' />
      <NewsNotifications topic='Kumisaappaat herättää keskustelua' body='"Nuo perus nokialaiset on aivan kauheat kävellä.."' />
     
      <div className={styles.sidebyside}>
      

      <div className={styles.containerMain}>
        {
          maindata.map(element => <MainSection kuva={element.kuva} topic={element.topic} body={element.body} timeplace={element.timeplace} /> )
        }
      </div>
  
      <div className={styles.sidecontainer}>
        {
          sidedata.map(element => <SideSection number={element.number} topic={element.topic} body={element.body} /> )
        }
      </div>
      
      </div>
    </div>

  );
}


export default App;