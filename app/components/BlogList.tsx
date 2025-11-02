"use client";
import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Link from "next/link";
import Image from "next/image";
import AppNavbar from "./AppNavbar";
import Button from "react-bootstrap/Button";
// import { blogs } from "../data/blogs";

interface Blog {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  author: string;
  date: string;
}

const BlogList: React.FC = () => {
  const [data, setData] = useState<Blog[]>([]);
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>("");

  useEffect(() => {
    const blogs: Blog[] = JSON.parse(localStorage.getItem("myData") || "[]");
    Promise.resolve().then(() => setData(blogs));
  }, []);

  const toggleExpandedId = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const filteredData = searchQuery.trim()
    ? data.filter((item) =>
        item.title.toLowerCase().includes(searchQuery.trim().toLowerCase())
      )
    : data;

  return (
    <div>
      <AppNavbar />
      <div className="container bg-light" style={{ marginTop: "5rem" }}>
        <input
          type="text"
          className="form-control mb-2"
          placeholder="Search..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <div className="row">
          {filteredData.map((item) => (
            <div key={item.id} className="col-md-4">
              <div className="card mb-3">
                <Image
                  loading="eager"
                  className="card-img-top"
                  src={item.imageUrl}
                  alt="Blog"
                  width={400}
                  height={250}
                />
                <div className="card-body">
                  <h5 className="card-title">{item.title}</h5>
                  <p className="card-text">
                    {expandedId === item.id
                      ? `${item.description.substring(0, 500)}...`
                      : `${item.description.substring(0, 50)}...`}
                  </p>
                  <div className="d-flex justify-content-between align-items-center">
                    <p className="m-0 small">
                      <strong>Posted by </strong>
                      {`${item.author.toUpperCase()}`}
                    </p>
                    <Link href={`/blog/${item.id}`}>
                      <Button variant="outline-secondary" size="sm">
                        Read more
                      </Button>
                    </Link>
                  </div>
                  <small className="text-muted">
                    <u>{item.date}</u>
                  </small>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogList;
