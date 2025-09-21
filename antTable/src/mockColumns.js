export const mockColumns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    width: 100,
    fixed: "left",
    resizable: true,
    // filters: [
    //   {
    //     text: "Joe",
    //     value: "Joe",
    //   },
    //   {
    //     text: "John",
    //     value: "John",
    //   },
    // ],
    // onFilter: (value, record) => record.name.indexOf(value) === 0,
  },
  {
    title: "Other",
    resizable: true,
    children: [
      {
        title: "Age",
        dataIndex: "age",
        key: "age",
        width: 150,
        resizable: true,
        // sorter: (a, b) => a.age - b.age,
      },
      {
        title: "Address",
        resizable: true,
        children: [
          {
            title: "Street",
            dataIndex: "street",
            key: "street",
            width: 150,
            resizable: true,
          },
          {
            title: "Block",
            resizable: true,
            children: [
              {
                title: "Building",
                dataIndex: "building",
                key: "building",
                width: 100,
                resizable: true,
              },
              {
                title: "Door No.",
                dataIndex: "number",
                key: "number",
                resizable: true,
                width: 100,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    title: "Company",
    resizable: true,
    children: [
      {
        title: "Company Address",
        dataIndex: "companyAddress",
        key: "companyAddress",
        width: 200,
        resizable: true,
      },
      {
        title: "Company Name",
        dataIndex: "companyName",
        key: "companyName",
        resizable: true,
        width: 150,
      },
    ],
  },
  {
    title: "Gender",
    dataIndex: "gender",
    key: "gender",
    width: 80,
    fixed: "right",
    resizable: true,
  },
];
