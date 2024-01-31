import PageIntro from "@/components/PageIntro";
import React from "react";
import Dev from "@/components/dev";
import Manish from "@/images/dev/untitled.png";

const Devloper = () => {
  return (
    <>
      <img src={Manish} />
      <PageIntro eyebrow="Developer" title="मनिष तामाङ">
        <p>
          Manish Tamang is a Student of <strong>Prashanti Academy</strong>{" "}
          studies in grade-10 (2080 B.S/ 2023)
        </p>
        <Dev />
      </PageIntro>
    </>
  );
};

export default Devloper;
