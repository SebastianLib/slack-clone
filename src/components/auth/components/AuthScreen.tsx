"use client";
import React, { useState } from "react";
import SignInCard from "./SignInCard";
import SignUpCard from "./SignUpCard";
import { SignInFlow } from "../types";

const AuthScreen = () => {
  const [state, setState] = useState<SignInFlow>("signIn");
  return (
    <div className="h-screen flex items-center justify-center bg-[#5C3B58]">
      <div className="h-auto flex justify-center md:w-[420px]">
        {state === "signIn" ? (
          <SignInCard setState={setState} />
        ) : (
          <SignUpCard setState={setState} />
        )}
      </div>
    </div>
  );
};

export default AuthScreen;
