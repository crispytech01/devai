"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

import Form from "@components/Form";

const EditMyDigest = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const digestId = searchParams.get("id");

  const [post, setPost] = useState({ digest: "", tag: "", });
  const [submitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const getDigestDetails = async () => {
      const response = await fetch(`/api/digest/${digestId}`);
      const data = await response.json();

      setPost({
        digest: data.digest,
        tag: data.tag,
      });
    };

    if (digestId) getDigestDetails();
  }, [digestId]);

  const editDigest = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (!digestId) return alert("Missing digest identity!");

    try {
      const response = await fetch(`/api/digest/${digestId}`, {
        method: "PATCH",
        body: JSON.stringify({
          digest: post.digest,
          tag: post.tag,
        }),
      });

      if (response.ok) {
        router.push("/");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Form
      type='Edit'
      post={post}
      setPost={setPost}
      submitting={submitting}
      handleSubmit={editDigest}
    />
  );
};

export default EditMyDigest;