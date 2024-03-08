import { getAllPosts, getPostById } from "@/utils/api";
import { PostType } from "@/utils/types";
import styles from "@/styles/Post.module.css";
import React from "react";

type Props={
    post:PostType
}

export async function getStaticProps({ params }: any) {
  const post = await getPostById(params.id);
  return {
    props: {
      post,
    },
  };
}

export async function getStaticPaths() {
  const posts = await getAllPosts();
  const paths = posts.map((post: PostType) => ({
    params: { id: post.id },
  }));

  return {
    paths,
    fallback: false,
  };
}

const Post = ({ post }: Props) => {
    console.log(post)
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{post.title}aa</h1>
      <p className={styles.content}>{post.content}</p>
      <p className={styles.meta}>Author: {post.auther}</p>
      <p className={styles.meta}>Created at: {post.createdAt}</p>
    </div>
  );
};

export default Post;