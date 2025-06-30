# backend/agent/base_agent.py

class BaseAgent:
    def __init__(self, name: str, prompt: str, memory: bool = False):
        self.name = name
        self.prompt = prompt
        self.memory = memory

    def run(self, message: str):
        return f"[{self.name}] You said: {message}"
