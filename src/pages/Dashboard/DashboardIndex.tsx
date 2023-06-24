import DataTable from "../../config/component/DataTable/DataTable";

const DashboardIndex = () => {
  // Custom data for the DataTable


  const data = [
    { id: 1, name: "John Doe", email: "john@example.com" ,  email1: "john@example.com" },
    { id: 2, name: "Jane Smith", email: "jane@example.com" ,  email1: "john@example.com"},
    { id: 3, name: "Jane Smith", email: "jane@example.com" ,  email1: "john@example.com"},
    { id: 4, name: "Jane Smith", email: "jane@example.com" ,  email1: "john@example.com"},
    { id: 5, name: "Jane Smith", email: "jane@example.com" ,  email1: "john@example.com"},
    { id: 6, name: "Jane Smith", email: "jane@example.com" ,  email1: "john@example.com"},
    { id: 7, name: "Jane Smith", email: "jane@example.com" ,  email1: "john@example.com"},
    { id: 8, name: "Jane Smith", email: "jane@example.com" ,  email1: "john@example.com"},
    { id: 9, name: "Jane Smith", email: "jane@example.com" ,  email1: "john@example.com"},
    { id: 10, name: "Jane Smith", email: "jane@example.com" ,  email1: "john@example.com"},
  ];

  return (
    <div>
      <DataTable data={data} />
    </div>
  );
};

export default DashboardIndex;
