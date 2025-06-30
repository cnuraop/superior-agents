import os
from openai import OpenAI
from agent.base_agent import BaseAgent
from .prompts import agent_prompt
from dotenv import load_dotenv


load_dotenv()

client = OpenAI(api_key=os.getenv("OPENAI_API_KEY"))

class HackMateCopilot(BaseAgent):
    def __init__(self):
        super().__init__(
            name="HackMateCopilot",
            prompt=agent_prompt,
            memory=True
        )

    def run(self, message: str) -> str:
        try:
            response = client.chat.completions.create(
                model="gpt-4",  # or gpt-3.5-turbo
                messages=[
                    {"role": "system", "content": self.prompt},
                    {"role": "user", "content": message}
                ],
                temperature=0.7
            )
            return response.choices[0].message.content.strip()
        except Exception as e:
            return f"Error from OpenAI: {e}"
