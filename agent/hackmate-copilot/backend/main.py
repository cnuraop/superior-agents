from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
from agent.hackmate_copilot.agent import HackMateCopilot


app = FastAPI()
agent = HackMateCopilot()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.post("/query")
async def query(request: Request):
    data = await request.json()
    user_message = data.get("message", "")
    reply = agent.run(user_message)
    return {"reply": reply}
