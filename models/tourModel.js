
let tourArray = [];

let nextId = 1;

function getAll() {
  return tourArray;
}

function addOne(tourData) {
  // Check if any parameter is empty or undefined
  const { name, info, image, price } = tourData;
  if (!name | !info | !image | !price) {
    return false;
  }

  const newItem = {
    id: nextId++,
    ...tourData,
  };

  tourArray.push(newItem);
  return newItem;
}

function findById(id) {
  const numericId = Number(id);
  const item = tourArray.find((item) => item.id === numericId);
  return item || false;
}

function updateOneById(id, updatedData) {
  const tour = findById(id);
  if (tour) {
    Object.assign(tour, updatedData); // Update properties using Object.assign
    return tour;
  }
  return false;
}

function deleteOneById(id) {
  const item = findById(id);
  if (item) {
    const initialLength = tourArray.length;
    tourArray = tourArray.filter((item) => item.id !== Number(id));
    return tourArray.length < initialLength; // Indicate successful deletion if the length has decreased
  }
  return false; // Return false if the item was not found
}

if (require.main === module) {
  let result = addOne("Paris in 7 Days Tour", "Paris is synonymous.", "https://www.course-api.com/images/tours/tour-1.jpeg", 500);
  console.log(result);
  result = addOne("Finland in 7 Days Tour", "Finland is synonymous.", "https://www.course-api.com/images/tours/tour-2.jpeg", 800);
  console.log(result);
  console.log(`getAll called: ${getAll()}`);
  console.log(`findById called: ${findById(2)}`);
  console.log(
    `updateById called: ${updateOneById(2, {
      name: "Italy in 7 Days Tour",
      info: "Paris is synonymous.",
      image: "https://www.course-api.com/images/tours/tour-2.jpeg",
      price: 800
    })}`
  );

console.log(`findById called after item updated: ${findById(2)}`);
console.log(`deleteById called: ${deleteOneById(2)}`);
console.log(`findById called after item deleted: ${findById(2)}`);
}

const Tour = {
  getAll,
  addOne,
  findById,
  updateOneById,
  deleteOneById,
};

module.exports = Tour;