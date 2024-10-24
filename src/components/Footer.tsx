import React from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { Button } from "./ui/button";

const Footer = () => {
  return (
    <>
      <div className="border-t border-gray-800">
        <MaxWidthWrapper className="py-4 flex justify-between items-center">
          <span className="text-zinc-400">
            &copy; 2024 ChatLinky. All rights reserved.
          </span>
          <div className="space-x-4">
            <Button variant="ghost" size="sm" className="text-zinc-400 hover:text-white hover:bg-zinc-800">Privacy Policy</Button>
            <Button variant="ghost" size="sm" className="text-zinc-400 hover:text-white hover:bg-zinc-800">Terms of Service</Button>
          </div>
        </MaxWidthWrapper>
      </div>
    </>
  );
};

export default Footer;
