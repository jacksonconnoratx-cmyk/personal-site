Metrics entry helper
Use HERE when you want to log a batch of data quickly.

```
Convert this into JSON entries for my [gym/coding/habit] log.

Raw data:
[paste your notes, e.g. "monday: deadlift 3x5 @ 120kg, bench 4x8 @ 80kg"]

Output format for gym:
{"id": "uuid", "date": "YYYY-MM-DD", "exercise": "", "sets": 0, "reps": 0, "weight_kg": 0, "notes": "", "is_public": true}

Give me a JSON array I can paste directly into /data/gym.json.
```