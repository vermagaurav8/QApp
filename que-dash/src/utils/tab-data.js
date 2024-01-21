
const tabulatorData = [
  { id: 1, name: 'John Doe', progress: 75, gender: 'Male', rating: 4, col: 'Blue', dob: '1990-05-15', car: true },
  { id: 2, name: 'Jane Doe', progress: 60, gender: 'Female', rating: 5, col: 'Red', dob: '1995-08-22', car: false },
  { id: 3, name: 'Bob Smith', progress: 80, gender: 'Male', rating: 3, col: 'Green', dob: '1985-02-10', car: true },
  { id: 4, name: 'Alice Johnson', progress: 90, gender: 'Female', rating: 5, col: 'Yellow', dob: '1988-11-30', car: false },
  { id: 5, name: 'David Brown', progress: 40, gender: 'Male', rating: 2, col: 'Blue', dob: '1992-07-05', car: true },
  { id: 6, name: 'Emma White', progress: 65, gender: 'Female', rating: 4, col: 'Red', dob: '1997-04-18', car: false },
  { id: 7, name: 'Michael Lee', progress: 55, gender: 'Male', rating: 3, col: 'Green', dob: '1982-09-12', car: true },
  { id: 8, name: 'Sophia Kim', progress: 85, gender: 'Female', rating: 5, col: 'Yellow', dob: '1989-12-25', car: false },
  { id: 9, name: 'James Wilson', progress: 70, gender: 'Male', rating: 4, col: 'Blue', dob: '1994-03-08', car: true },
  { id: 10, name: 'Olivia Davis', progress: 50, gender: 'Female', rating: 3, col: 'Red', dob: '1987-06-20', car: false },
];

var tableDataNested = [
  {
    name: "Oli Bob", location: "United Kingdom", gender: "male", col: "red", dob: "14/04/1984", _children: [
      { name: "Mary May", location: "Germany", gender: "female", col: "blue", dob: "14/05/1982" },
      { name: "Christine Lobowski", location: "France", gender: "female", col: "green", dob: "22/05/1982" },
      {
        name: "Brendon Philips", location: "USA", gender: "male", col: "orange", dob: "01/08/1980", _children: [
          { name: "Margret Marmajuke", location: "Canada", gender: "female", col: "yellow", dob: "31/01/1999" },
          { name: "Frank Harbours", location: "Russia", gender: "male", col: "red", dob: "12/05/1966" },
        ]
      },
    ]
  },
  { name: "Jamie Newhart", location: "India", gender: "male", col: "green", dob: "14/05/1985" },
  {
    name: "Gemma Jane", location: "China", gender: "female", col: "red", dob: "22/05/1982", _children: [
      { name: "Emily Sykes", location: "South Korea", gender: "female", col: "maroon", dob: "11/11/1970" },
    ]
  },
  { name: "James Newman", location: "Japan", gender: "male", col: "red", dob: "22/03/1998" },
];


export default tabulatorData;
