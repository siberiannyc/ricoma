import React from "react";
import FooterMob from "../elements/footer/footerMob";
import FooterDesk from "../elements/footer/footerDesk";
import Modal from "./modal";
import { useState } from "react";

export default function Footer() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <FooterMob setOpen={setOpen} />
      <FooterDesk setOpen={setOpen} />
      {open && <Modal setOpen={setOpen} />}
    </>
  );
}
