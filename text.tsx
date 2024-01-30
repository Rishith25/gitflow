import React from "react";
const API_ENDPOINT = "api_endpoint";

const organisation_name = "org_name";
const user_name = "user_name";
const user_email = "email@example.com";
const user_password = "password";

const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
  event.preventDefault();
  try {
    const response = await fetch(`${API_ENDPOINT}/organisation`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: organisation_name,
        user_name: user_name,
        email: user_email,
        password: user_password,
      }),
    });

    if (!response.ok) {
      throw new Error(`Sign-up failed ${response.status}`);
    }
    console.log("Sign-up successful");

    const data = await response.json();
    localStorage.setItem("authToken", data.token);
    localStorage.setItem("userData", JSON.stringify(data.user));
    const navigate = (path: string) => {
      // Your navigation logic here
    };
    navigate("/dashboard");
  } catch (error) {
    console.error("Sign-up failed:", error);
  }
};
