const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
  event.preventDefault();

  try {
    const response = await fetch(`${API_ENDPOINT}/organisations`, {
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
      throw new Error(`Sign-up failed with status ${response.status}`);
    }
    console.log("Sign-up successful updated using new-branch draft");

    const data = await response.json();
    localStorage.setItem("authToken", data.token);
    localStorage.setItem("userData", JSON.stringify(data.user));
  } catch (error) {
    console.error("Sign-up failed:", error);
  }
};
