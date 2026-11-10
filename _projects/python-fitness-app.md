---
title: "A Basic Python Fitness App"
subtitle: "My first coding project: a workout-planning tool for personal training clients, built with early ChatGPT in about 30 hours."
description: "My first coding project: a basic Python workout planner for personal training clients, built with early ChatGPT using CSV exercise lists and HTML printouts."
date: 2025-08-15
category: Software
tags: [python, software, fitness, ai]
pdf: /projects/project1/doc1.pdf
repo: https://github.com/Markopolo2023/Basic-Python-Fitness-APP
redirect_from: [/projects/project1/project1.html]
order: 3
---

> **Disclaimer:** Use at your own risk. This app is not intended to be professional or to give professional advice. It is a basic app to help with planning. Consult a fitness professional for training advice.

This was the first app I ever tried to write, and the code shows it. There's plenty I would improve now, but it did the job I needed at the time.

## The problem

A few years ago I was working as a personal trainer. Fitness apps were too expensive for me while I was starting out, and I knew what I actually needed: a basic tool to help me plan client workouts and work out a few simple numbers.

I wasn't a programmer, so I tried early AI to see what we could build together. I signed up for ChatGPT and got started.

## At a glance

- **Language:** Python, written in VS Code
- **Time:** about 30 hours in total, including Googling, Stack Exchange, editing code, learning how to prompt and querying GPT
- **Data:** exercise and modality lists stored in CSV files
- **Interface:** a desktop GUI launched from `Main.py`
- **Output:** a finished workout plan you can view and print as an HTML page
- **Code:** [Basic-Python-Fitness-APP on GitHub](https://github.com/Markopolo2023/Basic-Python-Fitness-APP)

## How it works

The app is built around two kinds of list:

- **Modalities** such as strength training, endurance and cardio.
- **Exercises**, each tagged with several attributes. What equipment does it use? Which part of the body does it work? Can it be done with a particular injury?

Both lists live in `.csv` files that `Main.py` reads. When you run `Main.py`, a GUI opens and you put a workout plan together from those lists. You can then view the finished plan as an HTML page and print it.

The CSV lists have to be filled in by hand. To make that quicker, I also built a small GUI tool for adding a single entry to a list.

> **Tip:** If you want a head start on the CSV files, give a modern LLM (GPT, Claude, Grok or another) a few example rows in the right format and ask it to generate more.

## How it went

I had no problems with it after I started using it, though by then I knew it inside out. It was a huge help for planning my clients' workouts at the time.

## What I'd do differently

- **Structure the code properly.** As a first project, it shows its age, and it could be improved in a lot of ways.

Even so, it showed me that a non-programmer working with an AI assistant could build a useful tool in a few dozen hours, and it's where my coding started.
