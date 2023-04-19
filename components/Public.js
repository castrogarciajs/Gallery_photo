import { useState } from "react";
import { supabase } from "@/utils/db.js";

function Public() {
  const [alt, setAlt] = useState("");
  const [url, setUrl] = useState("");
  const [err, setErr] = useState("");

  const handleSubmimt = async (e) => {
    e.preventDefault();
    console.log("event");

    if (!url) {
      setErr("PORFAVOR SELECCIONA UNA IMAGEN");
      return;
    }
    const file = url.name.split(".").pop();
    const fileName = `${Math.random().toString(36).substring(7)}.${file}`;
    const filePath = `${fileName}`;
    const response = supabase.storage.from("public").getPublicUrl();

    console.log(response);
  };
  return (
    <div>
      <span>{err}</span>
      <form onSubmit={handleSubmimt} encType="multipart/form-data">
        <label>
          Alt:
          <input
            type="text"
            placeholder="Ingresa un Titutlo"
            onChange={(e) => setAlt(e.target.value)}
          />
        </label>
        <br />
        <label>
          Image:
          <input type="file" onChange={(e) => setUrl(e.target.files[0])} />
        </label>
        <br />
        <button type="submit">PUBLICAR</button>
      </form>
    </div>
  );
}

export default Public;
