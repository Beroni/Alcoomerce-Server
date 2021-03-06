module.exports = {
  up: QueryInterface => {
    return QueryInterface.bulkInsert(
      'products',
      [
        {
          name: 'Tiquira',
          category_id: 1,
          quantity: 4,
          price: 30.0,
          url:
            'https://static.wixstatic.com/media/79163a_45ab884b070542aea45a522f45e0e1cd~mv2.jpeg/v1/fill/w_630,h_418,al_c,q_80,usm_0.66_1.00_0.01/79163a_45ab884b070542aea45a522f45e0e1cd~mv2.webp',
          description:
            'Cachaçada artesanal produzida pela destilação artesanal da mandioca fermentada. Observação: Segue a lenda que se você beber tiquira e tomar banho, você pode chegar a morrer.',
          info: 'Teor Alcoólico: 100%',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Chicote',
          category_id: 2,
          quantity: 10,
          price: 0.89,
          url:
            'https://http2.mlstatic.com/D_NQ_NP_845690-MLB40454577540_012020-O.webp',
          description:
            'Produzido nos confins do inferno, feito para matar estudantes em confraternizações.',
          info: 'Teor Alcoólico: 100%',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Glacial',
          category_id: 3,
          quantity: 10,
          price: 1.5,
          url:
            'https://apoioentrega.vteximg.com.br/arquivos/ids/458690-1000-1000/157053.jpg?v=637279264847570000',
          description: 'Cerveja Barata',
          info: 'Teor Alcoólico: 100%',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Black Label',
          category_id: 4,
          quantity: 10,
          price: 125.0,
          url:
            'https://cdn.awsli.com.br/800x800/91/91186/produto/3172537/3bd879a51f.jpg',
          description: 'Whisky escocês',
          info: 'Teor Alcoólico: 100%',
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  down: () => {},
};
