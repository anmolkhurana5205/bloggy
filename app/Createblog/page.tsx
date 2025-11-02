"use client";
import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import AppNavbar from "../components/AppNavbar";

interface Blog {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  author: string;
  date: string;
}

const CreateBlog: React.FC = () => {
  const [author, setAuthor] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [imageUrl, setImageUrl] = useState<string>("");

  const initialBlogs: Blog[] =
    typeof window !== "undefined"
      ? JSON.parse(localStorage.getItem("myData") || "[]")
      : [];

  const [data, setData] = useState<Blog[]>(initialBlogs);

  useEffect(() => {
    localStorage.setItem("myData", JSON.stringify(data));
  }, [data]);

  const addData = () => {
    const currentDate = new Date().toLocaleDateString();
    const newData: Blog = {
      id: data.length + 1,
      title,
      description,
      imageUrl,
      author,
      date: currentDate,
    };
    const updatedData = [...data, newData];
    setData(updatedData);
    setAuthor("");
    setTitle("");
    setDescription("");
    setImageUrl("");
  };
  return (
    <>
      <AppNavbar />
      <div className="container bg-light" style={{ marginTop: "5rem" }}>
        <div className="row">
          <div className="col">
            <input
              type="text"
              className="form-control mb-2"
              placeholder="Author"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
            />
            <input
              type="text"
              className="form-control mb-2"
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <textarea
              className="form-control mb-2"
              placeholder="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <input
              type="text"
              className="form-control mb-2"
              placeholder="Image URL"
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
            />
            <button onClick={addData} className="btn btn-primary mb-2">
              Add Data
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateBlog;
