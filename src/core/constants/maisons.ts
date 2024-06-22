/**
    * @description      : 
    * @author           : Hp
    * @group            : 
    * @created          : 22/06/2024 - 19:20:37
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 22/06/2024
    * - Author          : Hp
    * - Modification    : 
**/
interface MMaisons {
    id :string;
    quartier:string;
    rue:number;
    color:string;
    name:string;
    prix:string;
}

const maisons: MMaisons[] = [
    {
      id : '12a',
      quartier: 'londres',
      rue:1200,
      color:'marron', 
      name:'manoir', 
      prix:'150$', 
    },
    {
      id : '12b',
      quartier: 'paris',
      rue:200,
      color:'bleu', 
      name:'vignes', 
      prix:'100$', 
    },
    {
      id : '12a12',
      quartier: 'new york',
      rue:4500,
      color:'verdatre', 
      name:'hollywood',
      prix: '300$' 
    },
    {
      id : '45ac',
      quartier: 'boca',
      rue:1234,
      color:'blue', 
      name:'studio', 
      prix:'50$', 
    },
    {
      id : '1453ere',
      quartier: 'manhattan',
      rue:34650,
      color:'gris crotoire', 
      name:'closerie', 
      prix:'210$' 
    },
]

export default maisons