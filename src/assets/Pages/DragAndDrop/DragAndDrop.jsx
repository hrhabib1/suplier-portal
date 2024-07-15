import { useEffect, useState } from "react";
import "./DragAndDrop.css";
import { closestCorners, DndContext } from "@dnd-kit/core";
import { arrayMove } from "@dnd-kit/sortable";
import DragColum from "./DragColum";
import SideDrag from "./SideDrag";

const DragAndDrop = () => {
 
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const response = await fetch("http://localhost:3000/employees");
        const data = await response.json();
        setEmployees(data);
      } catch (error) {
        console.error("Error fetching employees:", error);
      }
    };
    fetchEmployees();
  }, []); // Add empty dependency array to avoid infinite loop



  // dnd
  const getTaskPos = (id) => employees.findIndex(employee => employee.employees_id === id);
  
  const handleDragEnd = (event) => {
    const { active, over } = event;

    if (!over) return;

    if (active.id !== over.id) {
      setEmployees((employees) => {
        const originalPos = getTaskPos(active.id);
        const newPos = getTaskPos(over.id);
        return arrayMove(employees, originalPos, newPos);
      });
    }
  };

  return (
    <div className="grid grid-cols-2 gap-2 w-full">
      <SideDrag></SideDrag>

      <DndContext 
        onDragEnd={handleDragEnd}
        collisionDetection={closestCorners}
      >
        <DragColum employees={employees} />
      </DndContext>
    </div>
  );
};

export default DragAndDrop;
