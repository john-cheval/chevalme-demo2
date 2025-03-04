"use client";
import { useEffect, useState } from "react";

import "./lp.css";

function DummyComp({ page }) {
  const [htmlContent, setHtmlContent] = useState("");

  useEffect(() => {
    let filePath = "/htmltemplate/" + page + ".html";

    fetch(filePath)
      .then((response) => response.text())
      .then((data) => setHtmlContent(data))
      .catch((error) => console.error("Error loading HTML:", error));
  }, [page]);

  return (
    <div
      className="pt-20 md:pt-28"
      dangerouslySetInnerHTML={{ __html: htmlContent }}
    />
  );
}

export default DummyComp;
