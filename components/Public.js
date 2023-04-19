function Public() {
  const handleSubmit = (event) => {
    event.preventDefault();

    const form = new FormData(event.target);
    const target = Object.fromEntries([...form.entries()]);
    console.log("title: ", target.title, "image: ", target.image.name);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          <span>TITLE: </span>
          <br />
          <input type="text" name="title" placeholder="mi title" required/>
        </label>
        <br />
        <label>
          <span>IMAGE: </span>
          <br />
          <input type="file" name="image" placeholder="mi title" required/>
        </label>
        <br />
        <button type="submit">PUBLICAR</button>
      </form>
    </>
  );
}

export default Public;
