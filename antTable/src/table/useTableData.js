import { useState } from "react";

export function useTableData(initialData) {
  const [dataSource] = useState(() => {
    const data = [];
    const departments = [
      "Engineering",
      "Marketing",
      "Sales",
      "HR",
      "Design",
      "Finance",
      "Operations",
    ];
    const cities = [
      "New York",
      "Los Angeles",
      "Chicago",
      "Houston",
      "Phoenix",
      "Philadelphia",
      "San Antonio",
    ];

    for (let i = 1; i <= 2000; i++) {
      data.push({
        key: i.toString(),
        id: i,
        name: `Employee ${i}`,
        firstName: `First${i}`,
        lastName: `Last${i}`,
        age: 22 + (i % 40),
        email: `employee${i}@company.com`,
        phone: `+1-555-${String(i % 10000).padStart(4, "0")}`,
        address: `${100 + i} ${cities[i % cities.length]} Street, Suite ${
          i % 100
        }`,
        salary: 45000 + i * 500 + Math.random() * 20000,
        department: departments[i % departments.length],
        hireDate: new Date(
          2020 + (i % 4),
          i % 12,
          (i % 28) + 1
        ).toLocaleDateString(),
        status: i % 3 === 0 ? "Active" : i % 7 === 0 ? "Inactive" : "Active",
        manager: `Manager ${Math.ceil(i / 10)}`,
        location: cities[i % cities.length],
        experience: `${(i % 15) + 1} years`,
      });
    }
    return data;
  });
  return initialData || dataSource;
}
