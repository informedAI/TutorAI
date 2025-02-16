export async function getChatResponse(
  userMessage: string,
  system_prompt: string
): Promise<string> {
  const payload = {
    max_tokens: 4096,
    stream: false,
    model: "gpt-4o",
    // response_format: { type: "json_object" }, // metion JSON in the prompt to use this
    messages: [
      {
        role: "system",
        content: system_prompt,
      },
      {
        role: "user",
        content: userMessage,
      },
    ],
  };

  const response = await fetch("https://api.aimlapi.com/v1/chat/completions", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.AIML_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    console.log(response);

    // throw new Error("Something went wrong");
    return "Could not get response";
  }

  const data = await response.json();

  return data.choices[0].message.content;
}
