const parentPath = "dashboard";

let routes = [
  {
    listText: "Home",
    parentPath,
    childElements: [],
  },
  {
    listText: "Test Test 2",
    parentPath,
    childElements: [
      {
        listText: "Child 1",
      },
    ],
  },
  {
    listText: "Test Test 3",
    parentPath,
    childElements: [
      {
        listText: "Child 1",
      },
      {
        listText: "Child 2",
      },
      {
        listText: "Child 3",
      },
    ],
  },
];

export default routes;
