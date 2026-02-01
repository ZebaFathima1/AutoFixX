const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY;
const GEMINI_API_URL = "https://generativelanguage.googleapis.com/v1beta/models/gemini-3-flash-preview:generateContent";

export interface FixCodeRequest {
  bugDescription: string;
  brokenCode: string;
}

export interface FixCodeResponse {
  fixedCode: string;
  explanation: string;
  success: boolean;
}

export const fixCode = async (request: FixCodeRequest): Promise<FixCodeResponse> => {
  if (!GEMINI_API_KEY) {
    throw new Error("Gemini API key is not configured. Please set VITE_GEMINI_API_KEY in your .env file.");
  }

  try {
    const prompt = `You are an expert Python developer. Fix the following Python code based on the bug description provided.

Bug Description: ${request.bugDescription}

Broken Python Code:
\`\`\`python
${request.brokenCode}
\`\`\`

Please provide:
1. The corrected Python code (inside a code block)
2. A brief explanation of the fix

Format your response as:
FIXED_CODE:
\`\`\`python
[fixed code here]
\`\`\`

EXPLANATION:
[brief explanation here]`;

    console.log("🔄 Calling Gemini API...");
    
    const response = await fetch(`${GEMINI_API_URL}?key=${GEMINI_API_KEY}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        contents: [
          {
            parts: [
              {
                text: prompt,
              },
            ],
          },
        ],
      }),
    });

    console.log("📊 API Response Status:", response.status);

    if (!response.ok) {
      const error = await response.json().catch(() => ({}));
      console.error("❌ API Error:", error);
      throw new Error(error.error?.message || `API error: ${response.statusText}`);
    }

    const data = await response.json();
    console.log("📦 API Response Data:", data);

    const responseText = data.candidates?.[0]?.content?.parts?.[0]?.text || "";
    
    if (!responseText) {
      throw new Error("No response received from API");
    }

    console.log("📝 Response Text:", responseText);

    // Parse the response to extract fixed code and explanation
    const fixedCodeMatch = responseText.match(/FIXED_CODE:\s*```python\s*([\s\S]*?)```/);
    const explanationMatch = responseText.match(/EXPLANATION:\s*([\s\S]*?)(?=\n\n|\n$|$)/);

    let fixedCode = fixedCodeMatch ? fixedCodeMatch[1].trim() : "";
    const explanation = explanationMatch ? explanationMatch[1].trim() : "Code fixed successfully";

    // If no fixed code found with the pattern, try to extract any Python code block
    if (!fixedCode) {
      const codeMatch = responseText.match(/```python\s*([\s\S]*?)```/);
      fixedCode = codeMatch ? codeMatch[1].trim() : responseText;
    }

    if (!fixedCode) {
      throw new Error("Could not parse fixed code from API response");
    }

    console.log("✅ Fixed code extracted successfully");

    return {
      fixedCode,
      explanation,
      success: true,
    };
  } catch (error) {
    console.error("🚨 Error in fixCode:", error);
    if (error instanceof Error) {
      throw error;
    }
    throw new Error("An unexpected error occurred while contacting the API");
  }
};