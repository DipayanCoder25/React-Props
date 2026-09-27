import Navbar from './components/Navbar';

const students = [
  {
    id: 1,
    name: "Rahim",
    age: "18",
    course: "React JS"
  },
  {
    id: 2,
    name: "Karim",
    age: "16",
    course: "Python"
  },
  {
    id: 3,
    name: "Nadia",
    age: "18",
    course: "JavaScript"
  }
];

const App = () => {
  return (
    <div>
      {students.map((student) => (
        <Navbar
       
          id={student.id}
          name={student.name}
          age={student.age}
          course={student.course}
        />
      ))}
    </div>
  );
};

export default App;
