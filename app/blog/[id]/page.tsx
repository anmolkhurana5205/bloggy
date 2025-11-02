"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import AppNavbar from "@/app/components/AppNavbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Image from "next/image";

interface Blog {
  id: number;
  author: string;
  title: string;
  description: string;
  imageUrl: string;
  date: string;
}

const BlogDetails: React.FC = () => {
  const [blogDetail, setBlogDetail] = useState<Blog | null>(null);
  const params = useParams();
  const id = params?.id;

  useEffect(() => {
    if (typeof window === "undefined" || !id) return;
    const storedBlogs = localStorage.getItem("myData");
    if (!storedBlogs) return;

    const blogs: Blog[] = JSON.parse(storedBlogs);
    const selectBlog = blogs.find((blog) => blog.id === Number(id));
    Promise.resolve().then(() => setBlogDetail(selectBlog || null));
  }, [id]);

  if (!blogDetail) {
    return (
      <div className="container text-center mt-5">
        <AppNavbar />
        <h3>Loading or Blog not found...</h3>
      </div>
    );
  }

  return (
    <div
      className="container bg-light"
      style={{ marginTop: "5rem", maxWidth: "800px" }}
    >
      <AppNavbar />
      <div className="card mt-5 shadow-sm">
        <Image
          className="card-img-top"
          src={blogDetail.imageUrl}
          alt="Blog"
          width={800}
          height={400}
          style={{ maxWidth: "100%", maxHeight: "400px", objectFit: "cover" }}
        />
        <div className="card-body">
          <h1 className="card-title">{blogDetail.title}</h1>
          <p className="card-text">{blogDetail.description}</p>
          <p className="card-text">
            <strong>Author:</strong> {blogDetail.author}
          </p>
          <p className="card-text">
            <strong>Date:</strong> {blogDetail.date}
          </p>
        </div>
      </div>
    </div>
  );
};
export default BlogDetails;
