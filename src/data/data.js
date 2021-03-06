export const listeTheme = [
    {
        id :1,
        titre: 'Histoire',
    },

    {
        id:2,
        titre: 'Peinture',
    },

    {
        id:3,
        titre: 'Cinéma',
    }

]

export const listeQuiz = [
    {
        id:1,
        titre:'Les grands monarques',
        idTheme:1,
    },

    {
        id:2,
        titre:'Waterloo',
        idTheme:1,
    },

    {
        id: 3,
        titre:"Picasso",
        idTheme: 2,
    },

    {
        id:4,
        titre: "Réalisateurs",
        idTheme:3
    }
    
]

export function getTheme(id) {
    return listeTheme.find(item => item.id === id);
  }
  
  export function getQuiz(id) {
    return listeQuiz.find(item => item.id === id);
  }

   
  export function getListeQuiz(idTheme){
    return listeQuiz.filter(item => item.idTheme === idTheme);
  }
  