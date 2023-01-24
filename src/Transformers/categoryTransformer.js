import React from "react";

export default function categoryTransformer(category) {
  const arr = Object.keys(category);
  //   arr.push("Select Category");
  return arr;
}
