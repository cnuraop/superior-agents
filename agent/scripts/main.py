# from scripts.starter import starter_prompt

# if __name__ == "__main__":
# 	# modify this if you want to run this forever
# 	starter_prompt()

from agent.hackmate_copilot.agent import HackMateCopilot


if __name__ == "__main__":
    agent = HackMateCopilot()
    agent.run()
