function insertionSortShoesBySize(shoes) {
    const sortedShoes = [];
    const result = [];
  
    for (const shoe of shoes) {
      const { size } = shoe;
      let i = 0;
  
      while (i < sortedShoes.length && sortedShoes[i].size < size) {
        i++;
      }
  
      sortedShoes.splice(i, 0, shoe);
      result.push([...sortedShoes]);
    }
  
    return result;
  }
  
// Data //
  const shoes = [
    { size: 9, brand: "Nike", color: "pink" },
    { size: 8, brand: "Adidas", color: "red" },
    { size: 10, brand: "New Balance", color: "black" },
    { size: 9, brand: "Puma", color: "white" },
    { size: 8.5, brand: "Bobs", color: "black"}
  ];
  
  const sortedShoesHistory = insertionSortShoesBySize(shoes);
  
  console.log(sortedShoesHistory);