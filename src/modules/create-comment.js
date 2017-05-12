function makeComment(comment) {
  const promise = fetch("/comments", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(comment)
  });
  const anotherPromise = promise.then((data) => {
  });
  return anotherPromise;
}

export default makeComment;