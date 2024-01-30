import React from "react";
const API_ENDPOINT = "api_endpoint";

const organisationName = "org_name";
const userName = "user_name";
const userEmail = "email@example.com";
const userPassword = "password";

const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
  event.preventDefault();
  try {
    const response = await fetch(`${API_ENDPOINT}/organisation`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: organisationName,
        user_name: userName,
        email: userEmail,
        password: userPassword,
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
