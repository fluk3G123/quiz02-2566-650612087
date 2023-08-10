"use client";

import { Comment } from "@/components/Comment";
import { PostOwner } from "@/components/PostOwner";
import { comments } from "@/libs/comments";
import { Reply } from "@/components/Reply";
import { useState } from "react";

export default function HomePage() {
  const [Comments, setComents] = useState([]);
  return (
    <div
      style={{ minHeight: "100vh", backgroundColor: "#18191A" }}
      className="p-3"
    >
      {/* Entire App Container */}
      <div
        style={{ maxWidth: "700px", backgroundColor: "#242526" }}
        className="mx-auto p-3 rounded rounded-3 shadow-sm"
      >
        {/* Post Owner Example*/}
        <PostOwner
          userImagePost="/profileImages/รูป-นิธิศ์พงษ์-ฟลุ๊ค.jpg"
          UserNamePost="Nithipong Howong 650612087"
          Post="Quiz ง่ายจังเลยครับ ขอยาก ๆ กว่านี้ได้ไหม #261207"
          Like="100 คน"
        />

        {/* Comment Example */}
        {comments.map((comment) => (
          <Comment
            userImagePath={comment.userImagePath}
            username={comment.username}
            commentText={comment.replyText}
            likeNum={comment.likeNum}
          />
        ))}

        {/* Reply Example */}
        <Reply />
        <Reply />
        <Comment
          userImagePath={comments.userImagePath}
          username={comments.username}
          commentText={comments.replyText}
          likeNum={comments.likeNum}
        />

        {/* map-loop render Comment component here */}
      </div>
    </div>
  );
}
