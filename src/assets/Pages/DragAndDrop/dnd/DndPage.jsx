import { closestCorners, DndContext } from "@dnd-kit/core";
import {
  arrayMove,
  horizontalListSortingStrategy,
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { useEffect, useState } from "react";
import { FaRegSave } from "react-icons/fa";
import { MdOutlineCreateNewFolder } from "react-icons/md";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Swal from "sweetalert2";
import Task from "./Task";
import Colum from "./Colum";

const DndPage = () => {
  const [fields, setFields] = useState([]);

  useEffect(() => {
    const fetchUserItems = async () => {
      try {
        const response = await fetch("http://localhost:3000/userItems");
        const data = await response.json();
        setFields(data.map((item) => ({ ...item, collapsed: false })));
      } catch (error) {
        console.error("Error fetching userItems:", error);
        setFields([]); // Ensure fields is initialized as an empty array on error
      }
    };

    fetchUserItems();
  }, []);

  const handleAddField = () => {
    const isAnyFieldEmpty = fields.some(
      (field) =>
        field.user_name === "" ||
        field.user_email === "" ||
        field.user_job_title === "" ||
        field.user_department_id === ""
    );
  
    if (!isAnyFieldEmpty) {
      const newId = fields.length; // Assuming `user_order` should be the length of fields array
      const newField = {
        user_order: newId,
        user_name: "",
        user_email: "",
        user_job_title: "",
        user_department_id: "",
        collapsed: false,
      };
  
      setFields([...fields, newField]);
    } else {
      toast("Please fill up all input fields");
    }
  };
  

  const handleDeleteField = async (id) => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    });

    if (result.isConfirmed) {
      try {
        const response = await fetch(`http://localhost:3000/userItems/${id}`, {
          method: "DELETE",
        });

        if (response.ok) {
          Swal.fire({
            title: "Deleted!",
            text: "Your department has been deleted.",
            icon: "success",
          });

          setFields(fields.filter((field) => field.user_order !== id));
        } else {
          const data = await response.json();
          console.error("Error deleting field:", data);
        }
      } catch (error) {
        console.error("Error deleting field:", error);
      }
    }
  };

  const handleChange = (id, e) => {
    const { name, value } = e.target;
    setFields((prevFields) =>
      prevFields.map((field) =>
        field.user_order === id ? { ...field, [name]: value } : field
      )
    );
  };
  

  const handleToggle = (id) => {
    console.log(`Attempting to toggle field with id: ${id}`); // Debugging statement
    setFields(
      fields.map((field) =>
        field.user_id === id
          ? { ...field, collapsed: !field.collapsed }
          : field
      )
    );
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateFields = () => {
   
    for (const field of fields) {
      if (
        !field.user_name ||
        !field.user_email ||
        !field.user_job_title ||
        !field.user_department_id
      ) {
        toast.error("All fields must be filled out");
        return false;
      }
      if (!validateEmail(field.user_email)) {
        toast.error(`Invalid email format for ${field.user_name}`);
        return false;
      }
    }
    return true;
  };

  const handleSubmit = async () => {
    if (!validateFields()) {
      return;
    }

    try {
      const response = await fetch("http://localhost:3000/userItems", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(fields),
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error("Error data:", errorData);
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log("Success:", data);
      toast.success("Data submitted successfully!");
    } catch (error) {
      console.error("Error:", error);
      toast.error("Failed to submit data");
    }
  };

  // dnd
  const getTaskPos = (id) =>
    fields.findIndex((field) => field.user_order === id);

  const handleDragEnd = (event) => {
    const { active, over } = event;

    if (!over) return;

    if (active.id === 'colum') {
      handleAddField();
    } else if (active.id !== over.id) {
      setFields((fields) => {
        const originalPos = getTaskPos(active.id);
        const newPos = getTaskPos(over.id);
        return arrayMove(fields, originalPos, newPos);
      });
    }
  };

  return (
    <div className="grid grid-cols-2 gap-2 w-full">
      <div>
        <DndContext onDragEnd={handleDragEnd} collisionDetection={closestCorners}> 
          <SortableContext items={[]} strategy={horizontalListSortingStrategy}>
            <Colum id="colum" />
          </SortableContext>
        </DndContext>
      </div>
      <div className="border rounded-sm h-screen p-5 bg-white overflow-scroll">
        <ToastContainer />
        <div className="flex flex-row gap-3 text-2xl text-black fixed">
          <button onClick={handleSubmit} className="bg-slate-500 p-3 btn-circle">
            <FaRegSave />
          </button>
          <button
            onClick={handleAddField}
            className="bg-slate-500 p-3 btn-circle"
          >
            <MdOutlineCreateNewFolder />
          </button>
        </div>
        <DndContext onDragEnd={handleDragEnd} collisionDetection={closestCorners}> 
          <SortableContext items={fields.map(field => field.user_order)} strategy={verticalListSortingStrategy}>
            {fields.map((field) => (
              <Task
                key={field.user_order}
                id={field.user_order}
                field={field}
                handleChange={handleChange}
                handleToggle={handleToggle}
                handleDeleteField={handleDeleteField}
              />
            ))}
          </SortableContext>
        </DndContext>
      </div>
    </div>
  );
};

export default DndPage;
