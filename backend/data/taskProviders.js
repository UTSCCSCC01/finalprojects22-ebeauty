import bcrypt from 'bcryptjs';
const taskProviders = [
  {
    name: "Admin",
    title: "Admin",
    address: "123 Admin St",
    city: "Admin",
    state: "Admin",
    country: "Admin",
    email: "admin@gmail.com",
    password: bcrypt.hashSync("admin", 10),
    rating: 5.0,
    isAdmin: true
  },
  {
    name: "John Smith",
    title: "Nail Technician",
    address: "123 Smith St",
    city: "New York",
    state: "NY",
    country: "USA",
    email: "john_smith@gmail.com",
    password: bcrypt.hashSync("123456", 10),
    rating: 4.3,
    isAdmin: false
  },
  {
    name: "Jane Doe",
    title: "Hair Stylist",
    address: "123 Doe St",
    city: "Toronto",
    state: "ON",
    country: "Canad",
    email: "jane_doe@gmail.com",
    password: bcrypt.hashSync("123456", 10),
    rating: 4.5,
    isAdmin: false
  },
  {
    name: "John Doe",
    title: "Nail Technician",
    address: "123 Doe St",
    city: "Richmond",
    state: "BC",
    country: "Canada",
    email: "john_doe@gmail.com",
    password: bcrypt.hashSync("123456", 10),
    rating: 4.8,
    isAdmin: false
  }
];

export default taskProviders;